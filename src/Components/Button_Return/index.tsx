import { ArrowFatLeft } from 'phosphor-react'
import { Link } from 'react-router-dom'

export function ReturnButton() {
  return (
    <Link to={'/'}>
      <button
        title="Contact Sale"
        className="fixed z-90 bottom-10 left-8 bg-blue-600 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-700 hover:drop-shadow-2xl hover:animate-bounce duration-300"
      >
        <ArrowFatLeft size={32} />
      </button>
    </Link>
  )
}
