# ABTalks Reimagined — 60-Day Builder Journey

ABTalks Reimagined is a mobile-first 60-day coding challenge platform designed to transform intent into consistent, daily execution. Students pick a domain track, build real-world projects daily, submit GitHub and LinkedIn proof of work, and track their consistency streak over 60 days.

## Route Map

```text
/
/dashboard
/day/12
```

### Route Descriptions

- `/` — **Landing Page**: Public introduction, value proposition, "How It Works" 5-step breakdown, interactive challenge preview, FAQ accordion, and dynamic CTA (`Start Your 60 Days →` for fresh users, `Track Your Progress →` for returning builders).
- `/dashboard` — **Builder Dashboard**: Central hub featuring domain selection & locking (*Software Engineering*, *Data Science*, *Artificial Intelligence*), active journey control, 60-day interactive pathway timeline, Today's Spotlight Task, progress metrics, overall completion trackers, 35-day consistency streak grid, and community leaderboard.
- `/day/12` — **Day 12 Challenge Page**: Complete single-day challenge details for *Build a Task Management API*, including problem context, build tasks, requirements checklist, learning outcomes, and dual GitHub & LinkedIn proof-of-work submission forms.

---

## Key Features

- **Sequential 60-Day Challenge Unlocking**: Progresses strictly from `BUILD → SUBMIT GITHUB → SUBMIT LINKEDIN → DAY COMPLETED → NEXT DAY UNLOCKED`.
- **Dual Proof-of-Work System**: Requires both a GitHub repository/commit URL and a LinkedIn post URL to complete a challenge and advance to the next day.
- **Domain Progress Isolation**: Independent 60-day progress state stored for each track (*Software Engineering*, *Data Science*, *Artificial Intelligence*) in `localStorage` (`abtalksJourney`).
- **Real-Time Streak & Consistency Tracking**: Automatically calculates current consecutive streaks and renders a GitHub-style 35-day activity grid.
- **Supportive Edge-Case Recovery**: Handles fresh student states (0 streak), missed days (non-blocking supportive recovery messaging), and empty profile/proof states.
- **Responsive & Dark/Light Themes**: Optimized mobile-first target at **390px** and desktop viewports up to **1920px**, with persistent Dark and Light mode options.

---

## Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS
- **Motion & Icons**: Framer Motion, Lucide React
- **Routing**: React Router DOM (v7)

---

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Local Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```
