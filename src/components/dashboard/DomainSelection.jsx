import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  Lock,
  Edit3,
  Sparkles,
  Layers,
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { domainsData } from '../../data/domains'
import {
  getJourneyState,
  selectDomain,
  unlockDomainSelection,
  startJourney,
} from '../../lib/journeyState'

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

const cardVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

function DomainSelection() {
  const navigate = useNavigate()
  const [journeyState, setJourneyState] = useState(getJourneyState)

  useEffect(() => {
    const handleUpdate = () => {
      setJourneyState(getJourneyState())
    }
    window.addEventListener('abtalks-journey-updated', handleUpdate)
    window.addEventListener('storage', handleUpdate)
    return () => {
      window.removeEventListener('abtalks-journey-updated', handleUpdate)
      window.removeEventListener('storage', handleUpdate)
    }
  }, [])

  const { selectedDomain, isLocked, journeyStarted } = journeyState
  const selectedDomainObj = domainsData.find((d) => d.id === selectedDomain)
  const isCurrentJourneyStarted = Boolean(
    selectedDomain && journeyStarted && journeyStarted[selectedDomain]
  )

  const handleCardClick = (domainId) => {
    // If domain is locked and user clicks on a domain, don't change unless unlocked
    if (isLocked) return
    selectDomain(domainId)
  }

  const handleEditDomain = () => {
    unlockDomainSelection()
  }

  const handleStartJourneyClick = () => {
    if (!selectedDomain) return
    startJourney(selectedDomain)
  }

  const handleStartChallengeClick = () => {
    navigate('/day/12')
  }

  return (
    <section
      aria-label="Pick your domain for the 60-day challenge"
      className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-8 sm:py-10 lg:px-12"
    >
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-xl text-center"
      >
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-indigo-600 dark:text-indigo-300 sm:text-[11px]">
          {isLocked && selectedDomain ? 'YOUR 60-DAY PATH' : 'PICK YOUR DOMAIN'}
        </p>
        <h2 className="mt-1.5 text-xl font-bold leading-tight tracking-[-0.035em] text-slate-950 dark:text-white sm:text-3xl lg:text-4xl">
          {isLocked && selectedDomainObj ? (
            <span className="inline-flex flex-wrap items-center justify-center gap-2">
              Your 60-day path is set to {selectedDomainObj.name}
              <Lock className="inline-block size-5 text-indigo-600 dark:text-indigo-400" />
            </span>
          ) : (
            'Choose what you want to build for the next 60 days.'
          )}
        </h2>
        <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400 sm:text-sm">
          {isLocked && selectedDomainObj
            ? 'Your current challenge path is focused on this domain. You can click Edit Domain if you wish to switch tracks.'
            : 'Pick one track for your journey. Every challenge will help you learn by building and turn your progress into visible proof of work.'}
        </p>
      </motion.div>

      {/* Domain Cards Grid (Stacked on 390px mobile, 3-columns on desktop) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mt-6 grid grid-cols-1 gap-3.5 sm:gap-5 md:grid-cols-3 lg:gap-6"
      >
        {domainsData.map((domain) => {
          const isSelected = selectedDomain === domain.id
          const Icon = domain.icon
          const isDisabled = isLocked && !isSelected

          return (
            <motion.div
              key={domain.id}
              variants={cardVariants}
              whileHover={!isDisabled ? { y: -2, scale: 1.01 } : {}}
              whileTap={!isDisabled ? { scale: 0.98 } : {}}
              onClick={() => handleCardClick(domain.id)}
              onKeyDown={(e) => {
                if (!isDisabled && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault()
                  handleCardClick(domain.id)
                }
              }}
              role="button"
              tabIndex={isDisabled ? -1 : 0}
              aria-pressed={isSelected}
              aria-disabled={isDisabled}
              className={`group relative flex w-full flex-col justify-between overflow-hidden rounded-2xl border p-4.5 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 sm:p-6 ${
                isSelected
                  ? 'border-indigo-500 bg-indigo-50/80 shadow-md shadow-indigo-950/5 ring-2 ring-indigo-500/20 dark:border-indigo-400 dark:bg-indigo-500/15 dark:shadow-indigo-950/30'
                  : isDisabled
                  ? 'cursor-not-allowed border-slate-200/60 bg-slate-50/50 opacity-60 dark:border-white/5 dark:bg-white/[0.015]'
                  : 'cursor-pointer border-slate-200/90 bg-white shadow-sm hover:border-indigo-300 hover:bg-slate-50/80 dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-white/20 dark:hover:bg-white/[0.06]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`grid size-10 place-items-center rounded-xl transition-transform duration-200 ${
                      isSelected
                        ? 'bg-indigo-600 text-white dark:bg-indigo-500'
                        : 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-300'
                    }`}
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full border border-slate-200 bg-slate-100/80 px-2 py-0.5 text-[9px] font-semibold text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 sm:text-[10px]">
                      {domain.tag}
                    </span>
                    {isSelected ? (
                      <span className="flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-300">
                        {isLocked ? (
                          <>
                            <Lock className="size-3" /> Path Locked
                          </>
                        ) : (
                          <>
                            <CheckCircle2 className="size-3.5" /> Selected
                          </>
                        )}
                      </span>
                    ) : null}
                  </div>
                </div>

                <h3 className="mt-3 text-base font-bold tracking-tight text-slate-950 dark:text-white sm:text-xl">
                  {domain.name}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300 sm:text-sm">
                  {domain.description}
                </p>
              </div>

              <div className="mt-3.5 border-t border-slate-200/80 pt-2.5 dark:border-white/8">
                <p className="text-[11px] font-medium text-slate-500 transition-colors dark:text-slate-400">
                  {domain.hoverDetail}
                </p>
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Action Flow Container */}
      <div className="mt-8 flex flex-col items-center justify-center gap-4 text-center">
        <AnimatePresence mode="wait">
          {/* State 1: Domain selected & locked, but journey not started yet */}
          {selectedDomain && isLocked && !isCurrentJourneyStarted && (
            <motion.div
              key="start-journey-flow"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="flex w-full max-w-md flex-col items-center gap-3.5 rounded-2xl border border-indigo-200 bg-indigo-50/90 p-5 shadow-md shadow-indigo-950/5 dark:border-indigo-400/20 dark:bg-indigo-500/10 dark:shadow-indigo-950/30"
            >
              <div className="flex items-center gap-2">
                <span className="grid size-6 place-items-center rounded-full bg-indigo-600 text-white dark:bg-indigo-500">
                  <Layers className="size-3.5" />
                </span>
                <p className="text-sm font-bold tracking-tight text-slate-950 dark:text-white sm:text-base">
                  Your 60-day path is set to {selectedDomainObj?.name}
                </p>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300">
                Click <strong>Start Your Journey</strong> to activate Day 1 of your 60-day challenge.
              </p>

              <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
                <motion.button
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleEditDomain}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 text-xs font-semibold text-slate-700 shadow-sm hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-indigo-500 dark:border-white/15 dark:bg-white/10 dark:text-slate-200 dark:hover:bg-white/15"
                >
                  <Edit3 className="size-3.5" />
                  <span>Edit Domain</span>
                </motion.button>

                <motion.button
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleStartJourneyClick}
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 text-xs font-semibold text-white shadow-lg shadow-indigo-950/20 hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-indigo-500 dark:bg-indigo-500 dark:shadow-indigo-950/40 dark:hover:bg-indigo-400"
                >
                  <span>Start Your Journey</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* State 2: Domain selected & locked, AND journey activated / started */}
          {selectedDomain && isLocked && isCurrentJourneyStarted && (
            <motion.div
              key="journey-in-progress-flow"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="flex w-full max-w-md flex-col items-center gap-3.5 rounded-2xl border border-emerald-200 bg-emerald-50/80 p-5 shadow-md shadow-emerald-950/5 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:shadow-emerald-950/30"
            >
              <div className="flex items-center gap-2">
                <span className="grid size-6 place-items-center rounded-full bg-amber-400 text-amber-950">
                  <Sparkles className="size-3.5" fill="currentColor" />
                </span>
                <p className="text-sm font-bold tracking-tight text-slate-950 dark:text-white sm:text-base">
                  Your journey starts today.
                </p>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300">
                You are currently on the{' '}
                <strong className="text-indigo-600 dark:text-indigo-300">
                  {selectedDomainObj?.name}
                </strong>{' '}
                track. Complete today’s challenge to build your streak!
              </p>

              <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
                <motion.button
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleEditDomain}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 text-xs font-semibold text-slate-700 shadow-sm hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-indigo-500 dark:border-white/15 dark:bg-white/10 dark:text-slate-200 dark:hover:bg-white/15"
                >
                  <Edit3 className="size-3.5" />
                  <span>Edit Domain</span>
                </motion.button>

                <motion.button
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleStartChallengeClick}
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 text-xs font-semibold text-white shadow-lg shadow-indigo-950/25 hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-indigo-500 dark:bg-indigo-500 dark:shadow-indigo-950/45 dark:hover:bg-indigo-400"
                >
                  <span>Start Your Day 1</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* State 3: User clicked Edit Domain (isLocked is false) */}
          {selectedDomain && !isLocked && (
            <motion.div
              key="editing-domain"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="flex w-full max-w-sm flex-col items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300"
            >
              <p>
                Click any domain card above to lock your new 60-day track.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default DomainSelection
