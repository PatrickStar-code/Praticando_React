import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'
import CardWheater from '../../Components/Card_Wheather'

export interface WeatherData {
  coord: {
    lon: number
    lat: number
  }
  weather: {
    id: number
    main: string
    description: string
    icon: string
  }[]
  base: string
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    sea_level: number
    grnd_level: number
  }
  visibility: number
  wind: {
    speed: number
    deg: number
    gust: number
  }
  clouds: {
    all: number
  }
  dt: number
  sys: {
    country: string
    sunrise: number
    sunset: number
  }
  timezone: number
  id: number
  name: string
  cod: number
}

const formSchema = z.object({
  city: z.string().nonempty('Preencha o nome da cidade'),
})

type FormSchema = z.infer<typeof formSchema>

const formResolver = zodResolver(formSchema)

export default function Wheater() {
  //   const apikey = '28ef9ff1672f3787397c0ccfc09870e6'
  const [weather, setWeather] = useState({} as WeatherData)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: formResolver,
  })

  const getWeather = (data: FormSchema) => {
    reset()

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${data.city}&appid=${apikey}&lang=pt_br`,
      )
      .then(
        (response) => {
          console.log(response.data)
          setWeather(response.data)
        },
        (error) => {
          console.log(error)
        },
      )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-indigo-500 via-blue-500 to-purple-500 flex-col">
      <h1 className="text-white font-bold text-3xl mb-4">Weather App</h1>

      <form
        onSubmit={handleSubmit(getWeather)}
        className="flex flex-col bg-white rounded p-4 w-full max-w-xs"
      >
        <label
          htmlFor="city"
          className="text-gray-700 text-center text-lg font-bold"
        >
          Cidade
        </label>
        <input
          type="text"
          placeholder="Nome da Cidade"
          {...register('city')}
          className={`${
            errors.city
              ? 'border-red-500 focus:border-red-500'
              : 'border-gray-300 focus:border-indigo-500'
          }
          border rounded p-2 w-full`}
        />
        {errors.city && (
          <span className="text-red-500 text-xs">{errors.city.message}</span>
        )}
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mt-2"
        >
          Buscar
        </button>
      </form>
      {Object.keys(weather).length > 0 && <CardWheater weather={weather} />}
    </div>
  )
}
