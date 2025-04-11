import { BrowserRouter } from 'react-router'
import { AppRoutes } from './Router'
import { ThemeProvider } from './context/ThemeToggle'

export function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}
