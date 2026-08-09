export const mockProgressData = {
  currentDay: 12,
  totalDays: 60,
  progressPercentage: 20,
  completedChallenges: 12,
  remainingDays: 48,
  githubProof: {
    completed: 12,
    total: 12,
  },
  linkedinProof: {
    completed: 10,
    total: 12,
  },
  currentStreak: 12,
  nextMilestone: 15,
  daysToMilestone: 3,

  // 35 activity days representation (5 columns x 7 rows for compact GitHub-inspired activity grid)
  activityGrid: [
    // Week 1 (Previous history before current 12-day streak)
    { dayNumber: -6, status: 'completed', label: 'Day -6: Completed' },
    { dayNumber: -5, status: 'completed', label: 'Day -5: Completed' },
    { dayNumber: -4, status: 'completed', label: 'Day -4: Completed' },
    { dayNumber: -3, status: 'missed', label: 'Day -3: Rest Day' },
    { dayNumber: -2, status: 'completed', label: 'Day -2: Completed' },
    { dayNumber: -1, status: 'completed', label: 'Day -1: Completed' },
    { dayNumber: 0, status: 'completed', label: 'Day 0: Completed' },

    // Week 2 (Days 1 to 7 - Current 12-day streak started!)
    { dayNumber: 1, status: 'completed', label: 'Day 1: Developer Portfolio' },
    { dayNumber: 2, status: 'completed', label: 'Day 2: GitHub Explorer' },
    { dayNumber: 3, status: 'completed', label: 'Day 3: Task Management API' },
    { dayNumber: 4, status: 'completed', label: 'Day 4: Expense Tracker' },
    { dayNumber: 5, status: 'completed', label: 'Day 5: Real-Time Chat' },
    { dayNumber: 6, status: 'completed', label: 'Day 6: Auth Service' },
    { dayNumber: 7, status: 'completed', label: 'Day 7: CLI Tool' },

    // Week 3 (Days 8 to 14 - Active Today: Day 12!)
    { dayNumber: 8, status: 'completed', label: 'Day 8: Dashboard UI' },
    { dayNumber: 9, status: 'completed', label: 'Day 9: Database Migration' },
    { dayNumber: 10, status: 'completed', label: 'Day 10: Docker Setup' },
    { dayNumber: 11, status: 'completed', label: 'Day 11: Unit Testing' },
    { dayNumber: 12, status: 'completed', isToday: true, label: 'Day 12: Weather App (Today)' },
    { dayNumber: 13, status: 'upcoming', label: 'Day 13: Upcoming' },
    { dayNumber: 14, status: 'upcoming', label: 'Day 14: Upcoming' },

    // Week 4 (Days 15 to 21)
    { dayNumber: 15, status: 'upcoming', isMilestone: true, label: 'Day 15: 15-Day Milestone!' },
    { dayNumber: 16, status: 'upcoming', label: 'Day 16: Upcoming' },
    { dayNumber: 17, status: 'upcoming', label: 'Day 17: Upcoming' },
    { dayNumber: 18, status: 'upcoming', label: 'Day 18: Upcoming' },
    { dayNumber: 19, status: 'upcoming', label: 'Day 19: Upcoming' },
    { dayNumber: 20, status: 'upcoming', label: 'Day 20: Upcoming' },
    { dayNumber: 21, status: 'upcoming', label: 'Day 21: Upcoming' },

    // Week 5 (Days 22 to 28)
    { dayNumber: 22, status: 'upcoming', label: 'Day 22: Upcoming' },
    { dayNumber: 23, status: 'upcoming', label: 'Day 23: Upcoming' },
    { dayNumber: 24, status: 'upcoming', label: 'Day 24: Upcoming' },
    { dayNumber: 25, status: 'upcoming', label: 'Day 25: Upcoming' },
    { dayNumber: 26, status: 'upcoming', label: 'Day 26: Upcoming' },
    { dayNumber: 27, status: 'upcoming', label: 'Day 27: Upcoming' },
    { dayNumber: 28, status: 'upcoming', label: 'Day 28: Upcoming' },
  ],
}
