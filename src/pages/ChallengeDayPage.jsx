import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import {
  ArrowLeft,
  CheckCircle2,
  GitCommit,
  Share2,
  Clock,
  Code2,
  BookOpen,
  Sparkles,
  Check,
  AlertCircle,
  Award,
  Layers,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import useTheme from '../hooks/useTheme'
import Footer from '../components/landing/Footer'
import { getJourneyState, completeDayChallenge } from '../lib/journeyState'

const STORAGE_KEY = 'abtalksDay12Proof'

const challengeData = {
  day: 12,
  totalDays: 60,
  title: 'Build a Task Management API',
  estimatedTime: '~60 min',
  difficulty: 'Intermediate',
  description:
    'Build a REST API that allows users to create, update, delete, and filter tasks.',
  whyItMatters:
    'Real-world applications rely on APIs to move data between users, interfaces, and services. This challenge gives you practical experience designing and working with one.',
  buildTasks: [
    'Create a new task with title and description',
    'View all tasks or fetch a single task by ID',
    'Update a task’s status (e.g. pending / completed)',
    'Delete a task from the system',
    'Filter tasks by completion status',
  ],
  requirements: [
    'REST API structure with standard HTTP verbs',
    'CRUD operations implemented cleanly',
    'Task status handling & response codes',
    'Basic data validation for requests',
    'Clear README explaining how to run the API',
    'Working project pushed to GitHub',
  ],
  skills: [
    'REST API Design',
    'CRUD Operations',
    'Data Validation',
    'API Architecture',
  ],
}

function ChallengeDayPage() {
  const { theme, toggleTheme } = useTheme()
  const shouldReduceMotion = useReducedMotion()
  const activeDomain = getJourneyState().selectedDomain || 'software-engineering'

  // Submission local state persisted in localStorage
  const [proofState, setProofState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) return JSON.parse(saved)
    } catch (e) {
      console.warn('Failed to parse Day 12 proof state:', e)
    }
    return {
      githubSubmitted: false,
      githubUrl: '',
      linkedinSubmitted: false,
      linkedinUrl: '',
    }
  })

  // Inputs state
  const [githubInput, setGithubInput] = useState(proofState.githubUrl || '')
  const [linkedinInput, setLinkedinInput] = useState(proofState.linkedinUrl || '')

  // Error messages state
  const [githubError, setGithubError] = useState('')
  const [linkedinError, setLinkedinError] = useState('')

  // Ensure page starts at the top when mounted
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Sync to localStorage and update journey state
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(proofState))
      if (proofState.githubSubmitted && proofState.linkedinSubmitted) {
        completeDayChallenge(12, activeDomain)
      }
    } catch (e) {
      console.warn('Failed to save Day 12 proof state:', e)
    }
  }, [proofState, activeDomain])

  const isCompleted = proofState.githubSubmitted && proofState.linkedinSubmitted

  const handleGithubSubmit = (e) => {
    e.preventDefault()
    if (!githubInput.trim()) {
      setGithubError('Add your GitHub repository or commit URL.')
      return
    }
    setGithubError('')
    setProofState((prev) => ({
      ...prev,
      githubSubmitted: true,
      githubUrl: githubInput.trim(),
    }))
  }

  const handleLinkedinSubmit = (e) => {
    e.preventDefault()
    if (!linkedinInput.trim()) {
      setLinkedinError('Add your LinkedIn post URL.')
      return
    }
    setLinkedinError('')
    setProofState((prev) => ({
      ...prev,
      linkedinSubmitted: true,
      linkedinUrl: linkedinInput.trim(),
    }))
  }

  const handleEditGithub = () => {
    setProofState((prev) => ({
      ...prev,
      githubSubmitted: false,
    }))
  }

  const handleEditLinkedin = () => {
    setProofState((prev) => ({
      ...prev,
      linkedinSubmitted: false,
    }))
  }

  return (
    <main
      className={`${
        theme === 'dark' ? 'dark' : ''
      } min-h-screen overflow-x-clip bg-[#fcfcfe] text-slate-950 transition-colors duration-200 dark:bg-[#090912] dark:text-white`}
    >
      <header className="mx-auto w-full max-w-7xl px-4 pt-4 sm:px-8 sm:pt-6 lg:px-12 lg:pt-8">
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
      </header>

      <section className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-8 sm:py-10 lg:px-12">
        {/* Back Navigation */}
        <div className="mb-4 flex items-center justify-between">
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 transition-colors hover:underline dark:text-indigo-300"
          >
            <ArrowLeft className="size-4" /> Back to Dashboard
          </Link>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
            <Layers className="size-3.5" />
            {activeDomain === 'data-science'
              ? 'Data Science Track'
              : activeDomain === 'artificial-intelligence'
              ? 'AI Track'
              : 'Software Engineering Track'}
          </span>
        </div>

        {/* Challenge Header Card */}
        <motion.div
          id="challenge-header"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          whileHover={shouldReduceMotion ? undefined : { y: -2 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl border border-indigo-200 bg-white p-5 shadow-lg shadow-indigo-950/5 transition-all duration-300 hover:border-indigo-300 hover:shadow-xl dark:border-indigo-500/20 dark:bg-white/[0.035] dark:hover:border-indigo-500/40 sm:p-8"
        >
          {/* Top metadata row */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-slate-200/80 pb-4 dark:border-white/10">
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-indigo-600 px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wide text-white dark:bg-indigo-500">
                DAY {challengeData.day} OF {challengeData.totalDays}
              </span>
              <span className="flex items-center gap-1 rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                <Clock className="size-3.5 text-indigo-500" />
                {challengeData.estimatedTime}
              </span>
              <span className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                {challengeData.difficulty}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {isCompleted ? (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-300">
                  <Check className="size-3.5 stroke-[3]" /> DAY 12 COMPLETE
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/20 px-3 py-1 text-xs font-bold text-amber-700 dark:bg-amber-500/20 dark:text-amber-300">
                  <Sparkles className="size-3.5 fill-current" /> READY TO BUILD
                </span>
              )}
            </div>
          </div>

          {/* Title & Description */}
          <div className="mt-5 flex items-start gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-indigo-600 text-white shadow-md shadow-indigo-500/20 dark:bg-indigo-500 sm:size-14">
              <Code2 className="size-6 sm:size-7" />
            </span>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-3xl lg:text-4xl">
                {challengeData.title}
              </h1>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300 sm:text-sm md:text-base">
                {challengeData.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Content Layout (Vertical Stack on 390px Mobile, 2-Column Grid on Desktop) */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-12 lg:gap-8">
          {/* LEFT COLUMN: CHALLENGE DETAILS, BUILD CHECKLIST & REQUIREMENTS */}
          <div className="flex flex-col gap-6 md:col-span-7 lg:col-span-7">
            {/* WHY THIS MATTERS CARD */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              whileHover={shouldReduceMotion ? undefined : { y: -3 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs transition-all duration-300 hover:border-indigo-200 hover:shadow-md dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-indigo-500/30 sm:p-6"
            >
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                <Sparkles className="size-4" />
                <span>WHY THIS MATTERS</span>
              </div>
              <p className="mt-2.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300 sm:text-sm">
                {challengeData.whyItMatters}
              </p>
            </motion.div>

            {/* WHAT YOU NEED TO BUILD CARD */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              whileHover={shouldReduceMotion ? undefined : { y: -3 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs transition-all duration-300 hover:border-indigo-200 hover:shadow-md dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-indigo-500/30 sm:p-6"
            >
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
                <Code2 className="size-4 text-indigo-600 dark:text-indigo-400" />
                <span>WHAT YOU NEED TO BUILD</span>
              </div>

              <ul className="mt-3.5 flex flex-col gap-2.5">
                {challengeData.buildTasks.map((task, idx) => (
                  <motion.li
                    key={idx}
                    initial={shouldReduceMotion ? false : { opacity: 0, x: -6 }}
                    whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: idx * 0.04 }}
                    className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/80 p-3 text-xs font-medium text-slate-800 transition-colors hover:border-indigo-200/60 dark:border-white/5 dark:bg-white/[0.02] dark:text-slate-200 dark:hover:border-white/10 sm:text-sm"
                  >
                    <span className="grid size-5 shrink-0 place-items-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-300">
                      <Check className="size-3 stroke-[3]" />
                    </span>
                    <span>{task}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* REQUIREMENTS CHECKLIST CARD */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              whileHover={shouldReduceMotion ? undefined : { y: -3 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs transition-all duration-300 hover:border-indigo-200 hover:shadow-md dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-indigo-500/30 sm:p-6"
            >
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
                <CheckCircle2 className="size-4 text-emerald-500" />
                <span>CHALLENGE REQUIREMENTS</span>
              </div>

              <div className="mt-3.5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {challengeData.requirements.map((req, idx) => (
                  <motion.div
                    key={idx}
                    initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.97 }}
                    whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: idx * 0.03 }}
                    className="flex items-center gap-2.5 rounded-xl border border-slate-200/70 bg-slate-50/60 p-3 text-xs font-semibold text-slate-700 transition-colors hover:border-emerald-200 dark:border-white/5 dark:bg-white/[0.02] dark:text-slate-300 dark:hover:border-emerald-500/30"
                  >
                    <CheckCircle2 className="size-4 shrink-0 text-emerald-500" />
                    <span>{req}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* WHAT YOU'LL LEARN CARD */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              whileHover={shouldReduceMotion ? undefined : { y: -3 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs transition-all duration-300 hover:border-indigo-200 hover:shadow-md dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-indigo-500/30 sm:p-6"
            >
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
                <BookOpen className="size-4 text-indigo-600 dark:text-indigo-400" />
                <span>WHAT YOU&apos;LL LEARN</span>
              </div>

              <div className="mt-3.5 flex flex-wrap gap-2">
                {challengeData.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.04 }}
                    transition={{ duration: 0.15 }}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-indigo-200 bg-indigo-50/80 px-3.5 py-2 text-xs font-bold text-indigo-700 transition-colors hover:border-indigo-300 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-300"
                  >
                    <Check className="size-3 stroke-[3]" />
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: PROOF OF WORK & DAY STATUS */}
          <div className="flex flex-col gap-6 md:col-span-5 lg:col-span-5">
            {/* PROOF OF WORK SUBMISSION CONTAINER CARD */}
            <motion.div
              id="proof-section"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              whileHover={shouldReduceMotion ? undefined : { y: -3 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-2xl border border-indigo-200 bg-white p-5 shadow-md transition-all duration-300 hover:border-indigo-300 hover:shadow-xl dark:border-indigo-500/20 dark:bg-white/[0.035] dark:hover:border-indigo-500/40 sm:p-6"
            >
              <div className="border-b border-slate-200/80 pb-4 dark:border-white/10">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-300">
                  <Award className="size-4" />
                  <span>PROOF OF WORK</span>
                </div>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                  Your progress becomes valuable when you make it visible.
                </p>
              </div>

              {/* Workflow Concept Banner: BUILD -> SUBMIT -> SHOWCASE */}
              <div className="mt-4 flex items-center justify-between rounded-xl bg-slate-100/80 px-3 py-2 text-[10px] font-extrabold tracking-wider text-slate-600 dark:bg-white/5 dark:text-slate-300">
                <span>BUILD</span>
                <span>→</span>
                <span>SUBMIT GITHUB</span>
                <span>→</span>
                <span>SHOWCASE LINKEDIN</span>
              </div>

              {/* SUBMISSION FORM 1: GITHUB */}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="mt-5 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 transition-colors hover:border-indigo-200 dark:border-white/8 dark:bg-white/[0.02] dark:hover:border-white/15"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white">
                    <GitCommit className="size-4 text-indigo-600 dark:text-indigo-400" />
                    <span>1. GITHUB PROOF</span>
                  </div>
                  {proofState.githubSubmitted ? (
                    <span className="flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-300">
                      <Check className="size-3 stroke-[3]" /> Submitted
                    </span>
                  ) : (
                    <span className="text-[10px] font-semibold text-slate-400">Required</span>
                  )}
                </div>

                <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                  Submit the repository or commit URL containing your code.
                </p>

                {proofState.githubSubmitted ? (
                  <div className="mt-3 rounded-xl border border-emerald-200 bg-emerald-50/80 p-3 text-xs dark:border-emerald-500/20 dark:bg-emerald-500/10">
                    <div className="flex items-center justify-between">
                      <span className="truncate font-semibold text-emerald-800 dark:text-emerald-300">
                        {proofState.githubUrl}
                      </span>
                      <button
                        type="button"
                        onClick={handleEditGithub}
                        className="ml-2 shrink-0 text-[11px] font-bold text-indigo-600 hover:underline dark:text-indigo-300"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleGithubSubmit} className="mt-3 flex flex-col gap-2">
                    <input
                      type="text"
                      value={githubInput}
                      onChange={(e) => {
                        setGithubInput(e.target.value)
                        if (githubError) setGithubError('')
                      }}
                      placeholder="https://github.com/username/task-management-api"
                      className="min-h-11 w-full rounded-xl border border-slate-300 bg-white px-3.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 dark:border-white/15 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500"
                    />

                    {githubError && (
                      <p className="flex items-center gap-1 text-[11px] font-semibold text-rose-500 dark:text-rose-400">
                        <AlertCircle className="size-3.5" />
                        {githubError}
                      </p>
                    )}

                    <motion.button
                      type="submit"
                      whileHover={shouldReduceMotion ? undefined : { scale: 1.01 }}
                      whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
                      transition={{ duration: 0.15 }}
                      className="group inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 text-xs font-semibold text-white shadow-md hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400"
                    >
                      <GitCommit className="size-3.5" />
                      <span>Submit GitHub Proof</span>
                    </motion.button>
                  </form>
                )}
              </motion.div>

              {/* SUBMISSION FORM 2: LINKEDIN */}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.15 }}
                className="mt-4 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 transition-colors hover:border-amber-200 dark:border-white/8 dark:bg-white/[0.02] dark:hover:border-white/15"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white">
                    <Share2 className="size-4 text-amber-500" />
                    <span>2. LINKEDIN PROOF</span>
                  </div>
                  {proofState.linkedinSubmitted ? (
                    <span className="flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-300">
                      <Check className="size-3 stroke-[3]" /> Submitted
                    </span>
                  ) : (
                    <span className="text-[10px] font-semibold text-slate-400">Required</span>
                  )}
                </div>

                <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                  Share your progress publicly and submit your LinkedIn post URL.
                </p>

                {proofState.linkedinSubmitted ? (
                  <div className="mt-3 rounded-xl border border-emerald-200 bg-emerald-50/80 p-3 text-xs dark:border-emerald-500/20 dark:bg-emerald-500/10">
                    <div className="flex items-center justify-between">
                      <span className="truncate font-semibold text-emerald-800 dark:text-emerald-300">
                        {proofState.linkedinUrl}
                      </span>
                      <button
                        type="button"
                        onClick={handleEditLinkedin}
                        className="ml-2 shrink-0 text-[11px] font-bold text-indigo-600 hover:underline dark:text-indigo-300"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleLinkedinSubmit} className="mt-3 flex flex-col gap-2">
                    <input
                      type="text"
                      value={linkedinInput}
                      onChange={(e) => {
                        setLinkedinInput(e.target.value)
                        if (linkedinError) setLinkedinError('')
                      }}
                      placeholder="https://linkedin.com/posts/username/task-api-day12"
                      className="min-h-11 w-full rounded-xl border border-slate-300 bg-white px-3.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 dark:border-white/15 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500"
                    />

                    {linkedinError && (
                      <p className="flex items-center gap-1 text-[11px] font-semibold text-rose-500 dark:text-rose-400">
                        <AlertCircle className="size-3.5" />
                        {linkedinError}
                      </p>
                    )}

                    <motion.button
                      type="submit"
                      whileHover={shouldReduceMotion ? undefined : { scale: 1.01 }}
                      whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
                      transition={{ duration: 0.15 }}
                      className="group inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-amber-500 text-xs font-semibold text-slate-950 shadow-md hover:bg-amber-400 focus-visible:outline-2 focus-visible:outline-amber-500"
                    >
                      <Share2 className="size-3.5" />
                      <span>Submit LinkedIn Proof</span>
                    </motion.button>
                  </form>
                )}
              </motion.div>

              {/* DAY COMPLETION STATE */}
              <div className="mt-6 border-t border-slate-200/80 pt-5 dark:border-white/10">
                <AnimatePresence mode="wait">
                  {isCompleted ? (
                    <motion.div
                      key="completed-banner"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col items-center gap-3 rounded-2xl border border-emerald-300 bg-emerald-50/90 p-5 text-center shadow-lg shadow-emerald-950/10 dark:border-emerald-500/30 dark:bg-emerald-500/15"
                    >
                      <span className="grid size-12 place-items-center rounded-full bg-emerald-500 text-white shadow-md shadow-emerald-500/30">
                        <Check className="size-7 stroke-[3]" />
                      </span>

                      <div>
                        <h3 className="text-lg font-black tracking-tight text-emerald-950 dark:text-white sm:text-xl">
                          ✓ DAY 12 COMPLETE
                        </h3>
                        <p className="mt-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                          Your work has been documented.
                        </p>
                      </div>

                      <div className="rounded-xl border border-indigo-200 bg-indigo-50/80 px-3.5 py-2 text-center text-xs font-extrabold text-indigo-700 dark:border-indigo-500/20 dark:bg-indigo-500/15 dark:text-indigo-300">
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-indigo-500">
                          NEXT CHALLENGE UNLOCKED
                        </span>
                        Day 13 is ready.
                      </div>

                      <Link
                        to="/dashboard"
                        className="group mt-1 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 text-xs font-bold text-white shadow-md hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400"
                      >
                        <span>Return to Dashboard</span>
                        <ArrowLeft className="size-4 rotate-180 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="pending-banner"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="flex flex-col items-center gap-2 rounded-2xl border border-amber-200 bg-amber-50/80 p-4 text-center dark:border-amber-500/20 dark:bg-amber-500/10"
                    >
                      <span className="text-xs font-bold text-amber-900 dark:text-amber-200">
                        COMPLETE YOUR DAY
                      </span>
                      <p className="text-[11px] text-amber-800 dark:text-amber-300">
                        Submit both GitHub and LinkedIn proofs of work above to complete Day 12.
                      </p>
                      <div className="mt-1 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        <span className={proofState.githubSubmitted ? 'text-emerald-600 dark:text-emerald-400' : ''}>
                          GitHub {proofState.githubSubmitted ? '✓' : '○'}
                        </span>
                        <span>•</span>
                        <span className={proofState.linkedinSubmitted ? 'text-emerald-600 dark:text-emerald-400' : ''}>
                          LinkedIn {proofState.linkedinSubmitted ? '✓' : '○'}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer mode="challenge" currentDay={12} isCompleted={isCompleted} proofState={proofState} />
    </main>
  )
}

export default ChallengeDayPage
