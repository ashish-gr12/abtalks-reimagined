# ABTalks

ABTalks is a platform for hackathons and challenges that helps students build coding skills, stay consistent, create real projects, and showcase their work.

Join India's coding community for college students to learn, build, and accelerate their careers through visible proof of work.

---

## What is ABTalks?

ABTalks is designed around consistent daily action rather than one large project at the end of a course. The platform transforms learning intent into daily execution through a core loop:

```text
Learn → Build → Document → Showcase → Get Noticed → Get Hired
```

By completing one focused challenge every day, students turn daily practice into a public portfolio of practical skills.

---

## 60-Day Coding Challenge

Students complete one practical challenge each day over a 60-day journey. Each challenge provides:

- A practical, real-world coding task.
- Clear expected deliverables.
- Targeted skills to practice.
- An opportunity to create visible proof of work.

### Sequential Unlocking Rule

Challenges unlock sequentially to build steady consistency:

```text
BUILD → SUBMIT GITHUB PROOF → SUBMIT LINKEDIN PROOF → DAY COMPLETED → NEXT DAY UNLOCKED
```

- **GitHub Proof**: Students submit their repository or commit URL.
- **LinkedIn Proof**: Students submit their LinkedIn post URL sharing their progress publicly.
- A challenge is completed **only** when both required proof submissions are fulfilled.

---

## Domain Selection & Tracks

Students select a 60-day track aligned with their career focus:

### Software Engineering
Focus on building software applications, REST APIs, frontend/backend engineering concepts, and practical system design skills.

### Data Science
Focus on data manipulation, statistical analysis, data visualization, and practical data-driven applications.

### Artificial Intelligence
Focus on AI concepts, model usage, practical AI project integrations, and intelligent applications.

### Domain-Specific Progress Preservation

Each domain maintains its own independent 60-day progress in `localStorage` (`abtalksJourney`). If a student switches domains via **Edit Domain**, their previous track's progress is safely preserved and restored when they return.

---

## Challenge Progression States

Every challenge node in the journey occupies one of three states:

- **Locked** (`🔒`): Future challenges that unlock only after the preceding challenge is completed.
- **Current** (`●`): The student's active daily challenge.
- **Completed** (`✓`): Challenges finished with both GitHub and LinkedIn proofs submitted.

*Note: Direct URL access to `/day/12` is kept accessible for hackathon judging without route guards, while student progression through the Dashboard remains strictly sequential.*

---

## Proof of Work

Students document their progress through two mandatory submission cards:

- **GitHub Proof**: Repository or commit URL demonstrating working code.
- **LinkedIn Proof**: Post URL sharing daily learnings and public progress.

The challenge status transitions from `IN PROGRESS` to `✓ COMPLETED` immediately upon dual submission, unlocking the next challenge and updating Dashboard metrics in real time.

---

## Builder Dashboard

The `/dashboard` route serves as the student's central hub to answer two key questions: *"What should I do today?"* and *"How far have I progressed?"*.

Dashboard components include:
1. **Community Hero**: Welcoming introductory card and streak motivation.
2. **Pick Your Domain**: Track selection, domain locking (`Your 60-day path is set to [Domain] 🔒`), and active journey controls.
3. **Your Journey**: 60-day interactive pathway timeline rendering completed (`✓`), current (`●`), and locked (`🔒`) challenge nodes.
4. **Today's Task**: Spotlight card for today's active challenge with estimated time, skills, and action CTAs.
5. **Progress & Overall Completion**: Real-time trackers for completed challenges (`X / 60`), progress percentage, GitHub proofs submitted, and LinkedIn proofs submitted.
6. **Streak & Consistency**: 35-day activity grid visualizing completed, missed, and upcoming days with supportive recovery messaging (`"You missed Day 4, but you're back"`).
7. **Community Leaderboard**: Motivating student leaderboard celebrating milestones, consistency streaks, and proof-of-work contributions.

---

## Challenge Day (`/day/12`)

The `/day/12` route demonstrates the full experience of a single challenge day (*Build a Task Management API*):

- **Header**: Day number (`DAY 12 OF 60`), challenge title, estimated time (`~60 min`), difficulty (`Intermediate`), and real-time status pill.
- **Context & Why It Matters**: Practical explanation of REST APIs and data transfer in real-world software.
- **What You Need to Build**: Checklist of CRUD and filtering features (Create, View, Update, Delete, Filter).
- **Requirements**: Deliverables checklist (REST API structure, CRUD operations, validation, README, GitHub repository).
- **What You'll Learn**: Key skill tags (`REST API Design`, `CRUD Operations`, `Data Validation`, `API Architecture`).
- **Proof of Work Submission**: Dual submission cards for GitHub and LinkedIn URLs with instant completion feedback.

---

## Route Map

```text
/
/dashboard
/day/12
```

### Route Descriptions

- `/` — **Landing Page**: Public introduction, value proposition, "How It Works" 5-step breakdown, interactive challenge preview, FAQ accordion, and dynamic CTA (`Start Your 60 Days →` for new users, `Track Your Progress →` for returning builders).
- `/dashboard` — **Builder Dashboard**: Main hub featuring domain track selection (*Software Engineering*, *Data Science*, *Artificial Intelligence*), 60-day journey timeline, Today's Task, progress metrics, consistency streak grid, and community leaderboard.
- `/day/12` — **Day 12 Challenge Details**: Complete single-day challenge details for *Build a Task Management API*, requirements, learning outcomes, and dual GitHub & LinkedIn proof-of-work submission forms.

---

## Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS (Vanilla CSS design system tokens)
- **Motion & Icons**: Framer Motion, Lucide React
- **Routing**: React Router DOM (v7)
- **State Persistence**: Browser `localStorage` (`abtalksJourney`, `abtalks-theme`)

---

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```
