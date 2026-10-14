# EDGE Dashboard Spec

## What it does
EDGE is a responsive, static marketing operations dashboard for Aryan Sansi. It shows the current subscription plan, monthly AI credit usage, active campaigns/services, and a recommended next action.

## Key flows
- User opens the dashboard and sees Aryan's Growth Pro workspace overview with 10,000 monthly credits, 8,450 used, and 1,550 remaining.
- User opens plan management from the header, hero/profile area, or mobile navigation.
- User selects Growth Pro or Enterprise Scale; the selected card receives a lime outline.
- User confirms the selection; local UI state updates the plan, capacity, remaining credits, progress percentage, and summary, with an inline success banner and toast.

## Data and integrations
- All data is mock/static in `pages/Home.tsx`.
- No auth, database, payments, or third-party integrations are used.
- No seeded accounts or credentials.

## Visual direction
Editorial dark dashboard with electric lime accents, Outfit headings, Inter body copy, dense but spacious cards, and responsive mobile navigation.