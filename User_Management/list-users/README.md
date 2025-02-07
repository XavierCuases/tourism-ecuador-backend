# Tourism Ecuador Backend - User Management Microservice

This is a **Node.js microservice** for managing users in the **Tourism Ecuador** platform. The service provides functionality for managing user information stored in a **PostgreSQL** database hosted on **AWS RDS**. The microservice supports **listing users**, with the possibility to extend it further to handle other user-related actions (e.g., updating and deleting users).

## Features

- **List Users**: Fetches and returns a list of all users from the PostgreSQL database.
- **Database connection**: Connects securely to a **PostgreSQL** database hosted on **AWS RDS**.
- **CORS enabled**: Allows frontend applications to make cross-origin requests.
- **Scalable & modular**: Built to extend with other user-related functionalities (e.g., creating, updating, and deleting users).

## Tech Stack

- **Backend**: Node.js with Express
- **Database**: PostgreSQL (Hosted on AWS RDS)
- **ORM**: Sequelize (to interact with PostgreSQL)
- **CORS**: To allow frontend to make cross-origin requests
- **JWT**: For future use in user authentication (currently not implemented in this microservice)
- **Docker**: For containerization of the application

## Installation

Follow the steps below to set up and run the project locally.

### 1. Clone the repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/XavierCuases/tourism-ecuador-backend.git
cd User_Management/list-users
