import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Check,
  ChevronRight,
  Code2,
  GitCommit,
  Send,
  Sparkles,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../layout/Navbar'
import useTheme from '../../hooks/useTheme'
import HowItWorks from './HowItWorks'
import FAQ from './FAQ'
import Footer from './Footer'
import { getJourneyState } from '../../lib/journeyState'

const reveal = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

function ProofRow({ icon: Icon, label }) {
  return (
    <li className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2.5 dark:border-white/8 dark:bg-white/[0.035]">
      <span className="flex min-w-0 items-center gap-2.5 text-xs font-medium text-slate-700 dark:text-slate-200">
        <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-300"><Icon aria-hidden="true" className="size-3.5" /></span>
        <span className="truncate">{label}</span>
      </span>
      <span className="ml-3 inline-flex shrink-0 items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-300"><Check aria-hidden="true" className="size-3" strokeWidth={3} /> Submitted</span>
    </li>
  )
}

function ChallengePreview() {
  return (
    <motion.aside aria-label="Preview of a student's 60-day coding challenge dashboard" className="relative mx-auto w-full max-w-[350px]" initial={{ opacity: 0, y: 24, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} whileHover={{ y: -4 }}>
      <div aria-hidden="true" className="absolute -inset-x-4 top-12 h-3/4 rounded-full bg-indigo-400/20 blur-3xl dark:bg-indigo-500/20" />
      <div className="relative overflow-hidden rounded-[26px] border border-slate-200 bg-slate-50 p-3 shadow-2xl shadow-slate-900/10 dark:border-white/10 dark:bg-[#151526] dark:shadow-black/35">
        <div className="flex items-center justify-between border-b border-slate-200 px-1 pb-3 dark:border-white/8">
          <span className="text-[10px] font-bold tracking-[0.16em] text-slate-500 dark:text-slate-400">ABTALKS</span>
          <span className="rounded-full border border-indigo-200 bg-indigo-50 px-2 py-1 text-[9px] font-semibold text-indigo-700 dark:border-indigo-400/25 dark:bg-indigo-400/10 dark:text-indigo-200">DAY 12</span>
        </div>
        <div className="mt-3 rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-100 to-white p-4 dark:border-indigo-400/15 dark:from-indigo-500/20 dark:to-transparent">
          <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-indigo-700 dark:text-indigo-200">Current streak</p>
          <div className="mt-2 flex items-end justify-between"><p className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white">12 <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Days</span></p><span className="grid size-9 place-items-center rounded-xl bg-amber-400 text-amber-950"><Sparkles aria-hidden="true" className="size-4" fill="currentColor" /></span></div>
          <div className="mt-4 flex items-center justify-between text-[10px] font-medium text-slate-500 dark:text-slate-400"><span>Day 12 of 60</span><span>20%</span></div>
          <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10"><motion.div className="h-full rounded-full bg-indigo-500 dark:bg-indigo-400" initial={{ width: 0 }} animate={{ width: '20%' }} transition={{ duration: 0.8, delay: 0.65, ease: 'easeOut' }} /></div>
        </div>
        <div className="mt-3 rounded-2xl border border-slate-200 bg-white p-3.5 dark:border-white/8 dark:bg-white/[0.035]">
          <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.13em] text-slate-500 dark:text-slate-400"><span>Today&apos;s challenge</span><span>~45 min</span></div>
          <div className="mt-2.5 flex items-center gap-2.5"><span className="grid size-9 shrink-0 place-items-center rounded-xl bg-indigo-500 text-white"><Code2 aria-hidden="true" className="size-4" /></span><p className="text-sm font-semibold text-slate-950 dark:text-white">Build a Weather App</p><ChevronRight aria-hidden="true" className="ml-auto size-4 shrink-0 text-slate-400 dark:text-slate-500" /></div>
        </div>
        <div className="mt-3"><p className="mb-2 px-1 text-[10px] font-semibold uppercase tracking-[0.13em] text-slate-500 dark:text-slate-400">Proof of work</p><ul className="space-y-2"><ProofRow icon={GitCommit} label="GitHub" /><ProofRow icon={Send} label="LinkedIn" /></ul></div>
        <p className="mt-3 rounded-xl bg-slate-100 px-3 py-2.5 text-center text-[11px] font-medium italic text-slate-600 dark:bg-white/[0.035] dark:text-slate-300">“Consistency compounds.”</p>
      </div>
    </motion.aside>
  )
}

