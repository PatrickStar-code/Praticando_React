import { Outlet } from 'react-router-dom'
import { ReturnButton } from '../Components/Button_Return'

export default function Template() {
  return (
    <>
      <Outlet />
      <ReturnButton />
    </>
  )
}
