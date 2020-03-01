# Redux-Feedback-Loop

This full-stack react application collects sequential feedback from users. One component/question is displayed at a time, and upon clicking 'next', the selection/comment for that question is stored in reduxStore. Users can go back and edit choices/comments, and review feedback before submitting it. Submitted feedback is stored in a database. After feedback is submitted, user is prompted to leave new feedback, and the page resets.

This weekend challenge was a chance to practice full-stack react, react routers, redux states, and Material UI styling.


## Technologies Used

- React
- Redux
- Node
- Express
- HTML/CSS
- SQL

## Dependencies
- axios
- pg
- react
- react-dom
- react-redux
- react-router-dom
- redux
- redux-logger
- react-scripts

## Database Setup

```SQL

-- Database should be prime_feedback
CREATE DATABASE "prime_feedback";

-- Switch to "prime_feedback" before making:
-- Table to store the feedback
CREATE TABLE "feedback" (
  "id" serial primary key,
  "feeling" INT not null,
  "understanding" INT not null,
  "support" INT not null,
  "comments" text,
  "flagged" boolean default false,
  "date" date not null default CURRENT_DATE
); 

-- Sample feedback item
INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
VALUES (4, 4, 5, 'Doing Great!');


```

## What it does:

- `GET /tasks/:path` returns all tasks, in the order specified (or if none is specified, from first created to latest created)

- `POST /tasks` takes user input from the DOM and sends a task object to the database.

- `PUT /tasks/<id>` updates the task's completion status to 'true', which changes its class name to 'completed-true', which changes how it is displayed in the browser.

- `DELETE /tasks/<id>` Deletes a specific task, identified with a data attribute connected to the delete button clicked.

