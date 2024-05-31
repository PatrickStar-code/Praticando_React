import { useEffect, useRef, useState } from 'react'
import { ChatReceive } from '../../Components/Chat_Receive'
import { ChatSend } from '../../Components/Chat_Send'
import { useNavigate } from 'react-router-dom'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const formSchema = z.object({
  username: z.string().nonempty('Preencha o nome de usuário'),
  textmessage: z.string().nonempty('Preencha a mensagem'),
})

type FormSchema = z.infer<typeof formSchema>

interface Message {
  username: string
  textmessage: string
}

export function Chat() {
  const [message, setMessage] = useState<Message[]>([])
  const ws = useRef<null | WebSocket>(null)
  const navigate = useNavigate()
  const username = localStorage.getItem('username') || ''

  const { register, handleSubmit, reset } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  })

  const link = document.querySelector<HTMLLinkElement>(
    "link[rel='shortcut icon']",
  )
  const pageName = document.querySelector<HTMLTitleElement>('title')

  if (link && pageName) {
    link.href = 'src/Assets/chat.png'
    pageName.innerHTML = 'Chat'
  }

  useEffect(() => {
    if (ws.current) return

    ws.current = new WebSocket('ws://localhost:8080')

    ws.current.onopen = () => {
      console.log('WebSocket Client Connected')
      // Solicitar o histórico de mensagens
      ws.current?.send(JSON.stringify({ type: 'history_request' }))
    }

    ws.current.onmessage = (event) => {
      const receivedData = JSON.parse(event.data)
      // console.log('Message received:', receivedData)

      if (receivedData.type === 'history') {
        setMessage(receivedData.messages)
      } else {
        setMessage((prevMessages) => [...prevMessages, receivedData])
      }
    }

    ws.current.onclose = () => {
      console.log('WebSocket Client Disconnected')
    }

    ws.current.onerror = (error) => {
      console.error('WebSocket Error:', error)
    }

    // Limpeza ao desmontar o componente
    return () => {
      ws.current?.close()
      ws.current = null
    }
  }, [])

  function sendMessage(data: Message) {
    if (username && message) {
      const newMessage = {
        username,
        textmessage: data.textmessage,
      }
      if (ws.current) {
        ws.current.send(JSON.stringify(newMessage))
        reset()
      }
    } else {
      console.warn('WebSocket is not connected or message is empty')
    }
  }

  useEffect(() => {
    const username = localStorage.getItem('username')
    if (!username) {
      navigate('/loginChat')
    }
  }, [navigate])
  return (
    <>
      <div className="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
        <div className="bg-blue-500 p-4 text-white flex justify-between items-center">
          <span>Logado como {username}</span>

          <span>Chat App</span>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <div className="flex flex-col space-y-2">
            {message.map((message, index) =>
              message.username === username ? (
                <ChatSend
                  key={index}
                  username={message.username}
                  textmessage={message.textmessage}
                />
              ) : (
                <ChatReceive
                  key={index}
                  username={message.username}
                  textmessage={message.textmessage}
                />
              ),
            )}
          </div>
        </div>

        <div>
          <form
            className="w-full bg-white p-4 flex items-center"
            onSubmit={handleSubmit(sendMessage)}
          >
            <input
              type="text"
              placeholder="Type your message..."
              {...register('textmessage')}
              className="flex-1 border rounded-full px-4 py-2  focus:outline-none"
            />
            <input
              type="text"
              defaultValue={username}
              className="hidden"
              {...register('username')}
            />
            <button
              className="bg-blue-500 text-white rounded-full p-2 ml-2 hover:bg-blue-600 focus:outline-none"
              type="submit"
            >
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <path
                    d="M11.5003 12H5.41872M5.24634 12.7972L4.24158 15.7986C3.69128 17.4424 3.41613 18.2643 3.61359 18.7704C3.78506 19.21 4.15335 19.5432 4.6078 19.6701C5.13111 19.8161 5.92151 19.4604 7.50231 18.7491L17.6367 14.1886C19.1797 13.4942 19.9512 13.1471 20.1896 12.6648C20.3968 12.2458 20.3968 11.7541 20.1896 11.3351C19.9512 10.8529 19.1797 10.5057 17.6367 9.81135L7.48483 5.24303C5.90879 4.53382 5.12078 4.17921 4.59799 4.32468C4.14397 4.45101 3.77572 4.78336 3.60365 5.22209C3.40551 5.72728 3.67772 6.54741 4.22215 8.18767L5.24829 11.2793C5.34179 11.561 5.38855 11.7019 5.407 11.8459C5.42338 11.9738 5.42321 12.1032 5.40651 12.231C5.38768 12.375 5.34057 12.5157 5.24634 12.7972Z"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{' '}
                </g>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
