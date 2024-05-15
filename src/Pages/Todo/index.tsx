import { useState } from 'react'
import Task from '../../Components/Todo_Task'
import { Plus } from 'phosphor-react'

export interface taskProps {
  id: number
  task: string
  checked: boolean
}

export default function Todo() {
  const [task, setTask] = useState<taskProps[]>([
    { id: 1, task: 'teste', checked: false },
  ])
  const [time, setTime] = useState('')
  const dw = [
    'Domingo',
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sábado',
  ]
  const Data = new Date()
  function refreshTime() {
    setTime(Data.toLocaleTimeString())
  }

  setInterval(refreshTime, 1000)
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#cbd7e3]">
      <div className="h-auto  w-[80rem] bg-white rounded-lg p-4">
        <div className="mt-3 text-sm text-[#8ea6c8] flex justify-between items-center">
          <p className="set_date">
            {dw[Data.getDay()] +
              ' ' +
              Data.getDate() +
              ' ' +
              Data.getFullYear()}
            {/* Thursday 28 May */}
          </p>
          <p className="set_time">{Data.toLocaleTimeString().slice(0, 5)}</p>
        </div>
        <div className="flex justify-between mt-1">
          <p className="text-xl font-semibold mt-2 text-[#063c76]">
            To-do List
          </p>
          <button className="bg-green-400 rounded-lg p-2">
            <Plus size={24} />
          </button>
        </div>
        <ul className="my-4 ">
          {task.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </ul>
      </div>
    </div>
  )
}
