import { Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/Home'
import Template from '../Template'
import Todo from '../Pages/Todo'
import ErrorPage from '../Pages/404'
import Quiz from '../Pages/Quiz'
import LoginChat from '../Pages/LoginChat'
import { Chat } from '../Pages/Chat'
import Wheater from '../Pages/Weather'
export default function RoutesComponent() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/" element={<Template />}>
        <Route path="/todo" element={<Todo />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/LoginChat" element={<LoginChat />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/weather" element={<Wheater />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}
