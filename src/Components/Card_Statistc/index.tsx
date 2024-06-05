import { PencilLine, Trash } from 'phosphor-react'
import { useFormater } from '../../hooks/useformater'
import { useState } from 'react'
import ModalCostEdit from '../ModalCost_Edit'
import { NewEntryProps } from '../../Pages/Cost'
import ModalCostDelete from '../ModalCost_Delete'

export function CardStatistc({
  id,
  title,
  value,
  date,
  type,
  handleEdit,
  handleDelete,
}: {
  id?: number
  title: string
  value: number
  date: string
  type: 'entrada' | 'saida'
  handleEdit: (data: NewEntryProps, id: number) => void
  handleDelete: (id: number) => void
}) {
  const [isOpenEdit, setIsOpenEditEdit] = useState(false)
  const [isOpenDelete, setIsOpenDeleteEdit] = useState(false)

  const openModalDelete = () => {
    setIsOpenDeleteEdit(true)
  }
  const closeModalDelete = () => {
    setIsOpenDeleteEdit(false)
  }

  const openModalEdit = () => {
    setIsOpenEditEdit(true)
  }
  const closeModalEdit = () => {
    setIsOpenEditEdit(false)
  }

  return (
    <div className="bg-black/60 to-white/5 rounded-lg">
      <div className="flex flex-row items-center">
        <div className="text-3xl p-4">💰</div>
        <div className="p-2">
          <p
            className={`text-xl font-bold ${type === 'entrada' ? 'text-green-500' : 'text-red-500'} `}
          >
            {type === 'entrada' ? '+' : '-'} {useFormater(value)}
          </p>
          <p className="text-gray-500 font-medium">{title}</p>
          <p className={` text-sm `}>{date}</p>
        </div>
      </div>
      <div className="border-t border-white/5 p-4 flex justify-between">
        <div className=" space-x-2 cursor-pointer" onClick={openModalEdit}>
          <PencilLine size={25} className="text-blue-500" />
        </div>
        <div className=" space-x-2   cursor-pointer" onClick={openModalDelete}>
          <Trash size={25} className="text-red-500" />
        </div>
      </div>
      <ModalCostEdit
        openModal={isOpenEdit}
        closeModal={closeModalEdit}
        Statistics={{
          id,
          title,
          value,
          date,
          type,
        }}
        handleEdit={handleEdit}
      />
      <ModalCostDelete
        openModal={isOpenDelete}
        closeModal={closeModalDelete}
        handleDelete={handleDelete}
        id={id as number}
      />
    </div>
  )
}
