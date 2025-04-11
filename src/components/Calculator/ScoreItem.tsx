interface ScoreItemProps {
  label: string
  score?: string
  labelClass?: string
  containerClass?: string
  hideScore?: boolean
}

export function ScoreItem({
  label,
  score,
  labelClass = 'text-sm text-[#9c9c9c] dark:text-zinc-200',
  containerClass = '',
  hideScore = false,
}: ScoreItemProps) {
  return (
    <div
      className={`p-4 flex items-center justify-between border-t border-t-[#e4e9e9] dark:border-t-zinc-400 ${containerClass}`}
    >
      <div className="flex gap-1.5 items-center">
        <div className="w-3 h-3 flex items-center justify-center rounded-full outline outline-[#259f9b] bg-[#64e6e27f] dark:bg-transparent">
          <div className="w-1 h-1 rounded-full bg-[#259f9b]" />
        </div>
        <span className={labelClass}>{label}</span>
      </div>
      {!hideScore && (
        <span className="py-0.5 px-2 text-xs text-[#259f9b] border border-[#259f9b] rounded-full bg-[#64e6e233] dark:bg-transparent">
          {score} pts
        </span>
      )}
    </div>
  )
}
