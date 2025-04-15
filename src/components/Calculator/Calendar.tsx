import { Calendar } from '@/components/ui/calendar'
import { useEffect, useState } from 'react'

interface CalendarDemoProps {
  onChange: (value: string) => void
  onClose: () => void
}

export function CalendarDemo({ onChange, onClose }: CalendarDemoProps) {
  const [date, setDate] = useState<{
    from: Date | undefined
    to: Date | undefined
  }>()

  useEffect(() => {
    if (date?.from && date?.to) {
      const formatted = formatRange(date)
      onChange(formatted)
      onClose()
    }
  }, [date])

  return (
    <Calendar
      mode="range"
      selected={date}
      onSelect={setDate}
      numberOfMonths={1}
      className="rounded-md border shadow bg-white dark:bg-zinc-300"
    />
  )
}

function formatRange(range: { from?: Date; to?: Date }) {
  if (!range.from || !range.to) return ''

  const monthMap = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ]

  const from = range.from
  const to = range.to

  const fromStr = `${monthMap[from.getMonth()]} ${from.getDate()}`
  const toStr = `${monthMap[to.getMonth()]} ${to.getDate()}`
  const year = to.getFullYear()

  return `${fromStr} - ${toStr}, ${year}`
}
