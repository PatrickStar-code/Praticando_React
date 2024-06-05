import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Modal, Input } from 'keep-react'
import { Pen } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { taskProps } from '../../Pages/Todo'

const formSchema = z.object({
  taskName: z.string().nonempty('Preencha o nome da tarefa'),
})

type FormData = z.infer<typeof formSchema>

export default function ModalEditTask({
  isOpen,
  closeModal,
  editTask,
  task,
}: {
  isOpen: boolean
  closeModal: () => void
  editTask: (id: number, taskName: string) => void
  task: taskProps
}) {
  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const handleClick = (data: FormData) => {
    editTask(task.id, data.taskName)
    closeModal()
  }

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <Modal.Body className="flex w-[30rem] flex-col items-center p-6 lg:p-8">
        <Modal.Icon className="h-20 w-20 border border-success-100 bg-success-50 text-success-500">
          <Pen size={32} />
        </Modal.Icon>
        <Modal.Content className="my-4 text-center">
          <h3 className="mb-2 text-body-1 font-bold text-metal-900">
            Editar Tarefa
          </h3>
          <form
            action=""
            className="flex flex-col justify-center items-center gap-5"
          >
            <fieldset className="max-w-md space-y-1">
              <Input
                placeholder="Nome Tarefa"
                type="text"
                {...register('taskName')}
                defaultValue={task.taskName}
              />
            </fieldset>
            <Button
              onClick={handleSubmit(handleClick)}
              size="sm"
              className="w-[10rem]"
              color="success"
            >
              Confirm
            </Button>
          </form>
        </Modal.Content>
      </Modal.Body>
    </Modal>
  )
}
