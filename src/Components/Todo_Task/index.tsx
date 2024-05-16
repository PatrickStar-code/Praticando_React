import { Check, PencilSimpleLine, TrashSimple } from 'phosphor-react'
import { taskProps } from '../../Pages/Todo'
import { useState } from 'react'
import ModalEditTask from '../Modal_EditTask'
import ModalDeleteTask from '../Modal_DeleteTask'

export default function Task({
  task,
  checked,
  deleteTask,
  editTask,
}: {
  task: taskProps
  checked: (id: number) => void
  deleteTask: (id: number) => void
  editTask: (id: number, taskName: string) => void
}) {
  const [isOpenEdit, setIsOpenEdit] = useState(false)
  const [isOpenDelete, setIsOpenDelete] = useState(false)

  const openModalEdit = () => {
    setIsOpenEdit(true)
  }

  const closeModalEdit = () => {
    setIsOpenEdit(false)
  }
  const openModalDelete = () => {
    setIsOpenDelete(true)
  }

  const closeModalDelete = () => {
    setIsOpenDelete(false)
  }

  return (
    <li className=" mt-4" id="5">
      <div className="flex gap-2">
        <div className="w-9/12 h-12 bg-[#e0ebff] rounded-[7px] flex justify-start items-center px-3">
          <span
            id="check5"
            className={`w-7 h-7 ${task.checked ? 'bg-[#36d344]' : 'bg-white'} rounded-full border border-white transition-all cursor-pointer hover:border-[#36d344] flex justify-center items-center`}
            //   onClick={() => checked(5)}
          >
            <Check
              size={20}
              color="white"
              className="cursor-pointer"
              onClick={() => checked(task.id)}
            />
          </span>
          <span className="ml-3"> {task.taskName}</span>
        </div>
        <span className="w-1/4 h-12 gap-2 bg-[#e0ebff] rounded-[7px] flex justify-center text-sm text-[#5b7a9d] font-semibold items-center ">
          <PencilSimpleLine
            size={20}
            className="cursor-pointer"
            onClick={openModalEdit}
          />
          <ModalEditTask
            isOpen={isOpenEdit}
            closeModal={closeModalEdit}
            editTask={editTask}
            task={task}
          />

          <TrashSimple
            size={20}
            color="red"
            className="cursor-pointer"
            onClick={openModalDelete}
          />
          <ModalDeleteTask
            isOpen={isOpenDelete}
            closeModal={closeModalDelete}
            deleteTask={deleteTask}
            task={task}
          />
        </span>
      </div>
    </li>
  )
}
