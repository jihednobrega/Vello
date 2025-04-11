import { NavLink } from 'react-router'

interface NavItemProps {
  icon: string
  title: string
  notifications?: number
  plusIcon?: boolean
  isDisabled?: boolean
  to?: string
}

export function NavItem({
  icon,
  title,
  notifications = 0,
  plusIcon = false,
  isDisabled = false,
  to = '#',
}: NavItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex justify-between py-2 px-3 rounded-lg border ${isDisabled ? 'opacity-50 cursor-default' : 'hover:border hover:border-[#f0f0f0] hover:shadow-2xs active:border active:border-[#f0f0f0] active:shadow-2xs dark:hover:border-zinc-600 cursor-pointer'} ${isActive && !isDisabled ? ' border-[#f0f0f0] shadow-2xs dark:border-zinc-600 dark:shadow-zinc-600' : 'border-transparent'} `
      }
    >
      <div className="flex items-center gap-2">
        <img src={`/assets/${icon}.svg`} />
        <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-300">
          {title}
        </span>
      </div>
      <div className="flex items-center gap-2.5">
        {notifications != 0 ? (
          <p className="py-1 px-2 rounded-md text-sm font-semibold text-zinc-500 bg-[#ebedee] dark:text-zinc-300 dark:bg-zinc-800">
            {notifications}
          </p>
        ) : (
          <p className="bg-none"></p>
        )}
        {plusIcon && <img src="/assets/icon-plus.svg" />}
      </div>
    </NavLink>
  )
}
