# Superhero Registry

## Overview

This project consists of a simple Node.js API and a React frontend (styled with Tailwind CSS) that allows users to add superheroes (with their name, superpower, and a humility score) and view them sorted by humility in descending order.

## Backend

- **Endpoints:**
  - `POST /superheroes`: Add a new superhero.
  - `GET /superheroes`: Get the list of superheroes sorted by humility.
- **Validation:** Ensures that the humility score is a number between 1 and 10.
- **Testing:** Includes Jest tests using Supertest.

## Frontend

- **Built with React and Tailwind CSS.**
- Provides a form to add new superheroes.
- Displays the superheroes list in real time.

## How I Would Collaborate with a Teammate

I believe in clear communication and code reviews. I would:

- **Use version control** (Git and GitHub) to manage changes.
- **Write clear commit messages** and use feature branches.
- **Hold regular code reviews** to discuss improvements.
- **Pair-program** on complex parts to share knowledge.
- **Maintain comprehensive documentation** so everyone is on the same page.

## If I Had More Time

- **Persist Data:** Switch from an in-memory array to a real database (e.g., MongoDB or PostgreSQL or Firebase).
- **Improve Error Handling:** Add more robust error handling and logging.
- **Authentication:** Implement user authentication to restrict certain actions.
- **UI Enhancements:** Enhance the frontend design with more interactive elements.
- **Unit & Integration Testing:** Expand test coverage for both backend and frontend.
- **Deployment:** Prepare Docker containers for easier deployment and scalability.
