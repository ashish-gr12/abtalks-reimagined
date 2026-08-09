import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  TrendingUp,
  CheckCircle2,
  GitCommit,
  Share2,
  Flame,
  Award,
  Sparkles,
  Layers,
  AlertTriangle,
  FolderOpen,
} from 'lucide-react'
import { getEffectiveMetrics, getDemoMode, setDemoMode } from '../../lib/journeyState'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

function ProgressConsistency() {
  const [metrics, setMetrics] = useState(getEffectiveMetrics)

  useEffect(() => {
    const handleUpdate = () => {
      setMetrics(getEffectiveMetrics())
    }
    window.addEventListener('abtalks-journey-updated', handleUpdate)
    window.addEventListener('storage', handleUpdate)
    return () => {
      window.removeEventListener('abtalks-journey-updated', handleUpdate)
      window.removeEventListener('storage', handleUpdate)
    }
  }, [])

  const currentDemoMode = getDemoMode() || 'active'

  const {
    currentDay,
    totalDays,
    progressPercentage,
    completedCount,
    remainingDays,
    githubCount,
    githubTotal,
    linkedinCount,
    linkedinTotal,
    currentStreak,
    streakTitle,
    streakMessage,
    streakSubtext,
    isEmptyProfile,
    profileProofTitle,
    profileProofMessage,
    hasMissedDay,
    missedDayText,
    activityGrid,
  } = metrics

  const linkedinMissing = Math.max(0, linkedinTotal - linkedinCount)

  const handleSelectDemo = (mode) => {
    setDemoMode(mode)
    setMetrics(getEffectiveMetrics(mode))
  }

  return (
    <section
      id="dashboard-progress-section"
      aria-label="Your 60-day progress, completion, and consistency streak"
      className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-8 sm:py-12 lg:px-12"
    >
      {/* Conditional Demo Selector for Testing via URL Query Params */}
      {currentDemoMode && (
        <div className="mb-6 flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-slate-50/80 p-2.5 dark:border-white/10 dark:bg-white/[0.03]">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Demo Mode Active:
          </span>
          <button
            type="button"
            onClick={() => handleSelectDemo('fresh')}
            className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${
              currentDemoMode === 'fresh'
                ? 'bg-indigo-600 text-white shadow-xs dark:bg-indigo-500'
                : 'bg-white text-slate-700 hover:bg-slate-100 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10'
            }`}
          >
            🌱 Fresh Student
          </button>

          <button
            type="button"
            onClick={() => handleSelectDemo('missed')}
            className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${
              currentDemoMode === 'missed'
                ? 'bg-indigo-600 text-white shadow-xs dark:bg-indigo-500'
                : 'bg-white text-slate-700 hover:bg-slate-100 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10'
            }`}
          >
            ⚠️ Missed Day
          </button>

          <button
            type="button"
            onClick={() => handleSelectDemo('active')}
            className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${
              currentDemoMode === 'active'
                ? 'bg-indigo-600 text-white shadow-xs dark:bg-indigo-500'
                : 'bg-white text-slate-700 hover:bg-slate-100 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10'
            }`}
          >
            🔥 Active Student
          </button>
        </div>
      )}

      {/* Main Container - Vertical Stack on Mobile 390px, 2-Column Grid on Desktop */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 gap-6 md:grid-cols-12 lg:gap-8"
      >
        {/* LEFT COLUMN: 60-DAY PROGRESS & OVERALL COMPLETION */}
        <div className="flex flex-col gap-6 md:col-span-6 lg:col-span-6">
          {/* 1. YOUR 60-DAY PROGRESS CARD */}
          <motion.div
            variants={itemVariants}
            className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.035] sm:p-6"
          >
            <div>
              <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-indigo-600 dark:text-indigo-300 sm:text-[11px]">
                <TrendingUp className="size-3.5" />
                YOUR 60-DAY PROGRESS
              </div>
              <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                Where am I in the 60 days?
              </p>

              {/* Main Progress Numbers Hierarchy */}
              <div className="mt-4 flex items-baseline justify-between gap-2">
                <div>
                  <span className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                    DAY {currentDay}
                  </span>
                  <span className="ml-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 sm:text-sm">
                    of {totalDays}
                  </span>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/80 px-3 py-1.5 text-right dark:border-indigo-500/20 dark:bg-indigo-500/10">
                  <span className="text-lg font-black text-indigo-600 dark:text-indigo-300 sm:text-xl">
                    {progressPercentage}%
                  </span>
                  <span className="ml-1 text-[10px] font-bold text-indigo-500 dark:text-indigo-400">
                    Done
                  </span>
                </div>
              </div>

              {/* Animated Progress Bar */}
              <div className="mt-4">
                <div className="relative h-3.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercentage}%` }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative h-full rounded-full bg-gradient-to-r from-indigo-600 to-indigo-400 shadow-sm dark:from-indigo-500 dark:to-indigo-300"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                    />
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Bottom Metrics Label */}
            <div className="mt-4 flex items-center justify-between text-xs font-semibold text-slate-600 dark:text-slate-300">
              <span className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                {completedCount} days completed
              </span>
              <span className="text-slate-400 dark:text-slate-500">•</span>
              <span className="text-slate-500 dark:text-slate-400">
                {remainingDays} days remaining
              </span>
            </div>
          </motion.div>

          {/* 2. OVERALL COMPLETION & EMPTY PROFILE STATE CARD */}
          <motion.div
            variants={itemVariants}
            className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.035] sm:p-6"
          >
            <div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-indigo-600 dark:text-indigo-300 sm:text-[11px]">
                    <Layers className="size-3.5" />
                    OVERALL COMPLETION
                  </div>
                  <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                    How much of my work have I actually finished?
                  </p>
                </div>
                <div className="flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-800 dark:bg-white/10 dark:text-white">
                  <span>Overall</span>
                  <span className="text-indigo-600 dark:text-indigo-300">
                    {progressPercentage}%
                  </span>
                </div>
              </div>

              {isEmptyProfile ? (
                /* EMPTY PROFILE / PROOF OF WORK STATE */
                <div className="mt-5 flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50/60 p-6 text-center dark:border-white/15 dark:bg-white/[0.02]">
                  <span className="grid size-12 place-items-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-300">
                    <FolderOpen className="size-6" />
                  </span>
                  <h4 className="mt-3 text-sm font-bold text-slate-900 dark:text-white sm:text-base">
                    {profileProofTitle}
                  </h4>
                  <p className="mt-1 max-w-xs text-xs text-slate-600 dark:text-slate-400">
                    {profileProofMessage}
                  </p>
                  <a
                    href="#your-journey-section"
                    className="mt-4 inline-flex min-h-10 items-center justify-center rounded-xl bg-indigo-600 px-4 text-xs font-bold text-white shadow-xs hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400"
                  >
                    Start Day 1 Challenge
                  </a>
                </div>
              ) : (
                /* POPULATED PROOF OF WORK STATE */
                <>
                  <div className="mt-3.5 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    <span>BUILD</span>
                    <span>→</span>
                    <span>SUBMIT</span>
                    <span>→</span>
                    <span>SHOWCASE</span>
                  </div>

                  <div className="mt-3 flex flex-col gap-2.5">
                    {/* 1. Challenges */}
                    <div className="flex items-center justify-between rounded-xl border border-slate-200/70 bg-slate-50/80 p-3 dark:border-white/5 dark:bg-white/[0.025]">
                      <div className="flex items-center gap-2.5">
                        <span className="grid size-7 place-items-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-300">
                          <CheckCircle2 className="size-4" />
                        </span>
                        <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                          Challenges
                        </span>
                      </div>
                      <span className="text-xs font-extrabold text-slate-900 dark:text-white">
                        {completedCount} / {totalDays}
                      </span>
                    </div>

                    {/* 2. GitHub proof */}
                    <div className="flex items-center justify-between rounded-xl border border-slate-200/70 bg-slate-50/80 p-3 dark:border-white/5 dark:bg-white/[0.025]">
                      <div className="flex items-center gap-2.5">
                        <span className="grid size-7 place-items-center rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300">
                          <GitCommit className="size-4" />
                        </span>
                        <div>
                          <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                            GitHub proof
                          </span>
                          {githubCount > 0 && (
                            <span className="ml-2 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                              ✓ Submitted
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="text-xs font-extrabold text-slate-900 dark:text-white">
                        {githubCount} / {githubTotal}
                      </span>
                    </div>

                    {/* 3. LinkedIn proof */}
                    <div className="flex items-center justify-between rounded-xl border border-slate-200/70 bg-slate-50/80 p-3 dark:border-white/5 dark:bg-white/[0.025]">
                      <div className="flex items-center gap-2.5">
                        <span className="grid size-7 place-items-center rounded-lg bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-300">
                          <Share2 className="size-4" />
                        </span>
                        <div>
                          <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                            LinkedIn proof
                          </span>
                          {linkedinMissing > 0 && (
                            <span className="ml-2 text-[10px] font-medium text-slate-500 dark:text-slate-400">
                              ({linkedinMissing} pending showcase)
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="text-xs font-extrabold text-slate-900 dark:text-white">
                        {linkedinCount} / {linkedinTotal}
                      </span>
                    </div>
                  </div>

                  {/* Supporting proof message */}
                  <div className="mt-4 rounded-lg bg-indigo-50/60 px-3 py-2 text-center text-[11px] font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
                    💡 {profileProofMessage}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: CONSISTENCY, STREAK & MISSED DAY RECOVERY */}
        <div className="flex flex-col md:col-span-6 lg:col-span-6">
          <motion.div
            variants={itemVariants}
            className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.035] sm:p-6"
          >
            <div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-indigo-600 dark:text-indigo-300 sm:text-[11px]">
                    <Flame className="size-3.5 fill-amber-500 text-amber-500" />
                    YOUR CONSISTENCY
                  </div>
                  <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                    Keep showing up. Every day adds to your journey.
                  </p>
                </div>
              </div>

              {/* MISSED DAY RECOVERY BANNER */}
              {hasMissedDay && (
                <div className="mt-4 flex items-center gap-2.5 rounded-xl border border-amber-300/80 bg-amber-50/90 p-3.5 dark:border-amber-500/30 dark:bg-amber-500/15">
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-amber-500 text-slate-950">
                    <AlertTriangle className="size-4" />
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-amber-950 dark:text-amber-200">
                      {missedDayText}
                    </h4>
                    <p className="text-[11px] text-amber-800 dark:text-amber-300">
                      Missed days happen. Keep building today to restart your momentum!
                    </p>
                  </div>
                </div>
              )}

              {/* Prominent Streak Badge */}
              <div className="mt-4 flex items-center justify-between rounded-xl border border-amber-200/80 bg-amber-50/70 p-3.5 dark:border-amber-500/20 dark:bg-amber-500/10">
                <div className="flex items-center gap-2.5">
                  <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-md shadow-orange-500/20">
                    <Flame className="size-6 fill-white" />
                  </span>
                  <div>
                    <h4 className="text-base font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-lg">
                      {streakTitle}
                    </h4>
                    <p className="text-xs font-medium text-slate-600 dark:text-slate-300">
                      {streakMessage}
                    </p>
                  </div>
                </div>
              </div>

              {/* Activity Grid Section */}
              <div className="mt-5">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                  <span>RECENT ACTIVITY (LAST 35 DAYS)</span>
                  <span className="text-[10px] font-semibold text-slate-400">May - Jun</span>
                </div>

                {/* Grid Container (5 columns x 7 rows) */}
                <div className="mt-3 flex justify-center">
                  <div className="grid grid-cols-7 gap-2">
                    {activityGrid.map((item, index) => {
                      const isCompleted = item.status === 'completed'
                      const isMissed = item.status === 'missed'

                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.2, delay: index * 0.01 }}
                          title={item.label}
                          className={`relative size-8 rounded-lg transition-transform hover:scale-110 sm:size-9 ${
                            isCompleted
                              ? 'bg-indigo-600 text-white shadow-xs dark:bg-indigo-500'
                              : isMissed
                              ? 'border-2 border-dashed border-amber-400 bg-amber-50/70 text-amber-700 dark:border-amber-400/50 dark:bg-amber-500/15 dark:text-amber-300'
                              : 'border border-slate-200 bg-slate-100/60 dark:border-white/10 dark:bg-white/5'
                          } flex items-center justify-center text-[10px] font-extrabold`}
                        >
                          {isCompleted ? (
                            <span>✓</span>
                          ) : isMissed ? (
                            <span className="text-[10px] font-bold">!</span>
                          ) : (
                            <span className="text-[9px] text-slate-400 dark:text-slate-600">
                              {item.dayNumber > 0 ? item.dayNumber : ''}
                            </span>
                          )}

                          {item.isToday && (
                            <span
                              aria-hidden="true"
                              className="absolute -top-1 -right-1 size-2.5 rounded-full bg-emerald-400 ring-2 ring-white dark:ring-slate-900"
                            />
                          )}
                        </motion.div>
                      )
                    })}
                  </div>
                </div>

                {/* Grid Legend */}
                <div className="mt-4 flex items-center justify-center gap-4 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="size-3 rounded-md bg-indigo-600 dark:bg-indigo-500" />
                    Completed
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="size-3 rounded-md border-2 border-dashed border-amber-400 bg-amber-50 dark:border-amber-400/50 dark:bg-amber-500/10" />
                    Missed
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="size-3 rounded-md border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-white/5" />
                    Upcoming
                  </span>
                </div>
              </div>
            </div>

            {/* Subtext Card */}
            <div className="mt-5 flex items-center justify-between rounded-xl border border-indigo-100 bg-indigo-50/50 p-3.5 dark:border-indigo-500/15 dark:bg-indigo-500/5">
              <div className="flex items-center gap-2">
                <span className="grid size-7 place-items-center rounded-lg bg-indigo-600 text-white dark:bg-indigo-500">
                  <Award className="size-4" />
                </span>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">
                    {streakSubtext}
                  </p>
                </div>
              </div>
              <Sparkles className="size-4 text-amber-500" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default ProgressConsistency
