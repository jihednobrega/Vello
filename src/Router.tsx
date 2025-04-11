import { Navigate, Route, Routes } from 'react-router'
import { DefaultLayout } from './DefaultLayout'
import { Calculator } from './pages/Calculator'
import { Home } from './pages/Home'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Navigate to="/calculator" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/calculator/*" element={<Calculator />} />
        <Route path="/media-planner" />
        <Route path="/reports" />
        <Route path="/alerts" />
        <Route path="/clients" />
        <Route path="/checklist" />
        <Route path="/offers" />
        <Route path="/settings" />
      </Route>
    </Routes>
  )
}
