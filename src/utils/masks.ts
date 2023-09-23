import moment from 'moment'

export function formatBrlCoin(value?: string) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(parseFloat(value || '0'))
}

export function maskCurrency(value: string) {
  let currency = value

  currency = currency.replace(/\D/g, '')
  currency = currency.replace(/(\d)(\d{2})$/, '$1,$2')
  currency = currency.replace(/(?=(\d{3})+(\D))\B/g, '.')
  return currency
}

export function removeMaskCurrency(value: string) {
  let currency = value

  currency = currency.replace(',', '')
  currency = currency.replace('.', '')
  currency = currency.replace(/(\d)(\d{2})$/, '$1.$2')
  return currency
}

export function maskDate(value: any, format = { Y: 0, M: 1, D: 2 }) {
  const mls = (value?.seconds + value?.nanoseconds / 1000000000) * 1000
  const date = new Date(mls)?.toISOString()?.substring(0, 10)

  const newDate = date.split('-')
  return `${newDate[format.D]}/${newDate[format.M]}/${newDate[format.Y]}`
}

export function maskNewDate(value: string) {
  return moment(value).locale('pt-br').format('DD/MM/YYYY')
}

export function maskDateIso(date: string) {
  if (!date) return undefined
  return new Date(date)?.toISOString()?.substring(0, 10)
}
