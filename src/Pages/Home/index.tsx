import { CardHome } from '../../Components/Card_Home'

const Links = [
  {
    id: 1,
    name: 'To-do List Simples',
    description:
      'Uma aplicação web interativa que permite ao usuário criar, visualizar, editar e excluir tarefas. ',
    link: '/todo',
  },
  {
    id: 2,
    name: 'Quiz App',
    description:
      'Um quiz de perguntas e respostas utilizando Open Trivia Database em Portugues	https://github.com/peterfritz/tryvia-api.',
    link: '/quiz',
  },
  {
    id: 3,
    name: 'Chat App',
    description: 'Um aplicativo de chat utilizando websocket.',
    link: '/Loginchat',
  },

  {
    id: 5,
    name: 'Aplicativo de Previsão do tempo',
    description:
      'Um aplicativo de previsão do tempo usando React e a API do OpenWeatherMap',
    link: '/weather',
  },
  {
    id: 6,
    name: 'Aplicativo de rastremento de despesas',
    description:
      ' Uma ferramenta para registrar e monitorar despesas pessoais ou comerciais.',
    link: '/cost',
  },
  {
    id: 7,
    name: 'Site de compras',
    description: 'Um site de compras simples',
    link: '/shop',
  },
]

export function Home() {
  const link = document.querySelector<HTMLLinkElement>(
    "link[rel='shortcut icon']",
  )
  const pageName = document.querySelector<HTMLTitleElement>('title')

  if (link && pageName) {
    link.href = 'src/Assets/favicon.png'
    pageName.innerHTML = 'Home'
  }
  return (
    <main className="flex flex-col justify-center items-center sm:m-2 md:mt-28 lg:mt-28 ">
      <h1 className="text-3xl font-bold">Lista de Atividades Prática React</h1>
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {Links.map((link) => (
          <CardHome
            key={link.id}
            name={link.name}
            description={link.description}
            link={link.link}
          />
        ))}
      </div>
    </main>
  )
}
