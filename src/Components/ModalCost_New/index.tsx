import { zodResolver } from '@hookform/resolvers/zod'
import { Input, Modal, Icon, Label, Button } from 'keep-react'
import { Coins, CurrencyDollarSimple, Selection, TextAa } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { NewEntryProps } from '../../Pages/Cost'

const formSchema = z.object({
  title: z.string().nonempty('Preencha o nome do custo'),
  value: z.string().nonempty('Preencha o valor do custo'),
  type: z.string().nonempty('Selecione a categoria'),
})

type CostProps = z.infer<typeof formSchema>

export default function ModalCostNew({
  openModalEntry,
  closeModal,
  handleRegister,
}: {
  openModalEntry: boolean
  closeModal: () => void
  handleRegister: (data: NewEntryProps) => void
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CostProps>({
    resolver: zodResolver(formSchema),
  })

  function handleNewEntry(data: CostProps) {
    const formatedData = {
      title: data.title,
      value: parseFloat(data.value),
      date: new Date().toLocaleDateString('pt-BR'),
      type: data.type as NewEntryProps['type'],
    }
    reset()
    handleRegister(formatedData)
  }
  return (
    <Modal isOpen={openModalEntry} onClose={closeModal}>
      <Modal.Body className="flex w-[30rem] flex-col items-center p-6 lg:p-8 bg-black  ">
        <Modal.Icon className="h-20 w-20 border border-blue-100 bg-blue-300 text-blue-500">
          <Coins size={60} />
        </Modal.Icon>
        <Modal.Content className="my-4  text-white">
          <h3 className="mb-2 text-body-1 font-bold  text-center">
            Adicionar nova despesa!
          </h3>
          <form
            className="flex flex-col mt-4 gap-6"
            onSubmit={handleSubmit(handleNewEntry)}
          >
            <fieldset className="space-y-1">
              <Label htmlFor="name" className="text-white text-left">
                Titulo:
              </Label>
              <div className="relative">
                <Input
                  placeholder="Titulo"
                  {...register('title')}
                  className="ps-11"
                />
                <Icon>
                  <TextAa size={19} color="#AFBACA" />
                </Icon>
              </div>
              {<p>{errors.title?.message}</p>}
            </fieldset>
            <fieldset className="space-y-1">
              <Label htmlFor="name" className="text-white text-left">
                Valor:
              </Label>
              <div className="relative">
                <Input
                  type="number"
                  placeholder="0.00"
                  step=".01"
                  min="0.01"
                  {...register('value')}
                  className="ps-11"
                />
                <Icon>
                  <CurrencyDollarSimple size={19} color="#AFBACA" />
                </Icon>
              </div>
              {<p>{errors.value?.message}</p>}
            </fieldset>
            <fieldset className="space-y-1">
              <Label htmlFor="name" className="text-white text-left">
                Tipo:
              </Label>
              <div className="relative">
                <select
                  {...register('type')}
                  defaultValue=""
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
              {<p>{errors.type?.message}</p>}
            </fieldset>
            <Button className="bg-indigo-500">Adicionar</Button>
          </form>
        </Modal.Content>
      </Modal.Body>
    </Modal>
  )
}
