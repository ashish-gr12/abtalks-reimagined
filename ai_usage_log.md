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

### Day 2 

### Prompt 7

### Goal
Implement the first section of the ABTalks Reimagined landing page as a premium, mobile-first experience at 390px, while maintaining the visual language of the existing ABTalks website.

### AI Tool
Codex

### Prompt
> Implement only the first section of the ABTalks Reimagined Landing Page (`/`) using the existing React + Vite + Tailwind CSS v4 + Framer Motion + Lucide React setup.
>
> Use the provided ABTalks website screenshot as visual inspiration for the dark premium design language, including typography, purple accents, subtle gradients, borders, rounded cards, and spacing.
>
> The section should contain:
>
> - An ABTalks introduction explaining that the platform helps students learn, build skills, showcase their work, improve consistency, and become visible to recruiters.
> - A 60-Day Coding Challenge introduction explaining the daily build, GitHub submission, LinkedIn submission, and career value.
> - A primary "Start Your 60 Days" button that navigates to `/dashboard`.
> - A secondary "See How It Works" button that smoothly scrolls to the future `#how-it-works` section.
> - A right-side sample challenge/progress card showing current streak, today's challenge, GitHub submission, LinkedIn submission, progress through 60 days, and a motivational quote.
>
> The implementation must be mobile-first with **390px as the primary design viewport**. The desktop two-column layout should become an intentional vertical layout on mobile rather than simply shrinking the desktop version.
>
> Ensure there is no horizontal overflow, clipped content, overlapping buttons, or unreadable text at 390px.
>
> Use subtle Framer Motion animations and reusable React components. Reuse the existing project architecture and do not modify unrelated files.
>
> Implement only this first section and do not build the remaining landing-page sections yet.
>
> After implementation, verify the UI at 390px and desktop, check routing, responsiveness, overflow, and console errors.

### AI Output
- Implemented the first Landing Page section using the existing React architecture.
- Added the ABTalks introduction and 60-Day Coding Challenge content.
- Added primary and secondary CTA buttons.
- Added the sample challenge/progress card with streak, daily challenge, GitHub, LinkedIn, progress, and motivational content.
- Applied the existing ABTalks-inspired dark/purple visual language.
- Added responsive behavior with 390px as the primary viewport.
- Added subtle animations using Framer Motion.
- Connected the primary CTA to `/dashboard` and the secondary CTA to the future `#how-it-works` section.

### Manual Changes
- Reviewed the generated UI at 390px and adjusted spacing, sizing, typography, and alignment where necessary.
- Refined visual details to better match the desired ABTalks design language.
- Adjusted content and component styling based on the overall landing-page architecture.
- Verified that the section remains usable and visually balanced on mobile.

### Reason for Using AI
To accelerate the implementation of the first landing-page section while maintaining consistency with the existing ABTalks visual style and the project's mobile-first 390px requirement.

### Prompt 8

### Goal
Reduce the excessive vertical spacing between the top navigation/header and the first hero content section of the ABTalks Reimagined landing page, while preserving the existing internal spacing and layout of the hero.

### AI Tool
Codex

### Prompt
> Refine the existing ABTalks Reimagined Landing Page by reducing only the excessive vertical space between the top navigation/header and the entire hero section.
>
> Do not change the internal spacing between the About ABTalks content, 60-Day Coding Challenge content, CTA buttons, or challenge preview card.
>
> The primary target is exactly 390px. Reduce the unnecessary empty space below the header so the hero content begins earlier in the viewport while maintaining comfortable breathing room.
>
> Inspect the existing implementation first and identify the actual margin, padding, section spacing, or layout property responsible for the header-to-hero gap. Modify the smallest possible part of the existing implementation rather than using arbitrary negative margins.
>
> Preserve the existing ABTalks visual design, content, routing, hero card, and responsive behavior.
>
> Verify the result at 390px and desktop, ensuring there is no overlap, clipping, or horizontal overflow.

### AI Output

- Identified the spacing responsible for the excessive gap between the header and hero section.
- Reduced the header-to-hero vertical spacing.
- Preserved the internal spacing and layout of the hero content.
- Maintained the existing ABTalks visual style and responsive behavior.
- Verified the landing page at the primary 390px mobile viewport.

### Manual Changes

- Reviewed the updated spacing at 390px.
- Confirmed that the hero content remains visually balanced and readable.
- Fine-tuned spacing if necessary to achieve the desired compact appearance.

### Reason for Using AI

To quickly identify and refine the layout spacing responsible for unnecessary vertical whitespace while preserving the existing UI structure and mobile-first design.

### Prompt 9

### Goal
Add a compact highlighted information block to the 60-Day Coding Challenge section explaining that students can choose a track for their 60-day journey.

### AI Tool
Codex

