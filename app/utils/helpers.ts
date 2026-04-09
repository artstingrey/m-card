export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export function formatDateDayMonthYear(date: string) {
  const _date = new Date(date)
  const day = String(_date.getDate()).padStart(2, '0')
  const month = String(_date.getMonth() + 1).padStart(2, '0')
  const year = _date.getFullYear()

  return `${day}.${month}.${year}`
}
