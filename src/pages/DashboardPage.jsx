import Navbar from '../components/layout/Navbar'
import useTheme from '../hooks/useTheme'
import DashboardHero from '../components/dashboard/DashboardHero'
import DomainSelection from '../components/dashboard/DomainSelection'
import JourneyTimeline from '../components/dashboard/JourneyTimeline'
import ProgressConsistency from '../components/dashboard/ProgressConsistency'
import CommunityLeaderboard from '../components/dashboard/CommunityLeaderboard'
import Footer from '../components/landing/Footer'

function DashboardPage() {
  const { theme, toggleTheme } = useTheme()

  return (
    <main
      className={`${theme === 'dark' ? 'dark' : ''
        } min-h-screen overflow-x-clip bg-[#fcfcfe] text-slate-950 transition-colors duration-200 dark:bg-[#090912] dark:text-white`}
    >
      <header className="mx-auto w-full max-w-7xl px-4 pt-4 sm:px-8 sm:pt-6 lg:px-12 lg:pt-8">
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
      </header>
      <DashboardHero />
      <DomainSelection />
      <JourneyTimeline />
      <ProgressConsistency />
      <CommunityLeaderboard />
      <Footer />
    </main>
  )
}

export default DashboardPage
