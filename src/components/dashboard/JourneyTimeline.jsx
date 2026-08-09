import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Check,
  Lock,
  Clock,
  ArrowRight,
  Sparkles,
  Target,
  BookOpen,
  Layers,
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { mockJourneys } from '../../data/journeyData'
import { getJourneyState, selectDomain, getEffectiveMetrics } from '../../lib/journeyState'

const lineVariants = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

const dotVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.25,
      ease: 'easeOut',
    },
  },
}

function JourneyTimeline() {
  const navigate = useNavigate()

  // Track active domain and metrics
  const [activeDomainKey, setActiveDomainKey] = useState(() => {
    const state = getJourneyState()
    return state.selectedDomain || 'software-engineering'
  })

  const [metrics, setMetrics] = useState(getEffectiveMetrics)

  // Watch for storage changes or updates
  useEffect(() => {
    const handleStorageChange = () => {
      const state = getJourneyState()
      const saved = state.selectedDomain || 'software-engineering'
      if (saved && mockJourneys[saved]) {
        setActiveDomainKey(saved)
      }
      setMetrics(getEffectiveMetrics())
    }
    window.addEventListener('abtalks-journey-updated', handleStorageChange)
    window.addEventListener('storage', handleStorageChange)
    return () => {
      window.removeEventListener('abtalks-journey-updated', handleStorageChange)
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  const currentJourney = mockJourneys[activeDomainKey] || mockJourneys['software-engineering']

  // Adapt challenge statuses based on effective metrics (fresh, missed, active, or real application state)
  const challenges = currentJourney.challenges.map((ch) => {
    if (metrics.demoMode === 'fresh') {
      return {
        ...ch,
        status: ch.day === 1 ? 'current' : 'locked',
      }
    }
    if (metrics.demoMode === 'missed') {
      if (ch.day < 4) return { ...ch, status: 'completed' }
      if (ch.day === 4) return { ...ch, status: 'missed', statusLabel: 'Missed Day 4' }
      if (ch.day === 5) return { ...ch, status: 'current' }
      return { ...ch, status: 'locked' }
    }
    if (metrics.demoMode === 'active') {
      if (ch.day < 3) return { ...ch, status: 'completed' }
      if (ch.day === 3) return { ...ch, status: 'current' }
      return { ...ch, status: 'locked' }
    }

    // REAL APPLICATION STATE
    if (metrics.completedDays.includes(ch.day)) {
      return { ...ch, status: 'completed' }
    }
    if (metrics.missedDays.includes(ch.day)) {
      return { ...ch, status: 'missed', statusLabel: `Missed Day ${ch.day}` }
    }
    if (ch.day === metrics.currentDay) {
      return { ...ch, status: 'current' }
    }
    if (ch.day > metrics.currentDay) {
      return { ...ch, status: 'locked' }
    }
    return ch
  })

  const defaultSelectedDay = metrics.demoMode === 'fresh' ? 1 : metrics.demoMode === 'missed' ? 5 : 3
  const [selectedDay, setSelectedDay] = useState(defaultSelectedDay)

  useEffect(() => {
    setSelectedDay(metrics.demoMode === 'fresh' ? 1 : metrics.demoMode === 'missed' ? 5 : 3)
  }, [metrics.demoMode])

  const activeChallenge = challenges.find((c) => c.day === selectedDay) || challenges[0]

  const handleStartChallenge = () => {
    navigate('/day/12')
  }

  const handleTimelineClick = (challenge) => {
    setSelectedDay(challenge.day)
  }

  const handleDomainPillClick = (key) => {
    setActiveDomainKey(key)
    selectDomain(key)
  }

  return (
    <section
      id="your-journey-section"
      aria-label="Your 60-day Journey and Today's Task"
      className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-8 sm:py-12 lg:px-12"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-2xl text-center"
      >
        <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200 bg-indigo-50/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-indigo-600 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-300 sm:text-[11px]">
          <Target className="size-3.5" />
          YOUR JOURNEY
        </div>
        <h2 className="mt-2.5 text-2xl font-bold leading-tight tracking-[-0.035em] text-slate-950 dark:text-white sm:text-3xl lg:text-4xl">
          Track your progress. Complete today’s challenge.
        </h2>
        <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
          Every day is another step toward becoming job-ready.
        </p>

        {/* Domain Switcher Pill Selector */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          {Object.entries(mockJourneys).map(([key, data]) => {
            const isSelected = activeDomainKey === key
            return (
              <button
                key={key}
                type="button"
                onClick={() => handleDomainPillClick(key)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all duration-150 focus-visible:outline-2 focus-visible:outline-indigo-500 ${
                  isSelected
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 dark:bg-white/5 dark:text-slate-400 dark:hover:bg-white/10'
                }`}
              >
                {data.domainName}
              </button>
            )
          })}
        </div>
      </motion.div>

      {/* Main Two-Column Layout (Desktop) / Vertical Stack (Mobile 390px) */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-12 lg:gap-8">
        {/* LEFT COLUMN: YOUR JOURNEY — TIMELINE */}
        <div className="flex flex-col md:col-span-6 lg:col-span-5">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              60-DAY PATHWAY
            </h3>
            <span className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400">
              Day 3 of 60
            </span>
          </div>

          {/* Timeline Container with Isolated Left Axis */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="relative"
          >
            {/* Continuous Vertical Timeline Line (Centered on x=16px on mobile, x=18px on sm/desktop) */}
            <motion.div
              variants={lineVariants}
              style={{ originY: 0 }}
              aria-hidden="true"
              className="absolute bottom-5 left-4 top-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-indigo-500 via-indigo-400/50 to-slate-200 dark:to-white/10 sm:left-[18px] motion-reduce:transform-none motion-reduce:scale-y-100"
            />

            {/* List of Timeline Challenge Items (Dot column & Card independent) */}
            <div className="flex flex-col gap-3.5 sm:gap-4">
              {challenges.map((challenge) => {
                const isCompleted = challenge.status === 'completed'
                const isCurrent = challenge.status === 'current'
                const isLocked = challenge.status === 'locked'
                const isSelected = selectedDay === challenge.day

                return (
                  <motion.div
                    key={challenge.day}
                    variants={itemVariants}
                    className="flex items-start gap-3 sm:gap-4"
                  >
                    {/* Timeline Node Dot Column (Width 8 / 32px wide, centered on timeline line) */}
                    <div className="relative z-10 flex w-8 shrink-0 justify-center pt-2 sm:w-9">
                      <motion.div variants={dotVariants}>
                        {isCompleted && (
                          <div className="grid size-8 place-items-center rounded-full bg-emerald-500 text-white shadow-sm dark:bg-emerald-500 sm:size-9">
                            <Check className="size-4 stroke-[2.5]" aria-hidden="true" />
                          </div>
                        )}

                        {isCurrent && (
                          <div className="relative grid size-8 place-items-center rounded-full bg-indigo-600 text-white shadow-md shadow-indigo-500/30 ring-4 ring-indigo-500/20 dark:bg-indigo-500 dark:ring-indigo-400/20 sm:size-9">
                            <Sparkles className="relative size-4 fill-white text-white" aria-hidden="true" />
                          </div>
                        )}

                        {isLocked && (
                          <div className="grid size-8 place-items-center rounded-full border border-slate-300 bg-slate-100 text-slate-400 dark:border-white/10 dark:bg-white/5 dark:text-slate-500 sm:size-9">
                            <Lock className="size-3.5" aria-hidden="true" />
                          </div>
                        )}
                      </motion.div>
                    </div>

                    {/* Independent Challenge Card */}
                    <div
                      onClick={() => handleTimelineClick(challenge)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          handleTimelineClick(challenge)
                        }
                      }}
                      className={`group relative flex-1 cursor-pointer overflow-hidden rounded-2xl border p-3.5 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 sm:p-4 ${
                        isCurrent
                          ? 'border-indigo-500/80 bg-indigo-50/70 shadow-md shadow-indigo-950/5 ring-2 ring-indigo-500/20 dark:border-indigo-400 dark:bg-indigo-500/15 dark:shadow-indigo-950/30'
                          : isSelected
                          ? 'border-slate-300 bg-slate-50 dark:border-white/20 dark:bg-white/5'
                          : isCompleted
                          ? 'border-slate-200/90 bg-white/90 hover:border-slate-300 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20'
                          : 'border-slate-200/60 bg-slate-50/50 opacity-80 hover:border-slate-300 dark:border-white/5 dark:bg-white/[0.015] dark:hover:border-white/10'
                      }`}
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-1.5">
                          <span
                            className={`text-[10px] font-bold uppercase tracking-wider ${
                              isCurrent
                                ? 'text-indigo-600 dark:text-indigo-300'
                                : isCompleted
                                ? 'text-emerald-600 dark:text-emerald-400'
                                : 'text-slate-400 dark:text-slate-500'
                            }`}
                          >
                            DAY {challenge.day}
                          </span>

                          {/* Status Badge */}
                          <div className="flex items-center gap-1.5">
                            {isCompleted && (
                              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300">
                                <Check className="size-3" /> Completed
                              </span>
                            )}
                            {isCurrent && (
                              <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600 px-2 py-0.5 text-[10px] font-bold text-white shadow-xs dark:bg-indigo-500">
                                <Sparkles className="size-3 fill-current" /> Current
                              </span>
                            )}
                            {isLocked && (
                              <span className="inline-flex items-center gap-1 rounded-full bg-slate-200/70 px-2 py-0.5 text-[10px] font-semibold text-slate-500 dark:bg-white/10 dark:text-slate-400">
                                <Lock className="size-3" /> Locked
                              </span>
                            )}
                          </div>
                        </div>

                        <h4
                          className={`mt-1 text-sm font-bold tracking-tight sm:text-base ${
                            isCurrent
                              ? 'text-indigo-950 dark:text-white'
                              : isCompleted
                              ? 'text-slate-900 dark:text-slate-200'
                              : 'text-slate-500 dark:text-slate-400'
                          }`}
                        >
                          {challenge.title}
                        </h4>

                        <div className="mt-1 flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                          <span className="flex items-center gap-1">
                            <Clock className="size-3.5 text-slate-400" />
                            {challenge.estimatedTime}
                          </span>
                          <span className="text-slate-300 dark:text-slate-600">•</span>
                          <span className="truncate">{challenge.skills[0]}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Indicator for remaining challenges beyond day 5 */}
            <div className="mt-4 flex items-center gap-2 pl-1 text-xs font-medium text-slate-500 dark:text-slate-400 sm:pl-2">
              <span className="flex size-2 rounded-full bg-indigo-400/60 dark:bg-indigo-500/60" />
              <span>+55 more practical challenges ahead in your 60-day journey</span>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN / MOBILE CONNECTED SECTION: TODAY'S TASK SPOTLIGHT */}
        <div className="flex flex-col md:col-span-6 lg:col-span-7">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              TODAY&apos;S TASK SPOTLIGHT
            </h3>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-300">
              <Layers className="size-3.5" />
              {currentJourney.domainName} Track
            </span>
          </div>

          {/* Today's Task Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeChallenge.day}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-indigo-200 bg-white p-5 shadow-lg shadow-indigo-950/5 dark:border-indigo-500/20 dark:bg-white/[0.04] dark:shadow-indigo-950/30 sm:p-7"
            >
              {/* Subtle top background glow decoration */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-indigo-500/10 blur-2xl dark:bg-indigo-500/20"
              />

              <div>
                {/* Header Metadata Pill */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-indigo-600 px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wide text-white dark:bg-indigo-500">
                      DAY {activeChallenge.day}
                    </span>
                    <span className="flex items-center gap-1 rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                      <Clock className="size-3.5 text-indigo-500" />
                      ~{activeChallenge.estimatedTime}
                    </span>
                  </div>

                  {activeChallenge.status === 'current' ? (
                    <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      <span className="size-2 rounded-full bg-emerald-500" />
                      Active Today
                    </span>
                  ) : activeChallenge.status === 'completed' ? (
                    <span className="flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400">
                      <Check className="size-3.5" /> Reviewed
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-xs font-semibold text-slate-400 dark:text-slate-500">
                      <Lock className="size-3.5" /> Previewing Locked Challenge
                    </span>
                  )}
                </div>

                {/* Challenge Title */}
                <h3 className="mt-4 text-xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-2xl lg:text-3xl">
                  {activeChallenge.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300 sm:text-sm">
                  {activeChallenge.description}
                </p>

                {/* Divider */}
                <div className="my-5 border-t border-slate-200/80 dark:border-white/10" />

                {/* WHAT YOU'LL PRACTICE */}
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
                    <BookOpen className="size-4 text-indigo-600 dark:text-indigo-400" />
                    <span>WHAT YOU&apos;LL PRACTICE TODAY</span>
                  </div>

                  <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {activeChallenge.skills.map((skill, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 rounded-xl border border-slate-200/70 bg-slate-50/80 px-3 py-2 text-xs font-semibold text-slate-800 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-200"
                      >
                        <span className="grid size-4 shrink-0 place-items-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-300">
                          <Check className="size-2.5 stroke-[3]" />
                        </span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action CTA Button Container */}
              <div className="mt-6 border-t border-slate-200/80 pt-5 dark:border-white/10">
                {activeChallenge.status === 'locked' ? (
                  <div className="flex flex-col gap-2">
                    <button
                      type="button"
                      disabled
                      className="inline-flex min-h-12 w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-slate-200 px-6 text-sm font-semibold text-slate-400 dark:bg-white/10 dark:text-slate-500"
                    >
                      <Lock className="size-4" />
                      <span>Complete Day {metrics.currentDay} to Unlock</span>
                    </button>
                    <p className="text-center text-[11px] text-slate-500 dark:text-slate-400">
                      Challenges unlock sequentially to build steady consistency.
                    </p>
                  </div>
                ) : (
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleStartChallenge}
                    className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 text-sm font-semibold text-white shadow-lg shadow-indigo-950/20 transition-all duration-200 hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:bg-indigo-500 dark:shadow-indigo-950/40 dark:hover:bg-indigo-400"
                  >
                    <span>Start Today&apos;s Challenge</span>
                    <ArrowRight className="size-4.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </motion.button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default JourneyTimeline