### Prompt
> Add a small highlighted information block inside the existing **60-Day Coding Challenge** section of the ABTalks Reimagined Landing Page.
>
> The block should communicate:
>
> **"Choose one track for your 60-day journey."**
>
> Available tracks:
> - Software Engineering
> - Data Science
> - Artificial Intelligence
>
> Place the block between the existing challenge description and the CTA buttons.
>
> Keep it compact and visually integrated with the existing ABTalks design. Use a dark elevated surface, subtle purple/indigo accent, thin border, rounded corners, and compact spacing.
>
> The tracks are informational only at this stage. Do not make them interactive or add new routes, backend functionality, authentication, or selection state.
>
> The primary design target is exactly **390px**. Ensure all three tracks remain clearly readable without horizontal overflow or making the block unnecessarily tall.
>
> Do not redesign the existing hero section, move the challenge preview card, change CTA functionality, modify routing, or alter unrelated sections.
>
> Inspect the existing implementation first and make the smallest necessary changes. Reuse existing components and styling where possible.
>
> After implementation, verify the result at 390px and desktop and ensure the new block feels like a natural part of the existing UI.

### AI Output

- Added a highlighted track-selection information block to the 60-Day Coding Challenge section.
- Added the three available tracks:
  - Software Engineering
  - Data Science
  - Artificial Intelligence
- Styled the block to match the existing ABTalks dark/purple visual language.
- Kept the block compact and optimized for the 390px mobile viewport.
- Kept the tracks informational and non-interactive.
- Preserved the existing hero layout, CTA functionality, routing, and challenge preview card.

### Manual Changes

- Reviewed the new block at 390px.
- Adjusted spacing, typography, and sizing where necessary.
- Ensured the highlighted block integrates naturally with the existing hero content.
- Verified that the addition does not create horizontal overflow or excessive vertical spacing.

### Reason for Using AI

To quickly implement a visually consistent product-information element while maintaining the existing landing-page architecture and mobile-first design requirements.

### Prompt 10

### Goal
Refine the ABTalks Reimagined navbar by replacing the existing logo with the provided AB TALKS handwritten-style logo, adding a dark/light theme toggle, and adding a subtle bottom border while maintaining the mobile-first 390px design.

### AI Tool
Codex

### Prompt
> Refine only the existing navbar of the ABTalks Reimagined project.
>
> Replace the current navbar logo/text with a logo matching the provided AB TALKS reference image:
> - Handwritten/brush-style appearance
> - White/light logo in dark mode
> - Compact horizontal proportions
> - Clear visibility at 390px
>
> Reuse an existing matching logo asset if available. Otherwise, add the provided logo appropriately to the project's assets without embedding a large base64 image.
>
> Add a compact dark/light theme toggle to the navbar using Lucide React icons.
>
> Requirements:
> - Dark mode must remain the default.
> - Light mode should use a clean white/off-white background with dark text and subtle borders.
> - Preserve the existing purple/indigo accent system.
> - Do not simply invert colors; make the light theme visually intentional.
> - Persist the selected theme using localStorage.
> - Restore the selected theme after page refresh.
> - Use a key such as `abtalks-theme`.
>
> Add a subtle 1px, theme-aware bottom border to the navbar to visually separate it from the landing-page content.
>
> The primary design target is exactly 390px:
> - No horizontal overflow.
> - Logo must remain clearly visible.
> - Theme toggle must remain comfortably tappable.
> - Existing navbar actions must not overlap.
> - Maintain appropriate mobile spacing.
>
> Preserve all existing routes and functionality:
> - `/`
> - `/dashboard`
> - `/day/12`
>
> Do not add authentication, backend functionality, database functionality, new routes, or unnecessary dependencies.
>
> Use the existing React, Vite, Tailwind CSS v4, and Lucide React setup.
>
> Inspect the existing navbar and theme implementation before modifying files. Reuse existing architecture and avoid changing unrelated components.
>
> After implementation:
> 1. Test at exactly 390px.
> 2. Verify the logo appearance.
> 3. Verify dark mode is the default.
> 4. Verify light mode.
> 5. Verify theme persistence after refresh.
> 6. Verify the navbar bottom border.
> 7. Check desktop responsiveness.
> 8. Check for horizontal overflow and console errors.

### AI Output
- Replaced the existing navbar branding with the AB TALKS handwritten-style logo.
- Added a dark/light theme toggle using Lucide React icons.
- Kept dark mode as the default theme.
- Added light-theme styling while preserving the ABTalks visual identity.
- Added localStorage persistence for the selected theme.
- Added a subtle theme-aware bottom border to the navbar.
- Preserved the existing routes and navbar functionality.
- Verified the navbar responsiveness at the 390px mobile viewport.

### Manual Changes
- Reviewed the navbar against the provided AB TALKS logo reference.
- Adjusted logo sizing and spacing for the 390px viewport.
- Refined the theme toggle positioning and touch area.
- Adjusted border visibility and navbar spacing to match the existing design.
- Verified that both themes remain visually consistent with the ABTalks design language.

### Reason for Using AI
To efficiently implement a reusable, responsive navbar refinement with theme support while maintaining the existing ABTalks visual identity and mobile-first requirements.