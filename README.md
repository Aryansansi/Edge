# EDGE Dashboard Spec
EDGE is a responsive, editorial dark-mode marketing operations dashboard built for **Aryan Sansi**. It allows users to monitor monthly AI credit usage, manage active campaigns and services, review recommended actions, and dynamically switch subscription plans.

## What it does
EDGE is a responsive, static marketing operations dashboard for Aryan Sansi. It shows the current subscription plan, monthly AI credit usage, active campaigns/services, and a recommended next action.

## Key flows
- User opens the dashboard and sees Aryan's Growth Pro workspace overview with 10,000 monthly credits, 8,450 used, and 1,550 remaining.
- User opens plan management from the header, hero/profile area, or mobile navigation.
- User selects Growth Pro or Enterprise Scale; the selected card receives a lime outline.
- User confirms the selection; local UI state updates the plan, capacity, remaining credits, progress percentage, and summary, with an inline success banner and toast.

## Technologies Used

* **HTML5 & CSS3:** Semantic layout, layout grid structure, and custom styling.
* **Tailwind CSS v4:** Utility-first styling for dark mode themes, electric lime accents, dynamic progress bars, and modal overlays.
* **React 18:** Client-side component state management for handling modal dialogs, selected plans, mobile navigation toggles, and usage calculations.
* **Lucide Icons:** Vector icon library for workspace actions and service indicators.
* **Google Fonts:** Outfit (headings) and Inter (body copy).

## Data and integrations
- All data is mock/static in `pages/Home.tsx`.
- No auth, database, payments, or third-party integrations are used.
- No seeded accounts or credentials.

## Visual direction
Editorial dark dashboard with electric lime accents, Outfit headings, Inter body copy, dense but spacious cards, and responsive mobile navigation.
