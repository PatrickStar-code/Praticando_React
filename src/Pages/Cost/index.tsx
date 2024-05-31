import {
  Equals,
  MagnifyingGlass,
  MinusCircle,
  PlusCircle,
} from 'phosphor-react'
import CardOverall from '../../Components/Card_Overall'
import { CardStatistc } from '../../Components/Card_Statistc'
import { useState } from 'react'
import ModalCostNew from '../../Components/ModalCost_New'

// interface NewEntryProps {
//   title: string
//   value: number
//   date: string
//   type: 'income' | 'outcome'
// }

export function Cost() {
  const [NewEntry, setNewEntry] = useState<NewEntryProps[]>()
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
      value: 0,
      icon: <PlusCircle size={32} />,
      color: 'green-500',
    },
    {
      title: 'Saidas',
      value: 0,
      icon: <MinusCircle size={32} />,
      color: 'red-500',
    },

    {
      title: 'Total',
      value: 0,
      icon: <Equals size={32} />,
      color: 'blue-500',
    },
  ]

  return (
    <div className=" bg-black w-full min-h-screen flex justify-center  text-slate-300  py-4 -z-10">
      <div
        id="content"
        className="bg-white/10 relative col-span-9 rounded-lg p-6 w-[80rem] h-full"
      >
        <h1 className="font-bold text-lg lg:text-3xl bg-gradient-to-br from-white via-white/50 to-transparent bg-clip-text mb-4 text-transparent">
          MoneyMind<span className="text-indigo-400">.</span>
        </h1>

        <form className="flex">
          <input
            type="text"
            placeholder="Pesquisar"
            className="bg-white/10 w-full rounded-lg p-2 placeholder:text-slate-400"
          />

          <button
            type="submit"
            className="bg-indigo-500/80 w-[3rem] rounded-lg p-2 placeholder:text-slate-400"
          >
            <MagnifyingGlass size={32} />
          </button>
        </form>

        <div id="Statistcs" className="py-4">
          <div className="flex justify-between align-middle ">
            <h1 className="font-bold py-4 uppercase">Estatísticas</h1>
            <button onClick={openModal}>
              <PlusCircle size={32} />
            </button>
            <ModalCostNew
              openModalEntry={openModalEntry}
              closeModal={closeModal}
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-"
          >
            {' '}
            <CardStatistc />
          </div>
        </div>
        <div id="last-incomes">
          <h1 className="font-bold py-4 uppercase">Saidas</h1>
          <div
            id="stats"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            <CardStatistc />
          </div>
        </div>
      </div>
    </div>
  )
}
