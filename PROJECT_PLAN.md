# Incremental Portfolio Plan

The portfolio is implemented in small, reviewable slices. Each visible feature ends with `npm run build`.

1. Foundation and router shell
2. Theme system and responsive navbar
3. Recruiter-focused hero
4. About section
5. Data records for projects, experience, and skills
6. Responsive experience timeline and detail template
7. Data-driven project showcase and detail template
8. Skills, contact, and footer
9. Accessibility, responsive polish, subtle reduced-motion-safe transitions, and deployment readiness

## Content rules

- Project and experience data are the single source of truth for summaries and detail routes.
- Unknown images, URLs, outcomes, and proprietary information remain absent rather than invented.
- Resume remains unavailable until `public/resume.pdf` is added; once present, it opens in a new tab.
