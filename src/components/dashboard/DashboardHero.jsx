import { motion } from 'framer-motion'

const reveal = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
}

function DashboardHero() {
  return (
    <section className="relative isolate mx-auto w-full max-w-7xl px-4 pt-4 sm:px-8 sm:pt-6 lg:px-12 lg:pt-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[280px] bg-[radial-gradient(ellipse_at_50%_0%,rgba(99,102,241,0.12),transparent_65%)] dark:bg-[radial-gradient(ellipse_at_50%_0%,rgba(99,102,241,0.18),transparent_65%)]"
      />
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.08 }}
        className="mx-auto max-w-2xl text-center"
      >
        <motion.p
          variants={reveal}
          transition={{ duration: 0.4 }}
          className="text-[10px] font-bold uppercase tracking-[0.16em] text-indigo-600 dark:text-indigo-300 sm:text-[11px]"
        >
          ABTALKS COMMUNITY
        </motion.p>
        <motion.h1
          variants={reveal}
          transition={{ duration: 0.42 }}
          className="mt-1.5 text-2xl font-bold leading-tight tracking-[-0.035em] text-slate-950 dark:text-white sm:text-4xl lg:text-5xl"
        >
          Join India&apos;s coding community.
        </motion.h1>
        <motion.h2
          variants={reveal}
          transition={{ duration: 0.44 }}
          className="mt-1 text-lg font-bold tracking-tight text-indigo-600 dark:text-indigo-300 sm:text-2xl"
        >
          Learn. Build. Showcase. Get hired.
        </motion.h2>
        <motion.p
          variants={reveal}
          transition={{ duration: 0.46 }}
          className="mx-auto mt-2.5 max-w-lg text-xs leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base"
        >
          Build real projects, stay consistent, and turn your daily progress into visible proof of what you can do.
        </motion.p>
      </motion.div>
    </section>
  )
}

export default DashboardHero
