import dayjs, { Dayjs } from 'dayjs'

export function isThisWeek(date: Date | Dayjs) {
  const nextMonday = dayjs().add(1, 'week').startOf('isoWeek')
  return dayjs(date).isAfter(dayjs()) && dayjs(date).isBefore(nextMonday)
}

export function isToday(date: Date | Dayjs) {
  return dayjs(date).isSame(dayjs(), 'day')
}

export function isTomorrow(date: Date | Dayjs) {
  return dayjs(date).isSame(dayjs().add(1, 'day'), 'day')
}

export function isYesterday(date: Date | Dayjs) {
  return dayjs(date).isSame(dayjs().subtract(1, 'day'), 'day')
}
