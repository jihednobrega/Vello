interface Column {
  header: string
  accessor: string
  hasIcon?: string
}

interface InfoTableProps {
  columns: Column[]
  data: any[]
  containerClass?: string
  columnSize: 'smaller' | 'bigger'
}

export function InfoTable({
  columns,
  data,
  containerClass = '',
  columnSize,
}: InfoTableProps) {
  return (
    <div
      className={`bg-white border border-[#e9ecef] rounded-xl dark:bg-zinc-500 dark:border-zinc-400 ${containerClass}`}
    >
      <div className="px-4 flex items-center">
        {columns.map((col, index) => (
          <div
            key={index}
            className={`${columnSize === 'bigger' ? 'w-[14.5rem]' : 'w-[11.3125rem]'} p-4 flex items-center gap-2.5`}
          >
            <p className="text-xs font-semibold text-[#6c6c6c] dark:text-white">
              {col.header}
            </p>
            {col.hasIcon && <img src={`/assets/${col.hasIcon}.svg`} />}
          </div>
        ))}
      </div>

      {data.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="px-4 flex items-center border-t border-t-[#e9ecef] dark:border-t-zinc-400"
        >
          {columns.map((col, colIndex) => (
            <p
              key={colIndex}
              className={`${columnSize === 'bigger' ? 'w-[14.5rem]' : 'w-[11.3125rem]'} px-4 py-5 text-sm text-[#6c6c6c] font-[Inter] dark:text-white`}
            >
              {row[col.accessor]}
            </p>
          ))}
        </div>
      ))}
    </div>
  )
}
