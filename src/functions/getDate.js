function getDate(isoDate, lang = "es") {
  const date = new Date(isoDate)
  const year = date.getUTCFullYear()
  const month = date.getUTCMonth() + 1
  const day = date.getUTCDate()
  return lang === "es" ? `${day}/${month}/${year}` : `${month}/${day}/${year}`
}

export default getDate
