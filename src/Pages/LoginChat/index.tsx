import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import z from 'zod'

const formSchema = z.object({
  username: z.string().nonempty('Preencha o nome de usuário'),
})

type FormSchema = z.infer<typeof formSchema>

export default function LoginChat() {
  const link = document.querySelector<HTMLLinkElement>(
    "link[rel='shortcut icon']",
  )
  const pageName = document.querySelector<HTMLTitleElement>('title')

  if (link && pageName) {
    link.href = 'src/Assets/chat.png'
    pageName.innerHTML = 'Login Chat'
  }

  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  })

  const [username, setUsername] = useState('' as string)

  function handleLogin(data: FormSchema) {
    setUsername(data.username)
    localStorage.setItem('username', data.username)
    reset()
  }

  useEffect(() => {
    const username = localStorage.getItem('username')
    if (username && username !== '') {
      navigate('/chat')
    }
  }, [navigate])

  useEffect(() => {
    if (username !== '') {
      navigate('/chat')
    }
  }, [username, navigate])

  return (
    <div className="bg-pink-500 h-screen overflow-hidden flex items-center justify-center">
      <div className="bg-white lg:w-5/12 md:6/12 w-10/12 shadow-3xl">
        <div className="bg-gray-800 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFF">
            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
          </svg>
        </div>
        <form className="p-12 md:p-24" onSubmit={handleSubmit(handleLogin)}>
          <div className="flex items-center text-lg mb-6 md:mb-8">
            <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
              <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
            </svg>

            <input
              type="text"
              id="username"
              className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
              placeholder="Username"
              {...register('username')}
            />
          </div>
          <p className="text-red-500 text-xs italic">
            {errors.username?.message}
          </p>

          <button className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
