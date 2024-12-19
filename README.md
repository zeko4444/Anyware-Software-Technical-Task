# Student Dashboard - Full-Stack Project

This is a full-stack web application built with **Node.js** for the backend and **React with TypeScript** for the frontend. The project provides a dashboard for students, where they can view quizzes and announcements. The application supports CRUD operations for managing quizzes and announcements and integrates **Mongoose** with **MongoDB Atlas** for database management. The frontend is designed using **Material UI (MUI)** and is fully responsive. The app also includes **i18n** for multi-language support and **Redux** for state management.

## Features

### Backend (Node.js , TypeScript , Express.js):

- **CRUD operations for quizzes and announcements**:
  - Create, Read, Update, and Delete quizzes and announcements.
- **Error Handling**:
  - Proper error handling for API requests, with clear and structured error responses.
- **MongoDB Integration**:
  - Mongoose is used to interact with the MongoDB database hosted on **MongoDB Atlas**.

### Frontend (React, TypeScript, Redux):

- **Login Form with Validation**:
  - A login form with validation to ensure proper username and password input.
  - On successful login, the user is redirected to the dashboard.
- **Dashboard**:
  - Displays quizzes and announcements dynamically fetched from the backend.
- **State Management with Redux**:
  - Redux is used for managing the application state, especially for handling the user's authentication status.
- **Internationalization (i18n)**:
  - The application supports multiple languages, allowing it to be easily translated.
- **Responsive Design**:
  - The frontend is fully responsive, ensuring it works well on both desktop and mobile devices.
- **Material UI (MUI)**:
  - Material UI components are used for a modern and user-friendly design.

## Technologies Used

- **Backend**:
  - Node.js
  - Express.js
  - TypeScript
  - MongoDB with Mongoose
  - MongoDB Atlas (for database hosting)
- **Frontend**:
  - React.js
  - TypeScript
  - Redux (for state management)
  - Material UI (for design)
  - i18n (for multi-language support)

## Getting Started

### Prerequisites

- **Node.js** and **npm** installed on your machine.
- **MongoDB Atlas** account (for cloud database hosting).

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   cd <your-project-directory>
   ```
2. Install dependencies for both frontend and backend.

#### For Backend:

```bash
cd backend
npm install
```

#### For Frontend:

```bash
cd backend
npm install
```

### Running the Application

1. Start the Backend:

```bash
cd backend
npm run dev
```

1. Start the Frontend:

```bash
cd frontend
npm run dev
```
