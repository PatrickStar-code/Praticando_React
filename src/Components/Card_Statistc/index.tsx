import { PencilLine, Trash } from 'phosphor-react'

export function CardStatistc() {
  return (
    <div className="bg-black/60 to-white/5 rounded-lg">
      <div className="flex flex-row items-center">
        <div className="text-3xl p-4">💰</div>
        <div className="p-2">
          <p className="text-xl font-bold">68$</p>
          <p className="text-gray-500 font-medium">Maia Kipper</p>
          <p className="text-gray-500 text-sm">23 Nov 2022</p>
        </div>
      </div>
      <div className="border-t border-white/5 p-4 flex justify-between">
        <div className=" space-x-2 cursor-pointer">
          <PencilLine size={25} className="text-blue-500" />
        </div>
        <div className=" space-x-2   cursor-pointer">
          <Trash size={25} className="text-red-500" />
        </div>
      </div>
    </div>
  )
}
