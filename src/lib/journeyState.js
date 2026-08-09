const STORAGE_KEY = 'abtalksJourney'
const LEGACY_DOMAIN_KEY = 'abtalks-selected-domain'

const defaultState = {
  selectedDomain: null,
  isLocked: false,
  journeyStarted: {
    'software-engineering': false,
    'data-science': false,
    'artificial-intelligence': false,
  },
  domains: {
    'software-engineering': {
      currentDay: 1,
      completedDays: [],
      missedDays: [],
      githubSubmissions: [],
      linkedinSubmissions: [],
      currentStreak: 0,
    },
    'data-science': {
      currentDay: 1,
      completedDays: [],
      missedDays: [],
      githubSubmissions: [],
      linkedinSubmissions: [],
      currentStreak: 0,
    },
    'artificial-intelligence': {
      currentDay: 1,
      completedDays: [],
      missedDays: [],
      githubSubmissions: [],
      linkedinSubmissions: [],
      currentStreak: 0,
    },
  },
  profile: {
    name: '',
    github: '',
    linkedin: '',
    avatar: null,
  },
}

function calculateStreak(completedDays = [], missedDays = []) {
  if (!completedDays || completedDays.length === 0) return 0
  const maxDay = Math.max(...completedDays)
  let streak = 0
  for (let day = maxDay; day >= 1; day--) {
    if (completedDays.includes(day)) {
      streak++
    } else {
      break
    }
  }
  return streak
}

export function getJourneyState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw)
      return { ...defaultState, ...parsed }
    }

    // Migration / fallback for legacy single key
    const legacyDomain = localStorage.getItem(LEGACY_DOMAIN_KEY)
    if (legacyDomain) {
      return {
        ...defaultState,
        selectedDomain: legacyDomain,
        isLocked: true,
        journeyStarted: {
          ...defaultState.journeyStarted,
          [legacyDomain]: true,
        },
      }
    }
  } catch (e) {
    console.warn('Failed to parse journey state from localStorage:', e)
  }
  return defaultState
}

export function saveJourneyState(newState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newState))
    if (newState.selectedDomain) {
      localStorage.setItem(LEGACY_DOMAIN_KEY, newState.selectedDomain)
    }
    // Notify other components in real time
    window.dispatchEvent(new Event('abtalks-journey-updated'))
  } catch (e) {
    console.warn('Failed to save journey state to localStorage:', e)
  }
}

export function selectDomain(domainId) {
  const currentState = getJourneyState()
  const currentDomainData = currentState.domains[domainId] || {
    currentDay: 1,
    completedDays: [],
    missedDays: [],
    githubSubmissions: [],
    linkedinSubmissions: [],
    currentStreak: 0,
  }

  const updated = {
    ...currentState,
    selectedDomain: domainId,
    isLocked: true,
    domains: {
      ...currentState.domains,
      [domainId]: currentDomainData,
    },
  }
  saveJourneyState(updated)
  return updated
}

export function unlockDomainSelection() {
  const currentState = getJourneyState()
  const updated = {
    ...currentState,
    isLocked: false,
  }
  saveJourneyState(updated)
  return updated
}

export function startJourney(domainId) {
  const currentState = getJourneyState()
  const targetDomain = domainId || currentState.selectedDomain
  if (!targetDomain) return currentState

  const updated = {
    ...currentState,
    selectedDomain: targetDomain,
    isLocked: true,
    journeyStarted: {
      ...currentState.journeyStarted,
      [targetDomain]: true,
    },
  }
  saveJourneyState(updated)
  return updated
}

export function completeDayChallenge(dayNumber, domainId) {
  const currentState = getJourneyState()
  const activeDomain = domainId || currentState.selectedDomain || 'software-engineering'
  const domainData = currentState.domains[activeDomain] || {
    currentDay: 1,
    completedDays: [],
    missedDays: [],
    githubSubmissions: [],
    linkedinSubmissions: [],
    currentStreak: 0,
  }

  const completedDays = Array.from(new Set([...domainData.completedDays, dayNumber])).sort((a, b) => a - b)
  const githubSubmissions = Array.from(new Set([...domainData.githubSubmissions, dayNumber]))
  const linkedinSubmissions = Array.from(new Set([...domainData.linkedinSubmissions, dayNumber]))
  const nextDay = Math.max(domainData.currentDay, dayNumber + 1)
  const currentStreak = calculateStreak(completedDays, domainData.missedDays)

  const updated = {
    ...currentState,
    domains: {
      ...currentState.domains,
      [activeDomain]: {
        ...domainData,
        currentDay: nextDay,
        completedDays,
        githubSubmissions,
        linkedinSubmissions,
        currentStreak,
      },
    },
  }
  saveJourneyState(updated)
  return updated
}

