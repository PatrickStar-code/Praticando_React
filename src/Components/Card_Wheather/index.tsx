import React from 'react'
import { WeatherData } from '../../Pages/Weather'

export default function CardWheater({ weather }: { weather: WeatherData }) {
  const data = new Date()

  const Days = [
    'Domingo',
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sábado',
  ]

  const day = Days[data.getDay()]

  const month = data.toLocaleDateString('pt-BR', { month: 'long' })

  const year = data.getFullYear()

  const wheatherIcon = (icon: string) => {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`
  }

  function convertKelvintoCelsius(temp: number) {
    return Math.round(temp - 273.15)
  }
  function convertMeterstoKm(m: number) {
    return Math.round(m / 1000)
  }
  return (
    <div className="flex flex-col bg-gray-300 rounded p-4 w-full max-w-xs  animate-fade-in  ">
      <div className="font-bold text-xl">{weather.name}</div>
      <div className="text-sm text-gray-500 capitalize">
        {day} {month} {year}
      </div>
      <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg  h-24 w-24">
        {weather.weather[0].icon && (
          <img
            src={wheatherIcon(weather.weather[0].icon)}
            alt={weather.weather[0].description}
          />
        )}
      </div>
      <div className="flex flex-row items-center justify-center mt-6">
        <div className="font-medium text-6xl">
          {convertKelvintoCelsius(weather.main.temp)}°
        </div>
        <div className="flex flex-col items-center ml-6">
          <div>{weather.weather[0].description}</div>
          <div className="mt-1">
            <span className="text-sm font-light text-gray-500">
              MAX: {convertKelvintoCelsius(weather.main.temp_max)}°C
            </span>
          </div>
          <div>
            <span className="text-sm">
              <i className="far fa-long-arrow-down"></i>
            </span>
            <span className="text-sm font-light text-gray-500">
              MIN: {convertKelvintoCelsius(weather.main.temp_min)}°C
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-6">
        <div className="flex flex-col items-center">
          <div className="font-medium text-sm">Vento</div>
          <div className="text-sm text-gray-500">{weather.wind.speed}m/h</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="font-medium text-sm">Umidade</div>
          <div className="text-sm text-gray-500">{weather.main.humidity}%</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="font-medium text-sm">Visibilidade</div>
          <div className="text-sm text-gray-500">
            {convertMeterstoKm(weather.visibility)}Km
          </div>
        </div>
      </div>
    </div>
  )
}
