# effective-planner
The Day Planner project is a MERN stack application developed to help users efficiently organize and manage their daily events. This application enables users to log in and view all scheduled events, fostering better planning and coordination, while restricting the creation, update, and deletion of events to the user’s own entries.

# MERN Calendar

Calendar web application for adding, editing, deleting or listing other people's events. Developed using the MERN stack.

*API, CRUD, Auth system, JWT, Redux, Calendar.*



<img src="./preview.jpeg">

### Table of contents 📃

- [MERN Calendar](#mern-calendar)
    - [Table of contents 📃](#table-of-contents-)
  - [Starting 🚀](#starting-)
    - [Pre-requirements 📋](#pre-requirements-)
    - [Installation 🔧](#installation-)
  - [Deployment 📦](#deployment-)
  - [Built with 🛠️](#built-with-️)

## Starting 🚀
  
### Pre-requirements 📋

* [Git](https://git-scm.com/)
* [npm](https://www.npmjs.com/)
* [Mongo database](https://www.mongodb.com/)

### Installation 🔧

Local installation:

```bash
# Clone this repository
$ git clone https://github.com/KUNJGOHIL/effective-planner/tree/main

# Change directory to the project path
$ cd mern-calendar
```

---

**Server setup:**
```bash
# Change directory to the server path
$ cd server

# Install dependencies
$ npm install

# Copy .env file
$ cp .env.example .env
```

**Client setup:**
```bash
# Go back to the project path
$ cd ..

# Change directory to the client path
$ cd client

# Install dependencies
$ npm install

# Copy .env file
$ cp .env.example .env
```

client **.env** file setup:

```shell
REACT_APP_API_URL="http://localhost:5000/api"
```

## Deployment 📦

```bash
# Open terminal in project path and run
$ cd server
$ npm start


# Open another terminal in project path and run
$ cd client
$ npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Built with 🛠️

* [React](https://es.reactjs.org/) - Frontend framework
* [React Redux](https://react-redux.js.org/) - State management
* [Node.js](https://nodejs.org/) - Javascript runtime environment
* [Express.js](https://expressjs.com/) - Backend framework
* [MongoDB](https://www.mongodb.com/) - NoSQL database