// Generate active metrics based on real domain-specific stored state
export function getEffectiveMetrics() {
  const baseState = getJourneyState()

  // 4. REAL APPLICATION STATE (Derived from baseState.domains[selectedDomain])
  const activeDomainKey = baseState.selectedDomain
  if (!activeDomainKey) {
    // Fresh student state (no domain committed yet)
    return {
      currentDay: 1,
      totalDays: 60,
      completedDays: [],
      missedDays: [],
      completedCount: 0,
      remainingDays: 60,
      progressPercentage: 0,
      currentStreak: 0,
      githubCount: 0,
      githubTotal: 0,
      linkedinCount: 0,
      linkedinTotal: 0,
      streakTitle: '🔥 0 DAY STREAK',
      streakMessage: 'Your streak starts today.',
      streakSubtext: 'Complete Day 1 to start building your consistency.',
      isEmptyProfile: true,
      profileProofTitle: 'Your proof of work is still empty.',
      profileProofMessage:
        'Complete your first challenge to start building your public portfolio.',
      hasMissedDay: false,
      missedDayText: '',
      activityGrid: Array.from({ length: 35 }).map((_, idx) => ({
        dayNumber: idx + 1,
        status: 'upcoming',
        label: `Day ${idx + 1}: Upcoming`,
        isToday: idx === 0,
      })),
    }
  }

  const domainData = baseState.domains[activeDomainKey] || {
    currentDay: 1,
    completedDays: [],
    missedDays: [],
    githubSubmissions: [],
    linkedinSubmissions: [],
    currentStreak: 0,
  }

  const currentDay = domainData.currentDay || 1
  const completedDays = domainData.completedDays || []
  const missedDays = domainData.missedDays || []
  const githubSubmissions = domainData.githubSubmissions || []
  const linkedinSubmissions = domainData.linkedinSubmissions || []

  const completedCount = completedDays.length
  const progressPercentage = Math.round((completedCount / 60) * 100)
  const isFreshDomain = completedCount === 0 && currentDay === 1
  const currentStreak = calculateStreak(completedDays, missedDays)

  if (isFreshDomain) {
    return {
      currentDay: 1,
      totalDays: 60,
      completedDays: [],
      missedDays: [],
      completedCount: 0,
      remainingDays: 60,
      progressPercentage: 0,
      currentStreak: 0,
      githubCount: 0,
      githubTotal: 0,
      linkedinCount: 0,
      linkedinTotal: 0,
      streakTitle: '🔥 0 DAY STREAK',
      streakMessage: 'Your streak starts today.',
      streakSubtext: 'Complete Day 1 to start building your consistency.',
      isEmptyProfile: true,
      profileProofTitle: 'Your proof of work is still empty.',
      profileProofMessage:
        'Complete your first challenge to start building your public portfolio.',
      hasMissedDay: false,
      missedDayText: '',
      activityGrid: Array.from({ length: 35 }).map((_, idx) => ({
        dayNumber: idx + 1,
        status: 'upcoming',
        label: `Day ${idx + 1}: Upcoming`,
        isToday: idx === 0,
      })),
    }
  }

  const hasMissed = missedDays.length > 0
  const firstMissedDay = hasMissed ? missedDays[0] : null

  return {
    currentDay,
    totalDays: 60,
    completedDays,
    missedDays,
    completedCount,
    remainingDays: 60 - completedCount,
    progressPercentage,
    currentStreak,
    githubCount: githubSubmissions.length,
    githubTotal: currentDay,
    linkedinCount: linkedinSubmissions.length,
    linkedinTotal: currentDay,
    streakTitle: `🔥 ${currentStreak} DAY STREAK`,
    streakMessage: hasMissed
      ? `You missed Day ${firstMissedDay}, but you're back.`
      : `${currentStreak} days strong. Keep building.`,
    streakSubtext: hasMissed
      ? "One missed day doesn't stop your journey. Keep building."
      : 'Top 10% consistency among ABTalks builders.',
    isEmptyProfile: false,
    profileProofTitle: `${githubSubmissions.length + linkedinSubmissions.length} Proofs of Work Submitted`,
    profileProofMessage: `GitHub ${githubSubmissions.length}/${currentDay} • LinkedIn ${linkedinSubmissions.length}/${currentDay}`,
    hasMissedDay: hasMissed,
    missedDayText: hasMissed ? `You missed Day ${firstMissedDay}, but you're back.` : '',
    activityGrid: Array.from({ length: 35 }).map((_, idx) => {
      const dayNum = idx + 1
      const isCompleted = completedDays.includes(dayNum)
      const isMissed = missedDays.includes(dayNum)
      return {
        dayNumber: dayNum,
        status: isCompleted ? 'completed' : isMissed ? 'missed' : 'upcoming',
        label: isCompleted
          ? `Day ${dayNum}: Completed`
          : isMissed
          ? `Day ${dayNum}: Missed`
          : `Day ${dayNum}: Upcoming`,
        isToday: dayNum === currentDay,
      }
    }),
  }
}
