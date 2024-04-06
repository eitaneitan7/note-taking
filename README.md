# Simple Note-Taking App

This project is a simple note-taking application built with the MERN stack (MongoDB, Express.js, React, and Node.js). It allows users to create, view, update, and delete personal notes. This application is designed as a demonstration of a full-stack development project, integrating a React frontend with an Express and MongoDB backend.

## Features

- **Create Notes**: Users can add new notes with titles and content.
- **View Notes**: All notes are displayed in a list where any user can view them.
- **Update Notes**: Users can edit the details of existing notes.
- **Delete Notes**: Users can remove notes they no longer need.
- **Responsive Design**: The application is styled with TailwindCSS for a responsive layout that works on both desktop and mobile devices.

## Technology Stack

- **Frontend**: React, styled with TailwindCSS.
- **Backend**: Node.js and Express.js.
- **Database**: MongoDB, with Mongoose for schema definition and data management.
- **Additional Libraries**: Axios for frontend HTTP requests.

## Getting Started

### Prerequisites

- Node.js and npm installed. Download from [nodejs.org](https://nodejs.org/).
- MongoDB database. Set up locally or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a cloud-based option.

### Installation

#### Backend

1. Clone the repository and navigate to the `backend` directory:
   ```bash
   git clone https://github.com/yourGithubUsername/yourProjectName.git
   cd yourProjectName/backend

2. Install dependencies:
    npm install

3. Create a `.env` file in the `backend` directory and configure your MongoDB URI:
    MONGODB_URI=your_mongodb_uri_here

4. Start the backend server:
    nodemon server.js



#### Frontend

1. From the project root, navigate to the `frontend` directory:
    cd ../frontend

2. Install dependencies:    
    npm install

3. Start the frontend development server:
    npm run dev

4. Open http://localhost:3000 in your browser to view the application.

## Contributing

Contributions to enhance the functionality, fix bugs, or improve the documentation are welcome. Please feel free to fork the repository and submit pull requests.

## License

This project is open source and available under the [MIT License](LICENSE).

