// components/Select.tsx
import { useEffect, useRef, useState } from 'react'

interface SelectProps {
  value: string
  description?: string
  onChange: (value: string) => void
  options: string[]
  placeholder: string
  containerClass?: string
  disabled?: boolean
}

export function Select({
  value,
  description,
  onChange,
  containerClass = '',
  options,
  placeholder = 'Selecione',
  disabled = false,
}: SelectProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [openDirection, setOpenDirection] = useState<'up' | 'down'>('down')

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleSelect = (option: string) => {
    onChange(option)
    setIsOpen(false)
  }

  return (
    <div ref={ref} className={`relative ${containerClass}`}>
      <div
        className={`w-full h-full px-4 flex items-center justify-between border rounded-lg shadow cursor-pointer bg-white dark:bg-zinc-700 
    ${isOpen ? 'border-[#6c7275] dark:border-zinc-300' : 'border-[#6c727541] hover:border-[#6c727588] dark:border-zinc-500 dark:hover:border-zinc-400'}`}
        onClick={() => {
          if (!disabled) {
            if (ref.current) {
              const rect = ref.current.getBoundingClientRect()
              const spaceBelow = window.innerHeight - rect.bottom
              const dropdownHeight = options.length * 40
              setOpenDirection(spaceBelow < dropdownHeight + 16 ? 'up' : 'down')
            }
            setIsOpen(!isOpen)
          }
        }}
      >
        <div className="flex items-center">
          <span className="font-medium text-sm text-[#6c7275] whitespace-nowrap dark:text-zinc-300">
            {description}
          </span>

          <div className="mx-2 w-px h-5 bg-[#e8ecef] dark:bg-zinc-500" />
        </div>

        <div className="w-full flex items-center justify-between">
          <span
            className={`font-medium text-sm truncate ${
              value ? 'text-[#282828] dark:text-white' : 'dark:text-zinc-300'
            }`}
          >
            {value || placeholder}
          </span>

          <img src="/assets/chevrons-up-down.svg" />
        </div>
      </div>

      {!disabled && isOpen && (
        <div
          className={`absolute left-0 w-full z-10 bg-white dark:bg-zinc-800 border border-[#d7d7d7] dark:border-zinc-500 rounded-lg shadow-md ${
            openDirection === 'up' ? 'bottom-full' : 'top-[110%]'
          }`}
        >
          {options.map((option) => (
            <div
              key={option}
              className="px-4 py-2 text-sm text-[#282828] dark:text-white hover:bg-[#f6f6f6] dark:hover:bg-zinc-700 cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
