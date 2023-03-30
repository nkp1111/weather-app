export const viewDate = (date) => {
  let formattedDate
  if (!date) {
    date = new Date()
  } else {
    const dateArr = date.split("-")
    date = new Date(+dateArr[0], +dateArr[1], +dateArr[2])
  }

  formattedDate = date.toUTCString().split(" ").slice(0, 3).join(" ")

  return formattedDate
}