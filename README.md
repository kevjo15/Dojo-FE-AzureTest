# Dojo FE - Frontend React TypeScript with Tailwind CSS

This project is the frontend solution for interacting with the
[Dojo BE - Backend C# ASP.NET Core Web API](https://github.com/InFiNet-Code-AB/Dojo-BE). It is built using
[React](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/) for a modern, scalable, and maintainable
web application. The frontend leverages [Tailwind CSS](https://tailwindcss.com/) for styling, ensuring a responsive
and visually appealing user interface.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Technologies](#technologies)
- [Features](#features)
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

- **public**: Contains static assets like images and fonts.
- **src**: Contains the source code of the application.
  - **Components**: React components used throughout the application.
  - **Containers**: Higher-level components that manage state and interact with the backend.
  - **Services**: Services for making API calls to the backend.
  - **Styles**: Contains Tailwind CSS configuration and custom styles.
- **Tests**: Contains unit and integration tests for the application.

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

## Code Conventions

Follow the code style and conventions defined in `.eslintrc`. Use `npm run lint` to check for linting errors.
