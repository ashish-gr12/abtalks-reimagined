# AI Usage Log

## Day 1

### Prompt 1

### Goal
Establish a dedicated project workspace with persistent context, development guidelines, and hackathon constraints so all future discussions remain consistent throughout the project.

### AI Tool
ChatGPT (GPT-5.5)

### Prompt
> Create a dedicated project context for the ABTalks Reimagined hackathon. Treat this conversation as the project's single source of truth and act as a long-term product strategist, UI/UX mentor, frontend architect, and hackathon mentor. Consider the official problem statement, product vision, target users, technology stack, design principles, development workflow, Git strategy, and project expectations in all future responses.

### AI Output

- Established a persistent project context for the entire conversation.
- Defined the assistant's role as a product strategist, UI/UX mentor, frontend architect, and hackathon advisor.
- Incorporated the hackathon problem statement, product vision, target audience, and technical constraints into future guidance.
- Set development principles emphasizing reusable components, product thinking, maintainability, and polished user experience.
- Established Git workflow recommendations and hackathon-focused development priorities.
- Configured future responses to build upon previous decisions instead of restarting discussions.

### Manual Changes

- Refined the project vision and development priorities during implementation.
- Used the established context as the reference for all subsequent planning and development discussions.
- Adapted recommendations based on evolving project requirements and team decisions.

### Reason for Using AI

To establish a consistent project context that enables continuous, context-aware guidance throughout the hackathon, ensuring all future product, design, and engineering decisions remain aligned with the project goals and competition requirements.

### Prompt 2

### Goal
Understand and document the official hackathon problem statement for ABTalks Reimagined so all future design and development decisions align with the competition requirements.

### AI Tool
ChatGPT (GPT-5.5)

### Prompt
> Review and analyze the official ABTalks Reimagined hackathon problem statement. Summarize the mandatory requirements, target users, required routes, expected features, design constraints, submission requirements, judging expectations, edge cases, and technical scope. Explain how these requirements should influence the product strategy, UI/UX decisions, and overall development approach for the project.

### AI Output

- Analyzed the complete hackathon problem statement.
- Identified the three mandatory routes:
  - `/`
  - `/dashboard`
  - `/day/12`
- Summarized the target audience, user journey, and primary pain points.
- Extracted the required functionality for each screen.
- Highlighted important constraints such as mobile-first design, mocked data, and the exclusion of backend and authentication.
- Explained the judging expectations and recommended focusing on product thinking, motivation, usability, and polish over feature quantity.
- Identified key edge cases including first-day users, missed streaks, and empty profiles.
- Established the problem statement as the project's guiding reference for future product, design, and engineering decisions.

### Manual Changes

- Adopted the problem statement as the project's primary reference document.
- Incorporated the extracted requirements into the project planning process.
- Prioritized features and UX decisions based on the documented constraints and judging criteria.

### Reason for Using AI

To thoroughly understand and consolidate the official hackathon requirements into a structured product strategy, ensuring that all future design and development decisions remain aligned with the competition objectives and evaluation criteria.


### Prompt 3

### Goal
Plan a clean, scalable, and hackathon-friendly frontend folder structure for the ABTalks Reimagined project, ensuring it aligns with the problem statement, technology stack, and 48-hour development timeline.

### AI Tool
ChatGPT (GPT-5.5)

### Prompt
> Suggest a clean and maintainable folder structure for the ABTalks Reimagined project based on the hackathon problem statement. The project uses React, Vite, Tailwind CSS, Framer Motion, Lucide React Icons, and mock JSON data. It should be optimized for a two-person team, mobile-first development, reusable components, and rapid implementation during a 48-hour hackathon.

### AI Output
- Proposed a feature-oriented and scalable folder structure.
- Organized reusable UI components into common, layout, landing, dashboard, and challenge modules.
- Separated route-level pages from reusable components.
- Suggested a dedicated data folder for mock JSON files.
- Included folders for custom hooks, utility functions, global styles, and assets.
- Recommended a clean routing structure matching the required three routes.
- Explained the purpose and benefits of each major directory.
- Provided a suggested component hierarchy to improve maintainability and development speed.

### Manual Changes
- Adapted the folder structure to suit the team's workflow.
- Renamed or reorganized folders/components where necessary.
- Added or removed components based on evolving UI requirements.
- Integrated the structure into the project's initial setup.

### Reason for Using AI
To quickly establish a well-organized project architecture that supports efficient collaboration, reusable components, and rapid frontend development while adhering to the hackathon's constraints.


### Prompt 4

### Goal
Establish the development guidelines and priorities for the remainder of the ABTalks Reimagined project, ensuring all future implementation decisions align with the hackathon requirements and evaluation criteria.

