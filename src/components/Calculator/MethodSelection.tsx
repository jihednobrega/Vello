import { useState } from 'react'
import { useNavigate } from 'react-router'
import { MetricCard } from './MetricCard'
import { methods } from '../../data/methods'

export function MethodSelection() {
  const navigate = useNavigate()
  const [selectedMethodId, setSelectedMethodId] = useState<string>('')
  const handleSelectMethod = (id: string) => {
    setSelectedMethodId(id)
  }
  const selectedMethod = methods.find((m) => m.id === selectedMethodId)

  return (
    <div className="flex flex-col gap-2 overflow-auto scrollbar-none max-viewport-height">
      <div className="pt-4">
        <h2 className="px-2 py-2.5 text-base font-medium text-[#9a9a9a] dark:text-zinc-500">
          Calcule e otimize suas métricas
        </h2>
      </div>

      <div className="bg-[#f9f9f9] mb-2 rounded-xl p-3 border border-[#dfdfdf] flex flex-col dark:bg-zinc-700 dark:border-zinc-600">
        <div className="h-[10.5rem] flex items-center justify-between rounded-md overflow-hidden bg-white border border-[#e4e9e9] dark:bg-zinc-600 dark:border-zinc-500">
          <p className="text-sm text-[#212529] max-w-[13.5rem] ml-4 leading-[1rem] dark:text-zinc-200">
            Selecione uma métrica abaixo e faremos o cálculo apropriado para ela
          </p>
          <img src="/assets/metrics-banner.png" />
        </div>

        <div className="mt-2  mb-22 grid grid-cols-3 gap-2">
          {methods.map((method) => (
            <MetricCard
              key={method.id}
              method={method}
              onSelect={handleSelectMethod}
              isSelected={selectedMethodId === method.id}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-3 bg-white flex border-t border-t-[#e4e9e9] dark:bg-zinc-800 dark:border-t-zinc-600">
        <button
          className={`max-w-[16.75rem] w-full ml-auto bg-[#1c1c1c] py-5 border border-[#4e4e4e] rounded-lg font-[Inter] font-semibold text-sm text-white  dark:bg-white dark:text-[#282828]  ${selectedMethodId ? 'cursor-pointer hover:bg-[#4e4e4e] dark:hover:bg-zinc-300' : 'opacity-50'} `}
          onClick={() => {
            if (selectedMethod) {
              navigate(`/calculator/${selectedMethod.id}`, {
                state: { selectedMethodName: selectedMethod.name },
              })
            }
          }}
          disabled={!selectedMethodId}
        >
          Novo Cálculo
        </button>
      </div>
    </div>
  )
}
