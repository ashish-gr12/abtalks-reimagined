import { motion } from 'framer-motion'
import { Trophy, Flame, Sparkles, Award, ArrowUpRight, UserCheck } from 'lucide-react'
import { mockLeaderboardData } from '../../data/leaderboardData'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

function CommunityLeaderboard() {
  const { topStudents, currentStudent, nextMilestone } = mockLeaderboardData

  return (
    <section
      id="community-leaderboard-section"
      aria-label="Community Leaderboard and Next Milestone"
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
          <Trophy className="size-3.5" />
          COMMUNITY LEADERBOARD
        </div>
        <h2 className="mt-2.5 text-2xl font-bold leading-tight tracking-[-0.035em] text-slate-950 dark:text-white sm:text-3xl lg:text-4xl">
          Keep building. Your progress counts.
        </h2>
        <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
          See the students showing up consistently and find your next milestone.
        </p>
      </motion.div>

      {/* Main Content Layout (Vertical Stack on 390px Mobile, 2-Column Grid on Desktop) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-12 lg:gap-8"
      >
        {/* LEFT COLUMN: COMMUNITY LEADERBOARD LIST */}
        <div className="flex flex-col md:col-span-7 lg:col-span-7">
          <motion.div
            variants={itemVariants}
            className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-4.5 shadow-sm dark:border-white/10 dark:bg-white/[0.035] sm:p-6"
          >
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  TOP CONSISTENT BUILDERS
                </h3>
                <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500">
                  Updated Today
                </span>
              </div>

              {/* Leaderboard List */}
              <div className="mt-4 flex flex-col gap-2.5">
                {topStudents.map((student) => (
                  <motion.div
                    key={student.rank}
                    variants={itemVariants}
                    className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/70 p-3 transition-colors hover:bg-slate-100/60 dark:border-white/5 dark:bg-white/[0.02] dark:hover:bg-white/[0.04]"
                  >
                    <div className="flex items-center gap-3">
                      {/* Rank Medal / Indicator */}
                      <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-slate-200/60 text-xs font-black text-slate-700 dark:bg-white/10 dark:text-slate-300">
                        {student.rank === 1 ? '🥇' : student.rank === 2 ? '🥈' : '🥉'}
                      </span>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-slate-900 dark:text-white sm:text-sm">
                            {student.name}
                          </span>
                          <span className="rounded-md border border-slate-200/80 bg-slate-100 px-1.5 py-0.5 text-[9px] font-semibold text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
                            {student.domain}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Streak Value */}
                    <div className="flex items-center gap-1 text-xs font-extrabold text-slate-800 dark:text-slate-200">
                      <Flame className="size-3.5 fill-amber-500 text-amber-500" />
                      <span>{student.streak} days</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Subtle Separator */}
              <div className="my-4 border-t border-dashed border-slate-200 dark:border-white/10" />

              {/* CURRENT STUDENT ROW (YOU) */}
              <motion.div
                variants={itemVariants}
                className="relative overflow-hidden rounded-xl border border-indigo-500/80 bg-indigo-50/80 p-3.5 shadow-sm ring-1 ring-indigo-500/20 dark:border-indigo-400/80 dark:bg-indigo-500/15 dark:ring-indigo-400/20"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Rank pill label - subtle, non-dominating rank */}
                    <span className="flex items-center gap-1 rounded-lg bg-indigo-600 px-2 py-1 text-[11px] font-extrabold text-white dark:bg-indigo-500">
                      <UserCheck className="size-3" />
                      YOU #{currentStudent.rank}
                    </span>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-extrabold text-indigo-950 dark:text-white sm:text-sm">
                          {currentStudent.name}
                        </span>
                        <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[9px] font-bold text-emerald-600 dark:text-emerald-300">
                          {currentStudent.tag}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Student Streak */}
                  <div className="flex items-center gap-1.5 rounded-lg bg-white/90 px-2.5 py-1 text-xs font-black text-indigo-700 shadow-2xs dark:bg-slate-900 dark:text-indigo-300">
                    <Flame className="size-3.5 fill-amber-500 text-amber-500" />
                    <span>{currentStudent.streak} day streak</span>
                  </div>
                </div>

                {/* Motivational Copy below student row */}
                <div className="mt-2.5 flex items-center gap-1.5 text-[11px] font-semibold text-indigo-700 dark:text-indigo-300">
                  <Sparkles className="size-3" />
                  <span>{currentStudent.motivationalText}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: NEXT MILESTONE CARD */}
        <div className="flex flex-col md:col-span-5 lg:col-span-5">
          <motion.div
            variants={itemVariants}
            className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-indigo-200 bg-white p-5 shadow-sm dark:border-indigo-500/20 dark:bg-white/[0.035] sm:p-6"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-indigo-600 dark:text-indigo-300 sm:text-[11px]">
                  <Award className="size-3.5" />
                  NEXT MILESTONE
                </div>
                <span className="rounded-full bg-amber-400/20 px-2 py-0.5 text-[10px] font-extrabold text-amber-700 dark:bg-amber-500/20 dark:text-amber-300">
                  {nextMilestone.remainingDays} Days Left
                </span>
              </div>

              {/* Milestone Title */}
              <div className="mt-4 flex items-center gap-2.5">
                <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-md shadow-orange-500/20">
                  <Flame className="size-6 fill-white" />
                </span>
                <div>
                  <h3 className="text-lg font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-xl">
                    {nextMilestone.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {nextMilestone.remainingDays} days to go
                  </p>
                </div>
              </div>

              {/* Progress Bar Visualization */}
              <div className="mt-5">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                  <span>Progress to Milestone</span>
                  <span className="text-indigo-600 dark:text-indigo-300">
                    {nextMilestone.currentDays} / {nextMilestone.targetDays} Days
                  </span>
                </div>

                <div className="mt-2.5 relative h-3.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${nextMilestone.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative h-full rounded-full bg-gradient-to-r from-amber-500 to-indigo-600 shadow-xs dark:from-amber-400 dark:to-indigo-500"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    />
                  </motion.div>
                </div>
              </div>

              {/* Reward / Incentive Box */}
              <div className="mt-5 rounded-xl border border-slate-200/80 bg-slate-50/80 p-3.5 dark:border-white/5 dark:bg-white/[0.025]">
                <div className="flex items-start gap-2.5">
                  <Sparkles className="mt-0.5 size-4 shrink-0 text-amber-500" />
                  <p className="text-xs leading-relaxed font-medium text-slate-700 dark:text-slate-300">
                    {nextMilestone.rewardText}
                  </p>
                </div>
              </div>
            </div>

            {/* Motivational Footer Note */}
            <div className="mt-6 flex items-center justify-between border-t border-slate-200/80 pt-4 dark:border-white/10">
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                Consistency is your unfair advantage.
              </span>
              <span className="flex items-center gap-1 text-[11px] font-bold text-indigo-600 dark:text-indigo-400">
                Keep Going <ArrowUpRight className="size-3.5" />
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default CommunityLeaderboard
