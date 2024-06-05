import { ReactNode } from 'react'
import { useFormater } from '../../hooks/useformater'

export default function CardOverall({
  title,
  value,
  icon,
  color,
}: {
  title: string
  value: number
  icon: ReactNode
  color: string
}) {
  return (
    <div className="bg-black/60 to-white/5 p-6 rounded-lg">
      <div className="flex flex-row space-x-4 items-center">
        <div id="stats-1">{icon}</div>
        <div>
          <p className="text-indigo-300 text-sm font-medium uppercase leading-4">
            {title}
          </p>
          <p
            className={`text-${color} ont-bold text-2xl inline-flex items-center space-x-2`}
          >
            <span>{useFormater(value)}</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                />
              </svg>
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
