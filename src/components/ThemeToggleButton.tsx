import { useTheme } from '../context/ThemeToggle'

export function ThemeToggleButton() {
  const { theme, setTheme } = useTheme()

  const handleThemeChange = (theme: 'light' | 'dark') => {
    setTheme(theme)
  }

  return (
    <div className="h-11 bg-[#f4f4f4] p-1 border border-[#eeeeee] rounded-xl dark:bg-zinc-500 dark:border-zinc-400">
      <div className="h-full relative flex justify-center items-center">
        <label className="px-2 flex justify-center gap-2 w-1/2 cursor-pointer">
          <img
            src="/assets/light-mode.svg"
            className={`${theme !== 'dark' ? '' : 'opacity-50'} z-10`}
          />
          <input
            type="radio"
            id="light"
            name="theme"
            className="hidden"
            checked={theme === 'light'}
            onChange={() => handleThemeChange('light')}
          />
          <span
            className={`${theme !== 'dark' ? '' : 'opacity-50'} z-10 font-medium`}
          >
            Light
          </span>
        </label>

        <label className="px-2 flex justify-center gap-2 w-1/2 cursor-pointer">
          <img
            src="/assets/dark-mode.svg"
            className={`${theme === 'dark' ? '' : 'opacity-50'} z-10`}
          />
          <input
            type="radio"
            id="dark"
            name="theme"
            className="hidden"
            checked={theme === 'dark'}
            onChange={() => handleThemeChange('dark')}
          />
          <span
            className={`text-[#282828] z-10 font-medium ${theme === 'dark' ? '' : 'opacity-50'}`}
          >
            Dark
          </span>
        </label>

        <span
          className={`absolute w-1/2 h-full top-0 left-0 transition-transform duration-300 ease-in-out rounded-lg shadow bg-white border border-zinc-200 cursor-pointer ${theme === 'dark' ? 'translate-x-full' : ''} dark:bg-zinc-300`}
        ></span>
      </div>
    </div>
  )
}