function Hero() {
  const { theme, toggleTheme } = useTheme()

  const [hasSelectedDomain, setHasSelectedDomain] = useState(() => {
    const state = getJourneyState()
    return Boolean(state.selectedDomain)
  })

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

  return (
    <main className={`${theme === 'dark' ? 'dark' : ''} min-h-screen overflow-x-clip bg-[#fcfcfe] text-slate-950 transition-colors duration-200 dark:bg-[#090912] dark:text-white`}>
      <section className="relative isolate mx-auto min-h-screen w-full max-w-7xl px-5 py-5 sm:px-8 lg:px-12 lg:py-8">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(ellipse_at_65%_0%,rgba(99,102,241,0.12),transparent_62%)] dark:bg-[radial-gradient(ellipse_at_65%_0%,rgba(99,102,241,0.20),transparent_62%)]" />
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        <div className="grid items-center gap-10 pb-8 pt-4 sm:gap-12 sm:pt-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:pb-12 lg:pt-8">
          <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.09 }} className="max-w-xl">
            <motion.div variants={reveal} transition={{ duration: 0.45 }}>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-indigo-600 dark:text-indigo-300">About ABTalks</p>
              <h1 className="mt-3 text-[38px] font-bold leading-[1.08] tracking-[-0.045em] text-slate-950 dark:text-white sm:text-5xl">Learn. Build. Showcase. <span className="text-indigo-600 dark:text-indigo-300">Get hired.</span></h1>
              <p className="mt-4 max-w-lg text-[15px] leading-6 text-slate-600 dark:text-slate-400 sm:text-base">ABTalks is a platform for hackathons and challenges that helps students build coding skills, stay consistent, create real projects, and showcase their work.</p>
            </motion.div>
            <motion.div variants={reveal} transition={{ duration: 0.48 }} className="mt-6 border-t border-slate-200 pt-6 dark:border-white/10 sm:mt-7 sm:pt-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-indigo-600 dark:text-indigo-300">60-day coding challenge</p>
              <h2 className="mt-3 text-2xl font-bold leading-tight tracking-[-0.035em] text-slate-950 dark:text-white sm:text-3xl">60 days. 60 tasks. One visible journey.</h2>
              <p className="mt-3 max-w-lg text-[15px] leading-6 text-slate-600 dark:text-slate-400 sm:text-base">Build something new every day, document your progress, and turn 60 days of consistent work into a portfolio that speaks for you.</p>
              <p className="mt-3 text-sm font-semibold text-indigo-600 dark:text-indigo-300 sm:text-base">Build. Share. Get noticed.</p>
              <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row">
                <Link to="/dashboard">
                  <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.18 }} className="inline-flex w-full min-h-12 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 text-sm font-semibold text-white shadow-lg shadow-indigo-950/20 hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:bg-indigo-500 dark:shadow-indigo-950/40 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-300">
                    {hasSelectedDomain ? 'Track Your Progress' : 'Start Your 60 Days'} <ArrowRight aria-hidden="true" className="size-4" />
                  </motion.div>
                </Link>
                <motion.a href="#how-it-works" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.18 }} className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:border-white/12 dark:bg-white/[0.035] dark:text-slate-100 dark:shadow-none dark:hover:bg-white/[0.08] dark:focus-visible:outline-indigo-300">
                  <span>How It Works</span>
                  <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
          <ChallengePreview />
        </div>
      </section>
      <HowItWorks />
      <FAQ />
      <Footer />
    </main>
  )
}

export default Hero
