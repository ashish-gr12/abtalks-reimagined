import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Mail, Sparkles, Check, ChevronRight, Trophy, ShieldCheck, FolderGit2 } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { getJourneyState } from '../../lib/journeyState'

function ABTalksLogo() {
  return (
    <svg
      aria-label="AB Talks"
      className="h-6 w-[75px] text-slate-950 dark:text-white"
      role="img"
      viewBox="0 0 176 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="2"
        y="32"
        fill="currentColor"
        fontFamily="cursive"
        fontSize="31"
        fontStyle="italic"
        fontWeight="700"
        letterSpacing="-2"
      >
        AB TALKS
      </text>
    </svg>
  )
}

function InstagramIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function FacebookIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function DiscordIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  )
}

function YoutubeIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
    </svg>
  )
}

function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const socialLinks = [
  { name: 'Instagram', href: '#', icon: InstagramIcon },
  { name: 'Facebook', href: '#', icon: FacebookIcon },
  { name: 'Discord', href: '#', icon: DiscordIcon },
  { name: 'YouTube', href: '#', icon: YoutubeIcon },
  { name: 'X', href: '#', icon: XIcon },
]

// 1. Landing 60-Day Visual Motif Component
function SixtyDayVisualMotif({ isHovered }) {
  const dots = [1, 2, 3, 4, 5, 12, 30, 45, 60]

  return (
    <div className="mt-5 inline-flex max-w-full flex-col items-center gap-2 rounded-2xl border border-slate-200/80 bg-slate-100/70 p-3 dark:border-white/10 dark:bg-white/[0.03] sm:p-4">
      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-300">
        <Sparkles className="size-3.5 fill-current" />
        <span>ONE DAY AT A TIME • 60-DAY PATH</span>
      </div>

      <div className="flex max-w-full flex-wrap items-center justify-center gap-1.5 sm:gap-2">
        {dots.map((dayNum, idx) => {
          const isCheck = dayNum <= 5
          const isCurrent = dayNum === 12
          const isTarget = dayNum === 60

          return (
            <motion.div
              key={idx}
              animate={
                isHovered
                  ? {
                      scale: [1, 1.15, 1],
                      opacity: [0.8, 1, 0.8],
                    }
                  : {}
              }
              transition={{
                duration: 0.8,
                delay: idx * 0.08,
                repeat: isHovered ? Infinity : 0,
                repeatType: 'reverse',
              }}
              className={`grid size-6 place-items-center rounded-lg text-[9px] font-extrabold transition-all sm:size-7 sm:text-[10px] ${
                isCheck
                  ? 'bg-emerald-500 text-white shadow-xs'
                  : isCurrent
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/30 ring-2 ring-indigo-400/50 dark:bg-indigo-500'
                  : isTarget
                  ? 'border border-amber-300 bg-amber-400 text-slate-950 font-black dark:border-amber-400/40 dark:bg-amber-400'
                  : 'border border-slate-200 bg-white text-slate-400 dark:border-white/10 dark:bg-white/5 dark:text-slate-500'
              }`}
              title={`Day ${dayNum}`}
            >
              {isCheck ? (
                <Check className="size-3 stroke-[3]" />
              ) : isCurrent ? (
                '12'
              ) : (
                dayNum
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

// 2. Dashboard Journey Progress Visual Motif Component (Responsive at 390px)
function DashboardJourneyMotif({ shouldReduceMotion }) {
  return (
    <div className="mt-5 inline-flex w-full max-w-full flex-col items-center gap-3 rounded-2xl border border-indigo-100 bg-indigo-50/70 p-3.5 text-center dark:border-indigo-500/15 dark:bg-indigo-500/[0.04] sm:w-auto sm:p-5">
      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-indigo-700 dark:text-indigo-300 sm:text-[11px]">
        <Trophy className="size-3.5 text-amber-500 shrink-0" />
        <span>JOURNEY MILESTONE TRACKER</span>
      </div>

      <div className="flex w-full max-w-full flex-col items-center justify-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200 sm:flex-row sm:gap-3">
        <span className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 shadow-2xs dark:border-white/10 dark:bg-white/10 sm:w-auto">
          <span className="size-2 rounded-full bg-emerald-500" /> Current Progress
        </span>
        <motion.span
          initial={shouldReduceMotion ? false : { opacity: 0, y: -2 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="rotate-90 text-slate-400 sm:rotate-0"
        >
          →
        </motion.span>
        <span className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-indigo-200 bg-indigo-100/80 px-3 py-1.5 text-indigo-900 shadow-2xs dark:border-indigo-400/30 dark:bg-indigo-500/20 dark:text-indigo-200 sm:w-auto">
          Next Challenge (Day 13)
        </span>
        <motion.span
          initial={shouldReduceMotion ? false : { opacity: 0, y: -2 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="rotate-90 text-slate-400 sm:rotate-0"
        >
          →
        </motion.span>
        <span className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-indigo-600 px-3 py-1.5 text-white shadow-xs dark:bg-indigo-500 sm:w-auto">
          Keep Going
        </span>
      </div>
    </div>
  )
}

// 3. Challenge Day Progression Visual Motif Component (Responsive at 390px)
function ChallengeProgressionMotif({ currentDay = 12, isCompleted = false, shouldReduceMotion }) {
  return (
    <div className="mt-5 inline-flex w-full max-w-full flex-col items-center gap-3 rounded-2xl border border-indigo-100 bg-indigo-50/70 p-3.5 text-center dark:border-indigo-500/15 dark:bg-indigo-500/[0.04] sm:w-auto sm:p-5">
      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-indigo-700 dark:text-indigo-300 sm:text-[11px]">
        <ShieldCheck className="size-3.5 text-emerald-500 shrink-0" />
        <span>DAY {currentDay} ACTION WORKFLOW</span>
      </div>

      <div className="flex w-full max-w-full flex-col items-center justify-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200 sm:flex-row sm:gap-3">
        <motion.span
          initial={shouldReduceMotion ? false : { scale: 0.95, opacity: 0 }}
          whileInView={shouldReduceMotion ? undefined : { scale: 1, opacity: 1 }}
          transition={{ duration: 0.25 }}
          className={`inline-flex w-full items-center justify-center gap-1.5 rounded-lg border px-3 py-1.5 shadow-2xs sm:w-auto ${
            isCompleted
              ? 'border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/15 dark:text-emerald-300'
              : 'border-slate-200 bg-white dark:border-white/10 dark:bg-white/10'
          }`}
        >
          {isCompleted ? <Check className="size-3.5 text-emerald-600 dark:text-emerald-400 stroke-[3]" /> : <FolderGit2 className="size-3.5 text-indigo-500" />}
          <span>✓ Build</span>
        </motion.span>
        <span className="rotate-90 text-slate-400 sm:rotate-0">→</span>
        <motion.span
          initial={shouldReduceMotion ? false : { scale: 0.95, opacity: 0 }}
          whileInView={shouldReduceMotion ? undefined : { scale: 1, opacity: 1 }}
          transition={{ duration: 0.25, delay: 0.08 }}
          className={`inline-flex w-full items-center justify-center gap-1.5 rounded-lg border px-3 py-1.5 shadow-2xs sm:w-auto ${
            isCompleted
              ? 'border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/15 dark:text-emerald-300'
              : 'border-slate-200 bg-white dark:border-white/10 dark:bg-white/10'
          }`}
        >
          {isCompleted ? <Check className="size-3.5 text-emerald-600 dark:text-emerald-400 stroke-[3]" /> : <ShieldCheck className="size-3.5 text-indigo-500" />}
          <span>✓ Prove</span>
        </motion.span>
        <span className="rotate-90 text-slate-400 sm:rotate-0">→</span>
        <motion.span
          initial={shouldReduceMotion ? false : { scale: 0.95, opacity: 0 }}
          whileInView={shouldReduceMotion ? undefined : { scale: 1, opacity: 1 }}
          transition={{ duration: 0.25, delay: 0.16 }}
          className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-indigo-600 px-3 py-1.5 text-white shadow-xs dark:bg-indigo-500 sm:w-auto"
        >
          <span>Next Challenge</span>
        </motion.span>
      </div>
    </div>
  )
}

function Footer({ mode: modeProp, currentDay = 12, isCompleted = false, proofState }) {
  const shouldReduceMotion = useReducedMotion()
  const location = useLocation()
  const [isMotifHovered, setIsMotifHovered] = useState(false)
  const [hasSelectedDomain, setHasSelectedDomain] = useState(() => {
    const state = getJourneyState()
    return Boolean(state.selectedDomain)
  })

  // Auto-detect mode from route if modeProp is not passed explicitly
  let mode = modeProp
  if (!mode) {
    const pathname = location?.pathname || ''
    if (pathname === '/dashboard') {
      mode = 'dashboard'
    } else if (pathname.startsWith('/day/')) {
      mode = 'challenge'
    } else {
      mode = 'landing'
    }
  }

  useEffect(() => {
    const handleUpdate = () => {
      const state = getJourneyState()
      setHasSelectedDomain(Boolean(state.selectedDomain))
    }
    window.addEventListener('abtalks-journey-updated', handleUpdate)
    window.addEventListener('storage', handleUpdate)
    return () => {
      window.removeEventListener('abtalks-journey-updated', handleUpdate)
      window.removeEventListener('storage', handleUpdate)
    }
  }, [])

  const handleHowItWorksClick = (e) => {
    e.preventDefault()
    const section = document.getElementById('how-it-works')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.footer
      initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true, amount: 0.15 }}
      className="w-full max-w-full overflow-x-clip border-t border-slate-200/80 bg-slate-50/60 px-4 pb-10 pt-10 dark:border-white/10 dark:bg-[#06060c] sm:px-8 sm:pb-12 sm:pt-14 lg:px-12"
    >
      <div className="mx-auto max-w-5xl">
        {/* DYNAMIC CTA CARD SECTION */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          onMouseEnter={() => setIsMotifHovered(true)}
          onMouseLeave={() => setIsMotifHovered(false)}
          className="relative overflow-hidden rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50/90 via-white to-slate-50 p-5 text-center shadow-xl shadow-indigo-950/5 dark:border-indigo-500/20 dark:from-indigo-950/40 dark:via-[#111122] dark:to-[#0a0a14] dark:shadow-indigo-950/30 sm:p-10 lg:p-12"
        >
          {/* Faint Radial Background Glow Effect */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-500/20"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl dark:bg-amber-500/15"
          />

          {/* MODE 1: DASHBOARD FOOTER */}
          {mode === 'dashboard' && (
            <>
              <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-1.5 rounded-full border border-indigo-200 bg-white/80 px-3 py-1 text-[10px] font-extrabold tracking-wider text-indigo-700 dark:border-indigo-500/30 dark:bg-white/5 dark:text-indigo-300 sm:text-[11px]">
                <span>CURRENT PROGRESS</span>
                <span className="text-slate-300 dark:text-slate-600">→</span>
                <span>NEXT CHALLENGE</span>
                <span className="text-slate-300 dark:text-slate-600">→</span>
                <span className="text-emerald-600 dark:text-emerald-400">KEEP GOING</span>
              </div>

              <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950 dark:text-white sm:mt-4 sm:text-3xl lg:text-4xl">
                Keep building. Keep moving.
              </h2>

              <p className="mt-2 text-xs font-extrabold text-indigo-600 dark:text-indigo-300 sm:text-base">
                One challenge at a time. Your next milestone is already waiting.
              </p>

              <p className="mx-auto mt-2 max-w-xl text-xs leading-relaxed text-slate-600 dark:text-slate-300 sm:text-sm">
                Build consistently. Show your progress. Let your work speak for you.
              </p>

              <DashboardJourneyMotif shouldReduceMotion={shouldReduceMotion} />

              <div className="mt-6 flex flex-col items-center justify-center gap-2.5 sm:mt-7 sm:flex-row sm:gap-4">
                <Link to="/day/12" className="w-full sm:w-auto">
                  <motion.button
                    type="button"
                    whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.02 }}
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 text-xs font-bold text-white shadow-lg shadow-indigo-600/25 hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:bg-indigo-500 dark:shadow-indigo-500/30 dark:hover:bg-indigo-400 sm:w-auto sm:text-sm"
                  >
                    <span>Continue Your Journey</span>
                    <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
                  </motion.button>
                </Link>
                <a href="#dashboard-progress-section" className="w-full sm:w-auto">
                  <button
                    type="button"
                    className="group inline-flex min-h-12 w-full items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-white/80 px-6 text-xs font-bold text-slate-800 shadow-xs hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white sm:w-auto sm:text-sm"
                  >
                    <span>View Streak & Progress</span>
                    <ChevronRight className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                  </button>
                </a>
              </div>
            </>
          )}

          {/* MODE 2: CHALLENGE DAY FOOTER */}
          {mode === 'challenge' && (
            <>
              <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-1.5 rounded-full border border-indigo-200 bg-white/80 px-3 py-1 text-[10px] font-extrabold tracking-wider text-indigo-700 dark:border-indigo-500/30 dark:bg-white/5 dark:text-indigo-300 sm:text-[11px]">
                <span>DAY {currentDay}</span>
                <span className="text-slate-300 dark:text-slate-600">•</span>
                <span className="text-emerald-600 dark:text-emerald-400">✓ BUILD</span>
                <span className="text-slate-300 dark:text-slate-600">•</span>
                <span className="text-emerald-600 dark:text-emerald-400">✓ PROVE</span>
                <span className="text-slate-300 dark:text-slate-600">→</span>
                <span>NEXT CHALLENGE</span>
              </div>

              <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950 dark:text-white sm:mt-4 sm:text-3xl lg:text-4xl">
                {isCompleted ? `Day ${currentDay} complete.` : 'Build it. Prove it. Move forward.'}
              </h2>

              <p className="mt-2 text-xs font-extrabold text-indigo-600 dark:text-indigo-300 sm:text-base">
                {isCompleted
                  ? 'Your next challenge is ready.'
                  : 'Complete today’s challenge, submit your proof, and unlock what’s next.'}
              </p>

              <p className="mx-auto mt-2 max-w-xl text-xs leading-relaxed text-slate-600 dark:text-slate-300 sm:text-sm">
                {isCompleted
                  ? "Great work! You've documented your proof of work and earned your day's streak. Keep the momentum going!"
                  : "Focus on today's build. Submit your GitHub repository and LinkedIn post to lock in your streak."}
              </p>

              <ChallengeProgressionMotif currentDay={currentDay} isCompleted={isCompleted} shouldReduceMotion={shouldReduceMotion} />

              <div className="mt-6 flex flex-col items-center justify-center gap-2.5 sm:mt-7 sm:flex-row sm:gap-4">
                {isCompleted ? (
                  <Link to="/dashboard" className="w-full sm:w-auto">
                    <motion.button
                      type="button"
                      whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.02 }}
                      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                      transition={{ duration: 0.18 }}
                      className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-7 text-xs font-bold text-white shadow-lg shadow-emerald-600/25 hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 dark:bg-emerald-500 dark:shadow-emerald-500/30 dark:hover:bg-emerald-400 sm:w-auto sm:text-sm"
                    >
                      <motion.span
                        initial={shouldReduceMotion ? false : { scale: 0.85, opacity: 0 }}
                        animate={shouldReduceMotion ? undefined : { scale: 1, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className="inline-flex items-center gap-1.5"
                      >
                        <Check className="size-4 stroke-[3]" />
                        <span>Continue to Next Challenge</span>
                      </motion.span>
                      <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
                    </motion.button>
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleScrollToSection('proof-section')}
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 text-xs font-bold text-white shadow-lg shadow-indigo-600/25 hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:bg-indigo-500 dark:shadow-indigo-500/30 dark:hover:bg-indigo-400 sm:w-auto sm:text-sm"
                  >
                    <span>Submit Your Proof</span>
                    <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
                  </button>
                )}
              </div>
            </>
          )}

          {/* MODE 3: DEFAULT LANDING FOOTER */}
          {mode === 'landing' && (
            <>
              <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-1.5 rounded-full border border-indigo-200 bg-white/80 px-3 py-1 text-[10px] font-extrabold tracking-wider text-indigo-700 dark:border-indigo-500/30 dark:bg-white/5 dark:text-indigo-300 sm:text-[11px]">
                <span>BUILD</span>
                <span className="text-slate-300 dark:text-slate-600">→</span>
                <span>DOCUMENT</span>
                <span className="text-slate-300 dark:text-slate-600">→</span>
                <span>SHOWCASE</span>
                <span className="text-slate-300 dark:text-slate-600">→</span>
                <span className="text-emerald-600 dark:text-emerald-400">GET NOTICED</span>
              </div>

              <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950 dark:text-white sm:mt-4 sm:text-3xl lg:text-4xl">
                Ready to start your 60-day journey?
              </h2>

              <p className="mt-2 text-xs font-extrabold text-indigo-600 dark:text-indigo-300 sm:text-base">
                Your next 60 days can change what you can build.
              </p>

              <p className="mx-auto mt-2 max-w-xl text-xs leading-relaxed text-slate-600 dark:text-slate-300 sm:text-sm">
                Build consistently. Show your progress. Let your work speak for you.
              </p>

              <SixtyDayVisualMotif isHovered={isMotifHovered} />

              <div className="mt-6 flex flex-col items-center justify-center gap-2.5 sm:mt-7 sm:flex-row sm:gap-4">
                <Link to="/dashboard" className="w-full sm:w-auto">
                  <motion.button
                    type="button"
                    whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.02 }}
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 text-xs font-bold text-white shadow-lg shadow-indigo-600/25 hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:bg-indigo-500 dark:shadow-indigo-500/30 dark:hover:bg-indigo-400 sm:w-auto sm:text-sm"
                  >
                    <span>{hasSelectedDomain ? 'Track Your Progress' : 'Start Your 60 Days'}</span>
                    <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
                  </motion.button>
                </Link>
                <a
                  href="#how-it-works"
                  onClick={handleHowItWorksClick}
                  className="w-full sm:w-auto"
                >
                  <motion.button
                    type="button"
                    whileHover={shouldReduceMotion ? undefined : { y: -1 }}
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="group inline-flex min-h-12 w-full items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-white/80 px-6 text-xs font-bold text-slate-800 shadow-xs hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white sm:w-auto sm:text-sm"
                  >
                    <span>How It Works</span>
                    <ChevronRight className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                  </motion.button>
                </a>
              </div>
            </>
          )}
        </motion.div>

        {/* Faint Separator Border */}
        <div className="my-8 border-t border-slate-200/80 dark:border-white/8 sm:my-10" />

        {/* FOOTER INFORMATION GRID */}
        <div className="grid gap-8 text-center sm:text-left md:grid-cols-2 md:items-start md:justify-between">
          {/* Left Column: Description & Quote */}
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2 sm:justify-start">
              <ABTalksLogo />
            </div>
            <p className="max-w-md text-xs leading-relaxed text-slate-600 dark:text-slate-400 sm:text-sm">
              ABTalks is a platform for students to learn, build, showcase their work, and accelerate their careers through consistent proof of work.
            </p>
            <div className="rounded-xl border border-indigo-100 bg-indigo-50/60 p-3.5 dark:border-indigo-400/15 dark:bg-indigo-500/10">
              <p className="text-xs font-bold tracking-tight text-indigo-950 dark:text-indigo-200">
                “Consistency compounds.”
              </p>
              <p className="mt-0.5 text-[11px] font-medium text-indigo-700/90 dark:text-indigo-300/80">
                One day at a time. One build at a time.
              </p>
            </div>
          </div>

          {/* Right Column: Contact & Socials */}
          <div className="flex flex-col items-center space-y-5 sm:items-end">
            {/* Contact Email */}
            <div className="text-center sm:text-right">
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                For any issue or enquiry:
              </p>
              <a
                href="mailto:team@abtalks.in"
                className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:underline dark:text-indigo-300"
              >
                <Mail className="size-3.5 shrink-0" aria-hidden="true" />
                <span>team@abtalks.in</span>
              </a>
            </div>

            {/* Social Icons Row */}
            <div className="space-y-2 text-center sm:text-right">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400 dark:text-slate-500">
                Follow our journey
              </p>
              <div className="flex items-center justify-center gap-1.5 sm:justify-end">
                {socialLinks.map((item) => {
                  const Icon = item.icon
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      aria-label={item.name}
                      whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.05 }}
                      transition={{ duration: 0.18 }}
                      className="grid size-10 place-items-center rounded-xl border border-slate-200/90 bg-white text-slate-600 shadow-sm transition-colors hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-400 dark:shadow-none dark:hover:border-indigo-400/30 dark:hover:bg-indigo-500/15 dark:hover:text-indigo-300"
                    >
                      <Icon className="size-4" aria-hidden="true" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Line */}
        <div className="mt-8 border-t border-slate-200/60 pt-6 text-center dark:border-white/5 sm:mt-10">
          <p className="text-[11px] text-slate-500 dark:text-slate-500">
            © 2026 ABTalks. Reimagined for Indian College Students. Mobile-first 60-Day Challenge.
          </p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
