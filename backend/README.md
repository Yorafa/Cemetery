# Backend

Backend is a Express.js server that serves the frontend and provides an API for the frontend to interact with the database.

The database is a local MongoDB instance.

## Setup

1. Install Node.js and npm
2. Install MongoDB, double check your MongoDB name
   - if use docker: `docker run -d -p 27017:27017 --name mongodb mongo`
3. Run `npm install` to install the dependencies