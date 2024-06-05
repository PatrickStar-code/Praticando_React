import { Modal, Button } from 'keep-react'
import { Trash } from 'phosphor-react'

export default function ModalCostDelete({
  openModal,
  closeModal,
  handleDelete,
  id,
}: {
  openModal: boolean
  closeModal: () => void
  handleDelete: (id: number) => void
  id: number
}) {
  function RemoveEntry() {
    handleDelete(id)
    closeModal()
  }
  return (
    <Modal isOpen={openModal} onClose={closeModal}>
      <Modal.Body className="flex w-[30rem] flex-col items-center p-6 lg:p-8 bg-black  ">
        <Modal.Icon className="h-20 w-20 border border-blue-100 bg-red-300 text-red-500">
          <Trash size={60} />
        </Modal.Icon>
        <Modal.Content className="my-4  text-white text-center flex flex-col justify-center">
          <h3 className="mb-2 text-body-1 font-bold">Apagar Despesa!</h3>
          <p className="mx-auto max-w-xs text-body-2 font-normal mt-2 mb-2">
            Tem certeza que deseja excluir esta despesa?
          </p>
          <Button className="bg-red-500 hover:bg-red-400" onClick={RemoveEntry}>
            Apagar
          </Button>
        </Modal.Content>
      </Modal.Body>
    </Modal>
  )
}
