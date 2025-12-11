# Assignment Frontend Quiz - Wedding Company

This project is a frontend assignment for a quiz application tailored for a wedding company. It is built using **Next.js**, **TypeScript**, **TailwindCSS**, and other modern web development tools. It is deployed publicly and can be visible at [quiz-wedding-company.vercel.app](https://quiz-wedding-company.vercel.app/)

## Features

- Interactive quiz interface with custom animations and styles.
- Responsive design for various devices.
- Theme support with light and dark modes.
- TailwindCSS for styling and utility-first design.
- TypeScript for type safety and better developer experience.

## Key Features Implemented

- Fully functional quiz interface with multiple-choice questions.
- Dynamic progress bar to indicate quiz completion.
- Responsive design for mobile, tablet, and desktop devices.
- Light and dark theme support.
- Custom animations for quiz transitions and interactions.
- Form validation using React Hook Form and Zod.
- Accessible UI components using Radix UI.

## Assumptions Made

- The quiz consists of multiple-choice questions only.
- Users can navigate through questions sequentially.
- The application does not require backend integration for quiz data.
- The design follows a minimalistic and modern approach.

## Time Spent on the Assignment

- Approximately **11 hours** were spent on the assignment, including:
  - **3 hours** for setting up the project and configuring dependencies.
  - **5 hours** for implementing the quiz functionality and UI components.
  - **3 hours** for styling, animations, and testing.

## Prerequisites

Ensure you have the following installed:

- **Node.js** (>= 18.0.0)
- **pnpm** (or npm/yarn)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ReaThomas/Assignment-Frontend-Quiz-Wedding-Company.git
   cd Assignment-Frontend-Quiz-Wedding-Company
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Development

To start the development server:

```bash
npm run dev
```

This will start the Next.js development server. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Build

To build the project for production:

```bash
npm build
```

The output will be available in the `.next` directory.

## File Structure

- **`/app`**: Contains the main application files, including global styles.
- **`/components`**: Reusable UI components.
- **`/lib`**: Utility functions and libraries.
- **`/hooks`**: Custom React hooks.
- **`/public`**: Static assets like images and fonts.

## Configuration

### TailwindCSS

The TailwindCSS configuration is located in `tailwind.config.js`. Global styles are defined in `app/globals.css`.

### TypeScript

TypeScript configuration is in `tsconfig.json`. Type definitions are included in `next-env.d.ts`.

### Next.js

The Next.js configuration is in `next.config.mjs`.

## Customization

### Theme

The project supports light and dark themes. You can customize theme colors in `app/globals.css`.

### Quiz-Specific Styles

Quiz-specific styles and animations are defined in the `@layer utilities` section of `app/globals.css`.

## Dependencies

### Key Dependencies

- **Next.js**: Framework for React applications.
- **TailwindCSS**: Utility-first CSS framework.
- **TypeScript**: Static type checking.
- **Radix UI**: Accessible UI primitives.
- **React Hook Form**: Form handling library.

### Dev Dependencies

- **PostCSS**: CSS processing.
- **ESLint**: Linting tool.
- **Prettier**: Code formatter.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Radix UI](https://www.radix-ui.com/)
