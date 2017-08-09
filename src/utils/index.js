function getTime(date) {
  let _date = new Date(date)
  const fixFormat = (time) =>  time < 10 ? `0${time}` : time
  let hours =  fixFormat(_date.getHours())
  let minutes = fixFormat(_date.getMinutes())
  return `${hours}:${minutes}`
}
export { getTime };