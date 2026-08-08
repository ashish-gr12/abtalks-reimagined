import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqItems = [
  {
    id: 'experience',
    question: 'Do I need prior coding experience?',
    answer:
      "You don't need to be an expert to start. Choose a track that matches your current level and use each challenge to learn, build, and improve one step at a time.",
  },
  {
    id: 'miss-day',
    question: 'What if I miss a day?',
    answer:
      "Missing a day doesn't mean your journey is over. Pick up where you left off and keep building. The goal is consistent progress, not perfection.",
  },
  {
    id: 'submit-work',
    question: 'How do I submit my work?',
    answer:
      'Complete the day\'s task, then submit your GitHub repository or commit and share your progress through a LinkedIn post. Both proofs are part of completing the challenge.',
  },
  {
    id: 'track-progress',
    question: 'How is my progress tracked?',
    answer:
      'Your dashboard shows your current streak, completed challenge days, overall progress, and completion percentage throughout the 60-day journey.',
  },
  {
    id: 'build-skills',
    question: 'How can I build skills through the challenge?',
    answer:
      'Each challenge gives you a focused task to build something real. By repeatedly learning, building, and applying what you learn, you turn daily practice into practical skills.',
  },
  {
    id: 'showcase-skills',
    question: 'How can I showcase my skills?',
    answer:
      "Your GitHub work becomes a visible record of what you've built, while your LinkedIn posts document your learning journey and make your progress easier to discover.",
  },
  {
    id: 'get-hired',
    question: 'How can this help me get hired?',
    answer:
      'Consistent projects and visible proof of work can help you demonstrate practical skills, build a stronger portfolio, and make your learning journey easier for recruiters and potential employers to understand.',
  },
]

function FAQItem({ item, isOpen, onToggle, shouldReduceMotion }) {
  return (
    <div className="group transition-colors">
      <h3>
        <button
          type="button"
          id={`faq-button-${item.id}`}
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${item.id}`}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-slate-100/60 dark:hover:bg-white/[0.03] sm:px-6 sm:py-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          <span className="text-sm font-semibold text-slate-950 dark:text-slate-100 sm:text-base">
            {item.question}
          </span>
          <span
            className={`grid size-8 shrink-0 place-items-center rounded-lg border border-slate-200/80 bg-white text-slate-500 transition-all dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-400 ${
              isOpen
                ? 'border-indigo-200 bg-indigo-50 text-indigo-600 dark:border-indigo-400/30 dark:bg-indigo-500/15 dark:text-indigo-300'
                : 'group-hover:border-slate-300 dark:group-hover:border-white/20'
            }`}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { duration: 0.25, ease: 'easeInOut' }
              }
            >
              <ChevronDown className="size-4" aria-hidden="true" />
            </motion.div>
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${item.id}`}
            role="region"
            aria-labelledby={`faq-button-${item.id}`}
            initial={shouldReduceMotion ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={shouldReduceMotion ? { opacity: 0, height: 0 } : { opacity: 0, height: 0 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 0.25, ease: [0.16, 1, 0.3, 1] }
            }
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-1 sm:px-6 sm:pb-6">
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 sm:text-sm">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function FAQ() {
  const [openId, setOpenId] = useState(null)
  const shouldReduceMotion = useReducedMotion()

  const handleToggle = (id) => {
    setOpenId((currentId) => (currentId === id ? null : id))
  }

  return (
    <section
      id="faq"
      className="border-t border-slate-200 px-5 py-16 dark:border-white/10 sm:px-8 sm:py-20 lg:px-12"
    >
      <div className="mx-auto max-w-3xl">
        <motion.header
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-[-0.045em] text-slate-950 dark:text-white sm:text-5xl">
            FAQ
          </h2>
          <p className="mt-2 text-xl font-semibold tracking-[-0.025em] text-indigo-600 dark:text-indigo-300 sm:text-2xl">
            Questions? We&apos;ve got you.
          </p>
          <p className="mt-3 text-[15px] leading-6 text-slate-600 dark:text-slate-400 sm:text-base">
            Everything you need to know before starting your 60-day journey.
          </p>
        </motion.header>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white/70 shadow-sm divide-y divide-slate-200 dark:border-white/10 dark:bg-white/[0.025] dark:divide-white/8 dark:shadow-none"
        >
          {faqItems.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
