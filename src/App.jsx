import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/landing/Hero'
import DashboardPage from './pages/DashboardPage'
import ChallengeDayPage from './pages/ChallengeDayPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/day/12" element={<ChallengeDayPage />} />
      </Routes>
    </Router>
  )
}

export default App
