# ScreenCompare

ScreenCompare is a web application that helps users compare the sizes of different screens. This tool is useful for developers, designers, and anyone who works with displays of various sizes and resolutions.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Database](#database)
- [Contributions](#contributions)
- [License](#license)

## Features

- **Screen Comparison**: Users can input the size, resolution, and choose the units (inches or centimeters) of two or three screens. The application will then compare the screens and display a comparison table along with a visual representation.
- **Common Screens**: The application includes a list of common screens (like popular mobile devices, monitors, and TVs, or screens often compared by users - retrieved from Firestore) for easy comparison.
- **Accessibility**: The application is keyboard accessible. Users can navigate through the application using the Tab key, and inputs are appropriately managed for accessibility.
- **Dark Mode**: Users can switch between light and dark modes according to their preference. Theme is at first automatically set based on the user's system settings. The application will remember the user's preference and apply it on the next visit.
- **Automated Testing**: The application is set up with Vitest for unit testing, and Cypress for end-to-end testing.
- **Progressive Web App**: This application is a PWA, allowing users to install it on their devices for offline usage.

## Technologies

- HTML/SCSS/JS
- Vite.js
- Firebase (Firestore Database, Hosting, Anonymous Auth)
- reCAPTCHA v3
- Vitest
- Cypress
- Ko-fi: A platform to receive donations
- **Other notable packages**:
  - tippy.js: A highly customizable tooltip and popover library
  - js-sha256: A simple SHA-256 hash function for JavaScript
  - @hotjar/browser: A Hotjar tracking code

## Setup

To run this project, you'll need Node.js and npm installed on your computer.

After cloning the repository, install the dependencies by running:

```bash
npm install
```

This project uses the following npm scripts:

- `npm run dev`: Starts the development server on port _4173_
- `npm run build`: Creates a production build
- `npm run preview`: Serves the production build on port _5173_
- `npm run test`: Runs the Vitest tests
- `npm run coverage`: Runs the Vitest tests and generates a coverage report
- `npm run cy:open`: Opens the Cypress Test Runner
- `npm run cy:run`: Runs the Cypress tests in the command line
- `npm run cy:run-record`: Runs the Cypress tests in the command line and records the results in the cloud

## Database

Firestore Database is used to store and retrieve the data. The application uses anonymous authentication for accessing Firestore.

A Firestore utility module (`firestore.js`) is used to handle all database operations, which include:

- Fetching the popular screens data.
- Saving the forms screen data.

These operations are called within the application logic, such as when a user decides to compare screens or view the most popular screens.

## Contributions

This project is currently not open to contributions, it will be later this year.

## License

This project is protected under a proprietary license. Please do not copy, modify, or distribute the code without the owner's permission.
