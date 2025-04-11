import { Outlet } from 'react-router'
import { NavBar } from './components/NavBar'

export function DefaultLayout() {
  return (
    <div className="grid grid-cols-[18rem_1fr] p-4 gap-2 h-screen bg-[#ebebeb] dark:bg-zinc-700">
      <NavBar />
      <Outlet />
    </div>
  )
}
