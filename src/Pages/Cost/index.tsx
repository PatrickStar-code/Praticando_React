import { Equals, MinusCircle, PlusCircle } from 'phosphor-react'
import CardOverall from '../../Components/Card_Overall'
import { CardStatistc } from '../../Components/Card_Statistc'
import { useState } from 'react'
import ModalCostNew from '../../Components/ModalCost_New'

export interface NewEntryProps {
  id?: number
  title: string
  value: number
  date: string
  type: 'entrada' | 'saida'
}

export function Cost() {
  const [NewEntry, setNewEntry] = useState([] as NewEntryProps[])
  const [openModalEntry, setOpenModalEntry] = useState(false)

  const openModal = () => {
    setOpenModalEntry(true)
  }
  const closeModal = () => {
    setOpenModalEntry(false)
  }

  const link = document.querySelector<HTMLLinkElement>(
    "link[rel='shortcut icon']",
  )
  const pageName = document.querySelector<HTMLTitleElement>('title')

  if (link && pageName) {
    link.href = 'src/Assets/money.png'
    pageName.innerHTML = 'MoneyMind'
  }

  const CostCards = [
    {
      title: 'Entradas',
      value: NewEntry.reduce((acc, curr) => {
        if (curr.type === 'entrada') {
          return acc + curr.value
        } else {
          return acc
        }
      }, 0),
      icon: <PlusCircle size={32} />,
      color: 'green-500',
    },
    {
      title: 'Saidas',
      value: NewEntry.reduce((acc, curr) => {
        if (curr.type === 'saida') {
          return acc + curr.value
        } else {
          return acc
        }
      }, 0),
      icon: <MinusCircle size={32} />,
      color: 'red-500',
    },

    {
      title: 'Total',
      value: NewEntry.reduce((acc, curr) => {
        if (curr.type === 'entrada') {
          return acc + curr.value
        } else {
          return acc - curr.value
        }
      }, 0),
      icon: <Equals size={32} />,
      color:
        NewEntry.reduce((acc, curr) => {
          if (curr.type === 'entrada') {
            return acc + curr.value
          } else {
            return acc - curr.value
          }
        }, 0) < 0
          ? 'red-500'
          : 'green-500',
    },
  ]

  function handleRegister(data: NewEntryProps) {
    const idvalue = NewEntry.length
    setNewEntry((state) => [...state, { id: idvalue + 1, ...data }])
  }

  function handleEdit(data: NewEntryProps, id: number) {
    setNewEntry((state) => state.map((item) => (item.id === id ? data : item)))
  }

  function handleDelete(id: number) {
    setNewEntry((state) => state.filter((item) => item.id !== id))
  }

  return (
    <div className=" bg-black w-full min-h-screen flex justify-center  text-slate-300  py-4 -z-10">
      <div
        id="content"
        className="bg-white/10 relative col-span-9 rounded-lg p-6 w-[80rem] h-full"
      >
        <h1 className="font-bold text-lg lg:text-3xl bg-gradient-to-br from-white via-white/50 to-transparent bg-clip-text mb-4 text-transparent">
          MoneyMind<span className="text-indigo-400">.</span>
        </h1>

        <div id="Statistcs" className="py-4">
          <div className="flex justify-between align-middle ">
            <h1 className="font-bold py-4 uppercase">Estatísticas</h1>
            <button onClick={openModal}>
              <PlusCircle size={32} />
            </button>
            <ModalCostNew
              openModalEntry={openModalEntry}
              closeModal={closeModal}
              handleRegister={handleRegister}
            />
          </div>
          <div
            id="stats"
            className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {CostCards.map((card) => (
              <CardOverall
                key={card.title}
                title={card.title}
                value={card.value}
                icon={card.icon}
                color={card.color}
              />
            ))}
          </div>
        </div>

        <div id="last-incomes">
          <h1 className="font-bold py-4 uppercase">Entradas</h1>
          <div
            id="stats"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {NewEntry.map(
              (entry) =>
                entry.type === 'entrada' && (
                  <CardStatistc
                    key={entry.id}
                    id={entry.id}
                    title={entry.title}
                    value={entry.value}
                    date={entry.date}
                    type="entrada"
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                  />
                ),
            )}
          </div>
        </div>
        <div id="last-incomes">
          <h1 className="font-bold py-4 uppercase">Saidas</h1>
          <div
            id="stats"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {NewEntry.map(
              (entry) =>
                entry.type === 'saida' && (
                  <CardStatistc
                    key={entry.id}
                    id={entry.id}
                    title={entry.title}
                    value={entry.value}
                    date={entry.date}
                    type="saida"
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                  />
                ),
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
