export const highlightsData = (wind, humidity, visibility, pressure) => {
  // returns data for highlighted data wind, humidity,visibility, pressure
  return [
    {
      id: 1,
      title: "Wind status",
      value: wind,
      unit: "mph"
    },
    {
      id: 2,
      title: "Humidity",
      value: humidity,
      unit: "%"
    },
    {
      id: 3,
      title: "Visibility",
      value: visibility,
      unit: "miles"
    },
    {
      id: 4,
      title: "Air Pressure",
      value: pressure,
      unit: "mb"
    },
  ]
}