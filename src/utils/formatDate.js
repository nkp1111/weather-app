export const formatDate = (date) => {
  // format date to yyyy-mm-dd
  let weatherDate = date.toLocaleDateString().replaceAll("/", "-").split("-").reverse()

  if (weatherDate[1].length === 1) {
    weatherDate[1] = "0" + weatherDate[1]
  }
  if (weatherDate[2].length === 1) {
    weatherDate[2] = "0" + weatherDate[2]
  }

  // reverse date and month pos
  let temp = weatherDate[2]
  weatherDate[2] = weatherDate[1]
  weatherDate[1] = temp

  weatherDate = weatherDate.join("-")
  return date
}



