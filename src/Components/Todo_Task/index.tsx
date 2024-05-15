import { PencilSimpleLine, TrashSimple } from 'phosphor-react'
import { taskProps } from '../../Pages/Todo'

export default function Task({ task }: { task: taskProps }) {
  return (
    <li className=" mt-4" id="5">
      <div className="flex gap-2">
        <div className="w-9/12 h-12 bg-[#e0ebff] rounded-[7px] flex justify-start items-center px-3">
          <span
            id="check5"
            className=" w-7 h-7 bg-white rounded-full border border-white transition-all cursor-pointer hover:border-[#36d344] flex justify-center items-center"
            //   onClick={() => checked(5)}
          >
            <i className="text-white fa fa-check "></i>
          </span>
          <span className="ml-3"> {task.task}</span>
        </div>
        <span className="w-1/4 h-12 gap-2 bg-[#e0ebff] rounded-[7px] flex justify-center text-sm text-[#5b7a9d] font-semibold items-center ">
          {<PencilSimpleLine size={20} />}
          <TrashSimple size={20} />
        </span>
      </div>
    </li>
  )
}
