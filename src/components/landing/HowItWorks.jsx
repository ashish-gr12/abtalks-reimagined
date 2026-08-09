import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, Check, ChevronRight, Code2, Flame, GitCommit, Lock, Send, Unlock } from 'lucide-react'

const steps = [
  ['01', 'Get your challenge', 'Every day gives you a focused task to build.', Code2],
  ['02', 'Build', 'Create something real and apply what you learn.', Code2],
  ['03', 'Submit proof', 'Share your GitHub work and LinkedIn post.', Send],
  ['04', 'Complete', 'Both proofs submitted means today counts.', Check],
  ['05', 'Unlock next', 'Completing today opens the next challenge.', Unlock],
]

const stepContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const stepCardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
}

function ProgressBar({ shouldReduceMotion }) {
  return (
    <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
      <motion.div
        className={`h-full rounded-full bg-indigo-600 dark:bg-indigo-400 ${shouldReduceMotion ? 'w-1/5' : ''}`}
        initial={shouldReduceMotion ? false : { width: 0 }}
        whileInView={shouldReduceMotion ? undefined : { width: '20%' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
      />
    </div>
  )
}

function HowItWorks() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="how-it-works" className="border-t border-slate-200 px-5 py-16 dark:border-white/10 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.header
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-[-0.045em] text-slate-950 dark:text-white sm:text-5xl">HOW IT WORKS</h2>
          <p className="mt-2 text-xl font-semibold tracking-[-0.025em] text-indigo-600 dark:text-indigo-300 sm:text-2xl">60 days. One consistent journey.</p>
          <p className="mt-3 text-[15px] leading-6 text-slate-600 dark:text-slate-400 sm:text-base">Build something every day, prove your work, and keep moving forward one challenge at a time.</p>
        </motion.header>

        {/* 5-Step Connected Progression Grid */}
        <motion.div
          className="relative mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5"
          initial={shouldReduceMotion ? false : 'hidden'}
          variants={stepContainerVariants}
          viewport={{ once: true, amount: 0.2 }}
          whileInView={shouldReduceMotion ? undefined : 'visible'}
        >
          {steps.map(([number, title, description, Icon], index) => (
            <div key={number} className="relative flex flex-col">
              <motion.article
                variants={stepCardVariants}
                whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="group relative flex flex-1 flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-indigo-300 hover:shadow-md dark:border-white/8 dark:bg-white/[0.025] dark:shadow-none dark:hover:border-indigo-400/30"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.14em] text-indigo-600 dark:text-indigo-300">
                      <span>{number}</span>
                      {index < steps.length - 1 && (
                        <span className="text-slate-300 dark:text-white/20 sm:hidden">→</span>
                      )}
                    </span>
                    <span className="grid size-8 place-items-center rounded-lg bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white dark:bg-indigo-500/15 dark:text-indigo-300 dark:group-hover:bg-indigo-500 dark:group-hover:text-white">
                      <Icon aria-hidden="true" className="size-4" />
                    </span>
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-slate-950 dark:text-white">{title}</h3>
                  <p className="mt-1.5 text-xs leading-5 text-slate-600 dark:text-slate-400">{description}</p>
                </div>

                {/* Subtle Step Visual Indicator line */}
                <div className="mt-4 flex items-center gap-1.5">
                  <div className={`h-1 flex-1 rounded-full transition-colors ${index === 0 ? 'bg-indigo-500' : 'bg-slate-200 dark:bg-white/10 group-hover:bg-indigo-400/50'}`} />
                  {index < steps.length - 1 && (
                    <ChevronRight aria-hidden="true" className="hidden size-3.5 shrink-0 text-slate-300 dark:text-white/20 lg:block" />
                  )}
                </div>
              </motion.article>
            </div>
          ))}
        </motion.div>

        {/* Detailed Breakdown Sections */}
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/8 dark:bg-white/[0.025]">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-amber-100 text-amber-700 dark:bg-amber-400/15 dark:text-amber-300">
                <Flame aria-hidden="true" className="size-5" fill="currentColor" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-slate-950 dark:text-white">Your streak keeps you moving.</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Every completed challenge adds another day to your learning streak.</p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-4 gap-2" aria-label="Example of a 12-day streak">
              {[9, 10, 11, 12].map((day) => (
                <div key={day} className="rounded-xl border border-emerald-200 bg-white px-2 py-2.5 text-center dark:border-emerald-400/20 dark:bg-emerald-400/[0.06]">
                  <p className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">Day {day}</p>
                  <Check aria-label="Complete" className="mx-auto mt-1 size-4 text-emerald-600 dark:text-emerald-300" strokeWidth={3} />
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-5 text-slate-600 dark:text-slate-400">A streak measures consecutive completed challenge days—not how far through the whole journey you are.</p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/8 dark:bg-white/[0.025]">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-indigo-600 dark:text-indigo-300">Overall progress</p>
            <h3 className="mt-2 text-base font-semibold text-slate-950 dark:text-white">Progress shows how far you&apos;ve moved.</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Completion is the number of successful challenge days out of all 60.</p>
            <div className="mt-5 rounded-xl border border-indigo-200 bg-white p-4 dark:border-indigo-400/20 dark:bg-indigo-400/[0.06]">
              <div className="flex items-end justify-between">
                <p className="text-sm font-semibold text-slate-950 dark:text-white">Day 12 <span className="font-medium text-slate-500 dark:text-slate-400">/ 60</span></p>
                <p className="text-xl font-bold text-indigo-600 dark:text-indigo-300">20%</p>
              </div>
              <ProgressBar shouldReduceMotion={shouldReduceMotion} />
              <p className="mt-3 text-xs font-medium text-slate-600 dark:text-slate-400">12 / 60 completed</p>
            </div>
            <p className="mt-4 text-xs leading-5 text-slate-600 dark:text-slate-400">
              <span className="font-semibold text-slate-800 dark:text-slate-200">Streak</span> is consistency. <span className="font-semibold text-slate-800 dark:text-slate-200">Progress</span> is how far you&apos;ve come.
            </p>
          </article>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-2xl border border-indigo-200 bg-indigo-50 p-5 dark:border-indigo-400/20 dark:bg-indigo-400/[0.07]">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-indigo-700 dark:text-indigo-300">Focused progression</p>
            <h3 className="mt-2 text-xl font-bold tracking-[-0.025em] text-slate-950 dark:text-white">One challenge at a time.</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">Each challenge builds the habit of finishing what you start. The next one stays locked until the current challenge is complete.</p>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">This keeps the journey focused, prevents rushing ahead, and makes every completed day meaningful—not perfect.</p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/8 dark:bg-white/[0.025]">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">The unlock system</p>
            <div className="mt-4 space-y-2.5 text-sm">
              <div className="rounded-lg bg-indigo-50 px-3 py-2 font-semibold text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-200">Day 12 · Current challenge</div>
              <div className="flex items-center gap-2 px-1 text-xs text-emerald-600 dark:text-emerald-300"><GitCommit aria-hidden="true" className="size-3.5" /> GitHub submitted <Check aria-hidden="true" className="size-3" strokeWidth={3} /></div>
              <div className="flex items-center gap-2 px-1 text-xs text-emerald-600 dark:text-emerald-300"><Send aria-hidden="true" className="size-3.5" /> LinkedIn submitted <Check aria-hidden="true" className="size-3" strokeWidth={3} /></div>
              <div className="flex justify-center"><ArrowDown aria-hidden="true" className="size-4 text-slate-400" /></div>
              <div className="flex items-center justify-between rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/[0.06] dark:text-emerald-300"><span>Challenge complete</span><span className="flex items-center gap-1"><Lock aria-hidden="true" className="size-3" /><ArrowDown aria-hidden="true" className="size-3" /><Unlock aria-hidden="true" className="size-3" /></span></div>
              <div className="rounded-lg bg-slate-100 px-3 py-2 text-center text-xs font-semibold text-slate-700 dark:bg-white/[0.07] dark:text-slate-200">Day 13 unlocked</div>
            </div>
          </article>
        </div>

        <article className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/8 dark:bg-white/[0.025]">
          <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-indigo-600 dark:text-indigo-300">How to complete a challenge</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-950 dark:text-white">Build it. Prove it. Complete it.</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">A day only counts when you finish its task and submit both pieces of proof of work.</p>
            </div>
            <ul className="grid grid-cols-3 gap-2 text-center text-[11px] font-semibold">
              <li className="rounded-xl bg-slate-100 px-3 py-3 text-slate-700 dark:bg-white/[0.07] dark:text-slate-200"><Check aria-hidden="true" className="mx-auto mb-1 size-4 text-emerald-600 dark:text-emerald-300" strokeWidth={3} />Build</li>
              <li className="rounded-xl bg-slate-100 px-3 py-3 text-slate-700 dark:bg-white/[0.07] dark:text-slate-200"><Check aria-hidden="true" className="mx-auto mb-1 size-4 text-emerald-600 dark:text-emerald-300" strokeWidth={3} />GitHub</li>
              <li className="rounded-xl bg-slate-100 px-3 py-3 text-slate-700 dark:bg-white/[0.07] dark:text-slate-200"><Check aria-hidden="true" className="mx-auto mb-1 size-4 text-emerald-600 dark:text-emerald-300" strokeWidth={3} />LinkedIn</li>
            </ul>
          </div>
        </article>
        <div className="mt-12 rounded-2xl bg-slate-950 px-5 py-8 text-center text-white dark:bg-white/[0.07] sm:px-8">
          <p className="text-2xl font-bold tracking-[-0.035em]">Consistency beats intensity.</p>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-300">You don&apos;t need to build something huge every day. Keep showing up, building, and proving your progress.</p>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
