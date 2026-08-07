# ABTalks Reimagined — AI Prompt Library

This document contains reusable prompts used throughout the development of **ABTalks Reimagined**.

These prompts are designed for AI coding assistants such as ChatGPT, Codex, Claude Code, and similar tools.

---

# Prompt 1 — Project Context

## Purpose

Provide the AI assistant with a complete understanding of the project before any implementation begins.

## Use When

Start of every new AI coding session.

## Prompt

```text
# ABTalks Reimagined — Project Context

You are joining an ongoing frontend project called **ABTalks Reimagined**. Treat this conversation as the single source of truth for the project and maintain continuity throughout the session. Do not restart decisions or introduce conflicting approaches unless explicitly requested.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROJECT OVERVIEW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Project Name:
ABTalks Reimagined

Project Type:
Hackathon Frontend Redesign

Duration:
48-hour Hackathon

Project Goal:
Reimagine the ABTalks platform with a premium mobile-first experience that helps Indian college students successfully complete a 60-day coding challenge.

The objective is not simply to redesign the interface, but to improve the overall student experience by reducing friction, increasing motivation, and making daily progress meaningful.

Every recommendation should support this vision.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ABOUT ABTalks
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ABTalks is a 60-day coding challenge designed for Indian college students.

Students choose a learning track and maintain a public learning streak by submitting:

• GitHub Commit
• LinkedIn Post

The challenge helps students:

• Build consistency
• Develop coding discipline
• Build a public portfolio
• Increase recruiter visibility

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TARGET USERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Primary audience:

Indian college students.

Typical behavior:

• Mostly uses a mobile phone
• Opens the platform late at night after college
• Wants placements or internships
• Wants to become job-ready
• Gets demotivated easily
• Doesn't always know what to build next
• Needs encouragement more than complexity

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROJECT VISION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ABTalks Reimagined is a mobile-first coding companion.

It should motivate students to remain consistent throughout their 60-day coding journey by:

• Reducing friction
• Increasing motivation
• Making progress visible
• Building confidence
• Encouraging daily consistency

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROJECT SCOPE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Frontend only.

No backend.

No authentication.

No production database.

Mock JSON data only.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
REQUIRED ROUTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/

/dashboard

/day/12

Do not introduce additional routes unless requested.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PRIMARY DESIGN PRIORITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

390px Mobile First

Desktop is secondary.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROJECT PHILOSOPHY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Prioritize:

• Simplicity

• Clarity

• Motivation

• Reusability

• Accessibility

• Premium quality

Avoid unnecessary complexity.

Recommend only realistic solutions for a 48-hour hackathon.
```

---

# Prompt 2 — Engineering Context

## Purpose

Explain the project's frontend architecture, folder structure, technology stack, and implementation standards.

## Use When

Immediately after the Project Context prompt.

## Prompt

```text
You are joining an ongoing frontend project. Before generating any code, understand the project's architecture, design philosophy, and constraints.

TECH STACK

• React 19
• Vite
• Tailwind CSS v4
• React Router DOM
• Framer Motion
• Lucide React Icons

Mock Data

• Static JSON

Backend

• None

Authentication

• None

Database

• None

PROJECT STRUCTURE

src/

├── assets/
├── components/
│   ├── common/
│   ├── layout/
│   ├── landing/
│   ├── dashboard/
│   └── challenge/
│
├── pages/
│
├── data/
│
├── hooks/
│
├── lib/
│
├── styles/
│
├── App.jsx
├── main.jsx
└── routes.jsx

Generate production-quality React code.

Use:

• Functional components

• Tailwind utility classes

• Semantic HTML

• Reusable components

• Framer Motion only for subtle animations.

Never introduce backend functionality.

Assume all data comes from JSON.

Preserve the folder structure unless instructed otherwise.
```

---

# Prompt 3 — Hero Section

## Purpose

Generate a premium mobile-first Hero section for the Landing Page.

## Use When

Building the Landing Page Hero.

## Prompt

```text
Design and implement the Hero section for the Landing Page of ABTalks Reimagined.

ABTalks is a 60-day coding challenge for Indian college students.

Students maintain a public learning streak by submitting:

• GitHub Commit

• LinkedIn Post

The Hero should answer:

• What is ABTalks?

• Why should I join?

• Why should I trust it?

The emotional outcome should be:

"I can actually finish this challenge."

Requirements

• Mobile-first (390px)

• Premium SaaS

• Minimal

• Modern

• Friendly

Include

• Trust badge

• Strong headline

• Supporting description

• Primary CTA

• Secondary CTA

• Mobile dashboard preview

Use

React

Tailwind CSS

Framer Motion

Lucide React

Generate clean production-ready React code.

Keep the component reusable.
```

---

# Future Prompt Sections

The following prompts will be added as development progresses.

- Prompt 4 — Design System
- Prompt 5 — Landing Page Features
- Prompt 6 — Dashboard
- Prompt 7 — Challenge Day
- Prompt 8 — Component Library
- Prompt 9 — Empty States
- Prompt 10 — Animations
- Prompt 11 — Accessibility
- Prompt 12 — Mobile Polish
- Prompt 13 — Final UI Review
- Prompt 14 — Performance Optimization
- Prompt 15 — README Generation