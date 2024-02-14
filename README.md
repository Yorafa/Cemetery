# Backend

Backend is a Express.js server that serves the frontend and provides an API for the frontend to interact with the database.

The database is a local MongoDB instance.

## Setup

1. Install `Node.js`, `npm`, and then check the `config.js` file to make sure the `port` and `db` are correct.
   - if use local mongodb server with docker: `docker run -d -p 27017:27017 --name mongodb mongo`
   - if otherwise, change the `db` related to the correct connection string
2. Run `npm install` to install the dependencies