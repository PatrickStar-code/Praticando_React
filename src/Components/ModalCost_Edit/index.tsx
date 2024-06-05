import { zodResolver } from '@hookform/resolvers/zod'
import { Input, Modal, Icon, Label, Button } from 'keep-react'
import { Coins, CurrencyDollarSimple, Selection, TextAa } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { NewEntryProps } from '../../Pages/Cost'

const formSchema = z.object({
  titleEdit: z.string().nonempty('Preencha o nome do custo'),
  valueEdit: z.string().nonempty('Preencha o valor do custo'),

  typeEdit: z.string().nonempty('Selecione a categoria'),
})

type CostProps = z.infer<typeof formSchema>

export default function ModalCostEdit({
  openModal,
  closeModal,
  Statistics,
  handleEdit,
}: {
  openModal: boolean
  closeModal: () => void
  Statistics: NewEntryProps
  handleEdit: (data: NewEntryProps, id: number) => void
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CostProps>({
    resolver: zodResolver(formSchema),
  })

  function handleEditData(data: CostProps) {
    const formatedData = {
      title: data.titleEdit,
      value: parseFloat(data.valueEdit),
      date: Statistics.date,
      type: data.typeEdit as NewEntryProps['type'],
    }
    handleEdit(formatedData, Statistics.id as number)

    closeModal()
  }

  return (
    <Modal isOpen={openModal} onClose={closeModal}>
      <Modal.Body className="flex w-[30rem] flex-col items-center p-6 lg:p-8 bg-black  ">
        <Modal.Icon className="h-20 w-20 border border-blue-100 bg-blue-300 text-blue-500">
          <Coins size={60} />
        </Modal.Icon>
        <Modal.Content className="my-4  text-white">
          <h3 className="mb-2 text-body-1 font-bold  text-center">
            Adicionar novo custo!
          </h3>
          <form
            className="flex flex-col mt-4 gap-6"
            onSubmit={handleSubmit(handleEditData)}
          >
            <fieldset className="space-y-1">
              <Label htmlFor="name" className="text-white text-left">
                Titulo:
              </Label>
              <div className="relative">
                <Input
                  placeholder="Titulo"
                  {...register('titleEdit')}
                  className="ps-11"
                  defaultValue={Statistics.title}
                />
                <Icon>
                  <TextAa size={19} color="#AFBACA" />
                </Icon>
              </div>
              {<p className="text-red-500">{errors.titleEdit?.message}</p>}
            </fieldset>
            <fieldset className="space-y-1">
              <Label htmlFor="name" className="text-white text-left">
                Valor:
              </Label>
              <div className="relative">
                <Input
                  type="number"
                  placeholder="0.00"
                  {...register('valueEdit')}
                  className="ps-11"
                  defaultValue={Statistics.value}
                />
                <Icon>
                  <CurrencyDollarSimple size={19} color="#AFBACA" />
                </Icon>
              </div>
              {<p className="text-red-500">{errors.valueEdit?.message}</p>}
            </fieldset>
            <fieldset className="space-y-1">
              <Label htmlFor="name" className="text-white text-left">
                Tipo:
              </Label>
              <div className="relative">
                <select
                  {...register('typeEdit')}
                  defaultValue={Statistics.type}
                  className="flex h-11 w-full rounded-lg border px-3 py-2 text-body-4 font-normal text-metal-900 placeholder:font-normal placeholder:text-metal-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-metal-200 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ps-11"
                >
                  <option value="">Selecione</option>
                  <option value="entrada">Entrada</option>
                  <option value="saida">Saída</option>
                </select>{' '}
                <Icon>
                  <Selection size={19} color="#AFBACA" />
                </Icon>
              </div>
              {<p className="text-red-500">{errors.typeEdit?.message}</p>}
            </fieldset>
            <Button className="bg-indigo-500">Editar</Button>
          </form>
        </Modal.Content>
      </Modal.Body>
    </Modal>
  )
}
