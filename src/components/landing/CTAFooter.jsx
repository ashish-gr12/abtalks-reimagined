import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

function CTAFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-100/50 px-5 py-12 dark:border-white/10 dark:bg-[#06060c] sm:px-8 sm:py-16 lg:px-12">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-2xl font-bold tracking-[-0.035em] text-slate-950 dark:text-white sm:text-3xl">
          Ready to build your 60-day streak?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-600 dark:text-slate-400">
          Join Indian college students in learning, building daily projects, and proving work through GitHub and LinkedIn.
        </p>
        <div className="mt-6 flex justify-center">
          <motion.a
            href="/dashboard"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 text-sm font-semibold text-white shadow-lg shadow-indigo-950/20 hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:bg-indigo-500 dark:shadow-indigo-950/40 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-300"
          >
            Start Your 60 Days <ArrowRight className="size-4" aria-hidden="true" />
          </motion.a>
        </div>
        <div className="mt-12 border-t border-slate-200/80 pt-6 dark:border-white/8">
          <p className="text-xs text-slate-500 dark:text-slate-500">
            © 2026 ABTalks. Reimagined for Indian College Students. Mobile-first 60-Day Challenge.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default CTAFooter
