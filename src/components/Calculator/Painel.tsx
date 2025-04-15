import { useEffect, useRef, useState } from 'react'
import { CalendarDemo } from './Calendar'
import { InfoTable } from './InfoTable'

const columns = [
  { header: 'Métrica', accessor: 'metrics', hasIcon: 'chevrons-up-down' },
  {
    header: 'Mínimo',
    accessor: 'min',
    hasIcon: 'chevrons-up-down',
  },
  {
    header: 'Máximo ou Ideal',
    accessor: 'maxIdeal',
    hasIcon: 'arrows-up-down',
  },
]

const data = [
  {
    metrics: 'Sessões',
    min: 'R$ 25.000,00',
    maxIdeal: 'R$ 25.000,00',
  },
  {
    metrics: 'CPS (Custo por sessão)',
    min: 'R$ 0,38',
    maxIdeal: 'R$ 29.355,10',
  },
  {
    metrics: 'Taxa de conversão',
    min: '115.120',
    maxIdeal: 'R$ 29.355,10',
  },
  {
    metrics: 'CPA',
    min: '1,37%',
    maxIdeal: 'R$ 29.355,10',
  },
  {
    metrics: 'ROAS',
    min: 'R$ 185.730,00',
    maxIdeal: 'R$ 29.355,10',
  },
  {
    metrics: '% Inv x Fat',
    min: 'R$ 177.250,00',
    maxIdeal: 'R$ 29.355,10',
  },
  {
    metrics: 'CPC Google Ads',
    min: '89%',
    maxIdeal: 'R$ 29.355,10',
  },
  {
    metrics: 'CPC Social Ads',
    min: '1.356',
    maxIdeal: 'R$ 29.355,10',
  },
  {
    metrics: 'Taxa de aprovação',
    min: 'R$ 187,20',
    maxIdeal: 'R$ 29.355,10',
  },
]

export function Painel() {
  const [selectedDate, setSelectedDate] = useState('Jan 1 - Dez 31, 2024')
  const [showCalendar, setShowCalendar] = useState(false)

  const calendarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setShowCalendar(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  return (
    <div className="flex flex-col gap-2 ">
      <div className="pt-4 flex justify-between items-center">
        <h2 className="px-2 py-2.5 text-base font-medium text-[#9a9a9a] dark:text-zinc-500">
          Últimos cálculos
        </h2>

        <div ref={calendarRef} className="relative">
          <div
            className={`w-full h-[3.5rem] px-4 flex items-center justify-between border rounded-lg shadow cursor-pointer bg-white dark:bg-zinc-700 
    ${showCalendar ? 'border-[#6c7275] dark:border-zinc-300' : 'border-[#6c727541] hover:border-[#6c727588] dark:border-zinc-500 dark:hover:border-zinc-400'}`}
            onClick={() => setShowCalendar(!showCalendar)}
          >
            <div className="flex items-center gap-2">
              <img src="/assets/calendar.svg" />
              <span className="text-sm font-medium text-[#212529] dark:text-zinc-200">
                {selectedDate}
              </span>
            </div>
          </div>

          {showCalendar && (
            <div className="absolute top-[110%] right-0 z-10">
              <CalendarDemo
                onChange={(formattedDate) => setSelectedDate(formattedDate)}
                onClose={() => setShowCalendar(false)}
              />
            </div>
          )}
        </div>
      </div>
      <div className="bg-[#f9f9f9] mb-2 rounded-xl p-1.5 border border-[#dfdfdf] flex flex-col dark:bg-zinc-700 dark:border-zinc-600 overflow-auto scrollbar-none max-viewport-height">
        <InfoTable
          columns={columns}
          data={data}
          columnSize="bigger"
          containerClass="mt-3"
        />
      </div>
    </div>
  )
}
