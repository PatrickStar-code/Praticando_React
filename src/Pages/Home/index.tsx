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
    link: '/chat',
  },
  {
    id: 4,
    name: 'Lista De Compras com redux',
    description: 'Um aplicativo de lista de compras com redux.',
    link: '/compras',
  },
  {
    id: 5,
    name: 'Aplicativo de Previsão do tempo',
    description:
      'Um aplicativo de previsão do tempo usando React e a API do OpenWeatherMap',
    link: '/tempo',
  },
  {
    id: 6,
    name: 'Aplicativo de rastremento de despesas',
    description:
      ' Uma ferramenta para registrar e monitorar despesas pessoais ou comerciais.',
    link: '/despesas',
  },
]

export function Home() {
  const link = document.querySelector("link[rel='shortcut icon']")
  link.href = 'src/Assets/favicon.png'

  return (
    <main className="flex flex-col justify-center items-center mt-28">
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
