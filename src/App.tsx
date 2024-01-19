import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './components/AppRouter'
import './styles/app.css'

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

export { App }
