import { TbTemperatureCelsius, TbTemperatureFahrenheit } from 'react-icons/tb'

const formatTemperature = (temperature, unit) => {
  let maxTemp
  let minTemp
  let Icon
  if (unit === "cel") {
    maxTemp = temperature.cel.max
    minTemp = temperature.cel.min
    Icon = TbTemperatureCelsius
  } else {
    maxTemp = temperature.fah.max
    minTemp = temperature.fah.min
    Icon = TbTemperatureFahrenheit
  }
  const avgTemp = ((maxTemp + minTemp) / 2).toFixed()
  return { maxTemp, minTemp, avgTemp, Icon }
}

export default formatTemperature