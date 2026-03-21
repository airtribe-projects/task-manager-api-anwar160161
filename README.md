````md
# Task Manager API

This is a simple Task Manager API built using Node.js and Express.  
It allows you to create, read, update, and delete tasks.

## Features

- Create a new task
- Get all tasks
- Get a task by ID
- Update a task
- Delete a task
- Basic input validation

## Tech Used

- Node.js
- Express.js

## How to Run

1. Install dependencies:
```bash
npm install
````

2. Start the server:

```bash
npm start
```

## Running Tests

```bash
npm run test
```

## API Endpoints

* **GET /tasks** → Get all tasks
* **GET /tasks/:id** → Get a single task
* **POST /tasks** → Create a task
* **PUT /tasks/:id** → Update a task
* **DELETE /tasks/:id** → Delete a task

## Example Request (POST /tasks)

```json
{
  "title": "Learn Node.js",
  "description": "Practice building APIs",
  "completed": false
}
```

## Notes

* `title` and `description` are required
* `completed` should be true or false

## Author

Anwar Shaik

