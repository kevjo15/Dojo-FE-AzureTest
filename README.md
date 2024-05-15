`# Dojo FE - Frontend React TypeScript with Tailwind CSS

This project is the frontend solution for interacting with the
[Dojo BE - Backend C# ASP.NET Core Web API](https://github.com/InFiNet-Code-AB/Dojo-BE). It is built using
[React](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/) for a modern, scalable, and maintainable
web application. The frontend leverages [Tailwind CSS](https://tailwindcss.com/) for styling, ensuring a responsive
and visually appealing user interface. This project is powered by [Vite](https://vitejs.dev/), enhancing the development
experience with fast build times and efficient bundling.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Technologies](#technologies)
- [Features](#features)
- [Testing](#testing)
- [Contributing](#contributing)
- [Code Conventions](#code-conventions)

## Getting Started

To get started with this project, you'll need to have Node.js and npm installed on your machine. You can download them
from the [official Node.js website](https://nodejs.org/).

### Prerequisites

- Node.js (LTS version recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies using `npm install`.
4. Start the development server using `npm run dev`.

## Project Structure

This project is structured to support scalability and maintainability:

- `public/`: Contains static assets like images and fonts.
- `src/`: Contains the source code of the application.
  - `components/`: React components used throughout the application.
    - `common/`: Shared components used across different parts of the application
    - `features/`: Feature-specific components, tailored to individual functionalities within the app.
  - `constants/`: Constants used throughout the application, such as API endpoints.
  - `services/`: Services for making API calls to the backend.
  - `types/`: TypeScript type definitions and interfaces.
  - `utils/`: Utility functions and helpers that are used across various parts of the application for common tasks.
  - `App.tsx`: The main component that wraps around the entire application, typically including routing and layout configurations.
  - `index.css`: Global stylesheets.
  - `main.tsx`: The entry point of the React application, where the root component (App) is rendered into the DOM.
- `.eslintrc.cjs`, `jest.config.js`, `package-lock.json`, `postcss.config.js`, `setupTests.ts`, `tailwind.config.js`,
  `tsconfig.json`, `tsconfig.node.json`, `vite.config.ts` - settings for various tools and libraries used in the project,
  including ESLint for linting, Jest for testing, PostCSS for processing CSS, Tailwind CSS for styling, TypeScript for static typing,
  and Vite for building and serving the application.
- `package.json`: Lists the project's dependencies, scripts, version, and other metadata.

## Technologies

- **React**: For building the user interface.
- **TypeScript**: For static typing and better developer experience.
- **Tailwind CSS**: For utility-first CSS framework to build responsive designs.
- **Axios**: For making HTTP requests to the backend API.

## Features

- **User Authentication**: Secure login and registration system.
- **Course Management**: Teachers can create, update, and delete courses.
- **Course Viewing**: Students can view and learn from courses.
- **Responsive Design**: Tailored for various screen sizes.

## Testing

The project uses Jest for testing. To run the test suite, execute `npm test` in your terminal. This command will run all
the tests written for the application. To run specific tests, execute `npm test {path, folder or test file name}` in your
terminal.

## Code Conventions

Follow the code style and conventions defined in `.eslintrc`. Use `npm run lint` to check for linting errors.
