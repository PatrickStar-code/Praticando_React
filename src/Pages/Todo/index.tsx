import { useState } from 'react'
import Task from '../../Components/Todo_Task'
import { Plus } from 'phosphor-react'
import ModalCreateTask from '../../Components/Modal_CreateTask'

export interface taskProps {
  id: number
  taskName: string
  checked: boolean
}

export default function Todo() {
  const [task, setTask] = useState<taskProps[]>([])

  const [isOpen, setIsOpen] = useState(false)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const addTask = (taskName: string) => {
    console.log(taskName)
    setTask([...task, { id: task.length + 1, taskName, checked: false }])
  }

  const checked = (id: number) => {
    setTask(
      task.map((task) => {
        if (task.id === id) {
          return { ...task, checked: !task.checked }
        }
        return task
      }),
    )
  }

  const deleteTask = (id: number) => {
    setTask(task.filter((task) => task.id !== id))
  }

  const editTask = (id: number, taskName: string) => {
    setTask(
      task.map((task) => {
        if (task.id === id) {
          return { ...task, taskName }
        }
        return task
      }),
    )
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
          <button className="bg-green-400 rounded-lg p-2" onClick={openModal}>
            <Plus size={24} />
          </button>
          <ModalCreateTask
            isOpen={isOpen}
            closeModal={closeModal}
            addTask={addTask}
          />
        </div>
        <ul className="my-4 ">
          {task.map((task) => (
            <Task
              key={task.id}
              task={task}
              checked={checked}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
