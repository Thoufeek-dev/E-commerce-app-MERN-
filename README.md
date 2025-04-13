# MERN E-commerce Website

A simple e-commerce website built using the MERN stack (MongoDB, Express, React, Node.js).

## Technologies Used

- **Frontend**: React 18, Vite, Chakra UI
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **State Management**: Custom store implementation

## Prerequisites

- Node.js v20 or higher
- MongoDB (local installation or connection to MongoDB Atlas)
- npm 

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Thoufeek-dev/mern-ecommerce
   cd mern-ecommerce
   ```

2. Install all dependencies (backend and frontend):
   ```bash
   npm run install:all
   ```

## Configuration

1. Create a `.env` file in the root directory with the following variables:
   ```
   PORT = 3000
   MONGO_DB_URL = mongodb://localhost:27017/
   ```

## Running the Application

To run both frontend and backend concurrently:
```bash
npm run dev
```

This will start:
- React frontend on http://localhost:5173 
- Node.js backend on http://localhost:5000

## Directory Structure

```
/
├── Client/            # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
├── Server/            # Node.js backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── package.json       # Root package.json for scripts
└── README.md
```

## Features

- Product browsing and searching
- Product details view

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Express Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Chakra UI](https://chakra-ui.com/)