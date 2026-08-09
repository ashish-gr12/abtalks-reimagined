import { Moon, Sun } from 'lucide-react'
import { Link } from 'react-router-dom'

function ABTalksLogo() {
  return (
    <svg aria-label="AB Talks" className="h-7 w-[88px] text-slate-950 dark:text-white" role="img" viewBox="0 0 176 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="2" y="32" fill="currentColor" fontFamily="cursive" fontSize="31" fontStyle="italic" fontWeight="700" letterSpacing="-2">AB TALKS</text>
    </svg>
  )
}

function Navbar({ theme, onToggleTheme }) {
  const isDark = theme === 'dark'

  return (
    <header className="flex min-h-12 items-center justify-between border-b border-slate-200/90 pb-3 dark:border-white/10">
      <Link to="/" className="rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500">
        <ABTalksLogo />
      </Link>
      <div className="flex items-center gap-2">
        <button
          aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
          aria-pressed={!isDark}
          className="grid size-10 place-items-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:border-white/10 dark:bg-white/[0.045] dark:text-slate-200 dark:shadow-none dark:hover:bg-white/[0.09]"
          onClick={onToggleTheme}
          type="button"
        >
          {isDark ? <Sun aria-hidden="true" className="size-4" /> : <Moon aria-hidden="true" className="size-4" />}
        </button>
        <span className="hidden rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-600 dark:border-white/10 dark:bg-white/[0.035] dark:text-slate-300 sm:inline">60-day challenge</span>
      </div>
    </header>
  )
}

export default Navbar
