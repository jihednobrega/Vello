import { NavItem } from './NavItem'
import { ThemeToggleButton } from './ThemeToggleButton'

export function NavBar() {
  return (
    <div className="bg-white w-2xs flex flex-col justify-between rounded-[1.25rem] pt-6 px-4 pb-5 dark:bg-zinc-800">
      <div>
        <div className="flex justify-between items-center">
          <img src="/assets/vello.png" />

          <div className="flex gap-1 items-center p-1 bg-zinc-100 rounded-full cursor-pointer dark:bg-zinc-600">
            <div className="w-7 h-7 flex items-center justify-center bg-white rounded-full">
              <img src="/assets/fleezy.png" />
            </div>
            <img src="/assets/chevrons-up-down.svg" />
          </div>
        </div>

        <label
          htmlFor="search"
          className="mt-6 flex justify-between border border-zinc-300 px-3 py-2 rounded-lg ease-in-out outline-transparent focus-within:transition focus-within:duration-300 focus-within:border-sky-300 focus-within:outline-sky-300 focus-within:outline-[1px] dark:border-zinc-600"
        >
          <div className="flex gap-2 items-center">
            <img src="/assets/search.png" />
            <input
              id="search"
              className="w-full text-sm font-semibold placeholder:text-zinc-300 dark:text-white"
              type="text"
              placeholder="Pesquisar"
            />
          </div>
          <div className="h-6 max-w-12 px-3 border border-zinc-200 rounded-lg bg-white flex items-center">
            <img src="/assets/⌘ F.svg" className="h-6" />
          </div>
        </label>

        <div className="py-5">
          <div className="flex flex-col gap-2">
            <NavItem icon="general-icon" title="Visão Geral" to="/home" />
            <NavItem icon="calculator" title="Calculadora" to="calculator" />
            <NavItem icon="schedule" title="Media Planner" to="media-planner" />
            <NavItem icon="stats" title="Relatórios" to="reports" />
            <NavItem
              icon="alert"
              title="Alertas"
              notifications={4}
              plusIcon
              to="alerts"
            />
            <NavItem icon="client" title="Clientes" to="clients" />
            <NavItem
              icon="checklist"
              title="Checklist"
              notifications={6}
              plusIcon
              to="checklist"
            />
            <NavItem icon="offer-icon" title="Ofertas" to="offers" />
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex flex-col gap-2">
          <NavItem icon="settings" title="Configurações" to="settings" />
          <NavItem icon="help" title="Ajuda" isDisabled />
        </div>
        <div className="mt-6 bg-linear-to-t from-white to-[#f6f6f6] py-2 px-4 rounded-xl border border-zinc-200 dark:from-zinc-600 dark:to-zinc-500 dark:border-zinc-400">
          <div className="flex gap-4 items-center py-1.5 px-2.5">
            <img src="/assets/profile.png" className="w-10 h-10 rounded-full" />
            <div>
              <p className="text-base/[20px] font-medium text-[#767676] dark:text-white">
                Fleezy
              </p>
              <p className="text-xs/[16px] font-medium text-[#c5c4c4] tracking-[-0.15px] dark:text-zinc-400">
                user@fleezy.com
              </p>
            </div>
          </div>
        </div>
        <div className="mt-2.5">
          <ThemeToggleButton />
        </div>
      </div>
    </div>
  )
}
