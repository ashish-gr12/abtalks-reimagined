import { motion, useReducedMotion } from 'framer-motion'
import { FolderGit2, ShieldCheck, TrendingUp, Lock, ArrowRight } from 'lucide-react'

const trustCards = [
  {
    id: 'real-work',
    title: 'Real Work, Not Just Lessons',
    description: 'Build practical projects through daily challenges instead of only consuming tutorials.',
    icon: FolderGit2,
    accent: 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/15',
  },
  {
    id: 'work-stays-yours',
    title: 'Your Work Stays Yours',
    description: 'Your projects, repositories, and proof of work remain yours to build and showcase.',
    icon: ShieldCheck,
    accent: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/15',
  },
  {
    id: 'progress-you-can-see',
    title: 'Progress You Can See',
    description: 'Track your challenges, completion, streak, and proof of work throughout your journey.',
    icon: TrendingUp,
    accent: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/15',
  },
  {
    id: 'no-shortcuts',
    title: 'No Shortcuts',
    description: 'Challenges unlock progressively so you build consistently instead of simply skipping ahead.',
    icon: Lock,
    accent: 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/15',
  },
]

const cardContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

const cardItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
}

function TrustSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="trust" className="border-t border-slate-200 px-4 py-14 dark:border-white/10 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <motion.header
          initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-indigo-600 dark:text-indigo-300">
            TRUST & TRANSPARENCY
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-[-0.04em] text-slate-950 dark:text-white sm:text-4xl">
            Built for students. Designed for real progress.
          </h2>
          <p className="mt-2.5 text-xs leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
            Your skills become more valuable when you can show what you&apos;ve built.
          </p>
        </motion.header>

        {/* 4 Trust Cards - Stacked 1 col at 390px, 2 col tablet, 4 col desktop */}
        <motion.div
          className="mt-8 grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:mt-10 sm:gap-4"
          initial={shouldReduceMotion ? false : 'hidden'}
          variants={cardContainerVariants}
          viewport={{ once: true, amount: 0.15 }}
          whileInView={shouldReduceMotion ? undefined : 'visible'}
        >
          {trustCards.map((card) => {
            const Icon = card.icon
            return (
              <motion.article
                key={card.id}
                variants={cardItemVariants}
                whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-xs transition-all duration-200 hover:border-indigo-300 hover:shadow-md hover:shadow-indigo-950/5 dark:border-white/8 dark:bg-white/[0.025] dark:shadow-none dark:hover:border-indigo-400/30 sm:p-5"
              >
                <div>
                  <motion.div
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.08 }}
                    transition={{ duration: 0.18 }}
                    className={`inline-grid size-9 place-items-center rounded-xl transition-colors sm:size-10 ${card.accent}`}
                  >
                    <Icon className="size-4 sm:size-5" aria-hidden="true" />
                  </motion.div>
                  <h3 className="mt-3 text-sm font-semibold text-slate-950 dark:text-white sm:text-base">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-400 sm:text-sm">
                    {card.description}
                  </p>
                </div>
              </motion.article>
            )
          })}
        </motion.div>

        {/* Trust Visual Motif: BUILD → PROVE → SHOWCASE */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 rounded-2xl border border-indigo-100 bg-indigo-50/70 p-4 text-center dark:border-indigo-500/15 dark:bg-indigo-500/[0.05] sm:p-6"
        >
          <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-indigo-700 dark:text-indigo-300 sm:text-[11px]">
            THE ABTALKS PHILOSOPHY
          </p>

          <div className="mt-3 inline-flex flex-wrap items-center justify-center gap-2 text-xs font-bold text-slate-900 dark:text-white sm:gap-3 sm:text-sm">
            <span className="rounded-lg bg-white px-3 py-1.5 shadow-2xs border border-slate-200 dark:border-white/10 dark:bg-white/10">
              BUILD
            </span>
            <ArrowRight className="size-3.5 text-slate-400 shrink-0" aria-hidden="true" />
            <span className="rounded-lg bg-white px-3 py-1.5 shadow-2xs border border-slate-200 dark:border-white/10 dark:bg-white/10">
              PROVE
            </span>
            <ArrowRight className="size-3.5 text-slate-400 shrink-0" aria-hidden="true" />
            <span className="rounded-lg bg-indigo-600 px-3 py-1.5 text-white shadow-xs dark:bg-indigo-500">
              SHOWCASE
            </span>
          </div>

          {/* Trust Statement */}
          <p className="mt-4 text-xs font-bold tracking-tight text-slate-950 dark:text-slate-100 sm:text-base">
            “Your progress should be something you can prove — not just something you can say.”
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default TrustSection
