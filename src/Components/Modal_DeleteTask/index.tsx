import { Button, Modal } from 'keep-react'
import { Trash } from 'phosphor-react'
import { taskProps } from '../../Pages/Todo'

export default function ModalDeleteTask({
  isOpen,
  closeModal,
  deleteTask,
  task,
}: {
  isOpen: boolean
  closeModal: () => void
  deleteTask: (id: number) => void
  task: taskProps
}) {
  const handleClick = () => {
    deleteTask(task.id)
    closeModal()
  }
  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <Modal.Body className="flex w-[30rem] flex-col items-center p-6 lg:p-8">
        <Modal.Icon className="h-20 w-20 border border-error-100 bg-error-50 text-error-500">
          <Trash size={32} />
        </Modal.Icon>
        <Modal.Content className="my-4 text-center">
          <h3 className="mb-2 text-body-1 font-bold text-metal-900">
            Apagar Tarefa
          </h3>
          <div className="flex flex-col justify-center items-center gap-5">
            <p className="mx-auto max-w-xs text-body-4 font-normal text-metal-600">
              Tem certeza que deseja excluir esta tarefa?
            </p>
            <Button
              onClick={handleClick}
              size="sm"
              className="w-[10rem]"
              color="error"
            >
              Confirm
            </Button>
          </div>
        </Modal.Content>
      </Modal.Body>
    </Modal>
  )
}
