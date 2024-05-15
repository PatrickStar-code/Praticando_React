import { Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/Home'
import Template from '../Template'
import Todo from '../Pages/Todo'
import ErrorPage from '../Pages/404'

export default function RoutesComponent() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/" element={<Template />}>
        <Route path="/todo" element={<Todo />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}
