interface MetricCardProps {
  method: {
    id: string
    name: string
    description: string
  }
  onSelect: (id: string) => void
  isSelected: boolean
}

export function MetricCard({ method, onSelect, isSelected }: MetricCardProps) {
  return (
    <div
      className={`h-[8.875rem] px-4 py-6 border rounded-lg bg-white cursor-pointer ${isSelected ? 'border-[#59d1cb] inset-shadow-[0_-3px_24px_#99ffec7f]' : 'border-[#e4e9e9] dark:border-zinc-500'} hover:border-[#3fb6b0] dark:bg-zinc-600 `}
      onClick={() => onSelect(method.id)}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-normal text-[#212529] dark:text-white">
          {method.name}
        </h3>
        <div
          className={`w-4 h-4 flex items-center justify-center rounded-full outline ${isSelected ? 'outline-[#59d1cb] bg-transparent' : 'outline-[#cfd6dc] bg-[#abb7c236] dark:outline-zinc-400'}`}
        >
          {isSelected ? (
            <div className="w-2.5 h-2.5 rounded-full bg-[#59d1cb]"></div>
          ) : (
            ''
          )}
        </div>
      </div>
      <p className="mt-2 text-xs text-[#b0b0b0] dark:text-zinc-400">
        {method.description}
      </p>
    </div>
  )
}