### AI Tool
ChatGPT (GPT-5.5)

### Prompt
> For the remainder of the ABTalks Reimagined project, consider the official hackathon constraints as the primary development guidelines. Prioritize a mobile-first (390px) experience, implement only the three required routes (`/`, `/dashboard`, `/day/12`), focus on UI and UX before backend functionality, use mocked JSON data, handle the required edge cases, and recommend solutions that maximize product quality and hackathon impact within a 48-hour development timeline.

### AI Output

- Established the official hackathon requirements as the project's permanent development baseline.
- Prioritized mobile-first design with 390px as the primary viewport and desktop as a secondary enhancement.
- Confirmed development will focus exclusively on the three required routes.
- Defined UI polish, user experience, and product thinking as higher priorities than backend functionality.
- Recommended handling required edge cases such as first-day users, missed streaks, and empty profiles.
- Established reusable component architecture and maintainable frontend development practices.
- Defined animation and interaction guidelines emphasizing subtle, purposeful micro-interactions.
- Aligned all future recommendations with the judging criteria and realistic implementation scope for a 48-hour hackathon.

### Manual Changes

- Adopted these guidelines as the project's ongoing development standards.
- Used the established priorities to guide feature selection, UI decisions, and implementation planning.
- Referenced these principles throughout the project's development lifecycle.

### Reason for Using AI

To define a consistent development strategy that keeps all future product, design, and engineering decisions aligned with the official hackathon requirements, enabling a focused, polished, and competitive final submission.

### Prompt 5

### Goal
Create a reusable project context prompt for Codex so it understands the project's folder structure, technology stack, architecture, and development constraints before generating code.

### AI Tool
ChatGPT (GPT-5.5)

### Prompt
> Create a Codex bootstrap prompt that explains the project folder structure, overall tech stack, architecture, design philosophy, coding principles, and development constraints so future code generation remains consistent with the project.

### AI Output

- Generated a comprehensive Codex bootstrap prompt.
- Documented the technology stack, project architecture, and folder structure.
- Explained the design philosophy and coding principles.
- Defined routing constraints and implementation expectations.
- Included reusable component guidelines and Framer Motion usage.
- Configured Codex to generate production-ready React code without altering the existing architecture.

### Manual Changes

- Updated the folder structure to match the latest project organization.
- Adjusted the listed technologies where required.
- Used the prompt as the base context for future Codex development sessions.

### Reason for Using AI

To create a reusable initialization prompt that provides Codex with sufficient project context, reducing repetitive instructions and ensuring consistent code generation throughout development.

---

### Prompt 6

### Goal
Create a dedicated project context prompt that gives Codex a complete understanding of the product vision, users, scope, and development philosophy before implementation begins.

### AI Tool
ChatGPT (GPT-5.5)

### Prompt
> Create a Project Context prompt for Codex that explains the project overview, product vision, target users, project scope, required routes, design priorities, and development philosophy for ABTalks Reimagined.

### AI Output

- Generated a reusable Project Context prompt for Codex.
- Explained the product vision and hackathon objective.
- Documented the target audience and their pain points.
- Defined the required application routes.
- Specified the project's scope and mobile-first design philosophy.
- Established development priorities focused on simplicity, motivation, accessibility, and premium user experience.

### Manual Changes

- Refined the project vision where necessary.
- Updated the context as project decisions evolved.
- Reused the prompt as the primary onboarding context for new AI coding sessions.

### Reason for Using AI

To establish a consistent product understanding across AI-assisted development sessions, ensuring future implementation remains aligned with the project's vision and hackathon objectives.

---

### Prompt 7

### Goal
Generate a detailed implementation prompt for designing and developing the Landing Page Hero section based on the ABTalks product vision and target audience.

### AI Tool
ChatGPT (GPT-5.5)

### Prompt
> Create a Codex prompt to design and implement a premium, mobile-first Hero section for the ABTalks Reimagined landing page. The Hero should clearly communicate the value of the 60-day coding challenge, motivate Indian college students to begin the journey, and follow the project's design principles and technology stack.

### AI Output

- Generated a comprehensive Codex implementation prompt for the Hero section.
- Defined the product context and user goals.
- Specified the required Hero content and visual hierarchy.
- Included design style, mobile-first requirements, and UI inspiration.
- Added implementation guidelines for React, Tailwind CSS, Framer Motion, and reusable components.
- Emphasized production-quality, accessible, and maintainable frontend code.

### Manual Changes

- Refined the Hero messaging and branding.
- Updated CTA text and visual content based on design exploration.
- Adjusted component structure during implementation.

### Reason for Using AI

To create a structured implementation prompt that enables Codex to generate a polished, reusable Hero section while remaining aligned with the project's product vision, design language, and hackathon constraints.