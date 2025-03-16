# Quiz Application

Quiz is an interactive web application built with Next.js that allows users to take quizzes in multiple languages. The app supports localization, dynamic question navigation, and user progress tracking.

## Features

- Multi-language support: Choose from English, French, German, or Spanish.
- Interactive questions: Answer single-select, multiple-select, or bubble-type questions.
- Progress tracking: Track your progress with a progress bar and question counter.
- Form validation: Powered by React Hook Form and Zod for seamless and accurate input handling.
- Database Simulation:
  -- For testing purposes, the "database" is simulated using localStorage.
  --All quiz data, including user answers, is stored in localStorage, allowing users to resume their progress even after refreshing the page.
- REST API Simulation:
  -- To mimic REST API requests, the app uses TanStack Query.
  -- TanStack Query also acts as a state manager, handling data fetching, caching, and synchronization with the UI.
- Client-Side Validation:
  -- If a user tries to manually navigate to a specific question (e.g., by changing the URL) without providing answers to previous questions, they will be redirected to the first question.
  -- The same validation applies to the email input page and the thank-you page. If the user hasn't completed the quiz or provided an email, they will be redirected to the appropriate step.
  -- This validation happens on the client side because the app uses localStorage as a simulated database.
  -- Note: If a real database were integrated, this validation would ideally be performed on the server side for enhanced security and reliability.
- CSV download: Download your quiz answers in a CSV file.
- Responsive design: Optimized for all devices with Tailwind CSS.
- Internationalization support: Seamless localization with next-intl.

## Live Demo

Experience the Quiz application in action! Visit the live demo to take a quiz, test the multi-language support, and explore all the features:
🔗 <a href="https://quiz-pi-gold.vercel.app/en" target="_blank" rel="noopener noreferrer">https://quiz-pi-gold.vercel.app/en</a>

## Getting Started

To run the project locally, execute the following commands:

```bash
pnpm i
pnpm dev
```

To build and run the production version, use:

```bash
pnpm i
pnpm build
pnpm start
```

## Tech Stack

- Next.js
- TypeScript
- Motion
- Tanstack Query
- React Hook Form
- Zod
- next-intl
- Tailwind CSS
- Papaparse
