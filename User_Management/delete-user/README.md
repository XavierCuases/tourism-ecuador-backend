# User Management Microservice - Delete User

This microservice is part of the **Tourism Ecuador** platform and handles the **deletion** of users. It is built using **Node.js**, **Express**, and **PostgreSQL** for data storage. This microservice allows you to delete a user from the database via the API.

## Features

- **Delete User**: Allows you to delete a user from the database using their **ID**.
- **CORS enabled**: The microservice supports cross-origin requests.
- **API Documentation**: The API documentation is available through **Swagger UI** at `/api-docs`.

## Tech Stack

- **Backend**: Node.js with Express
- **Database**: PostgreSQL (hosted on AWS RDS)
- **ORM**: Sequelize (to interact with PostgreSQL)
- **CORS**: For handling cross-origin requests
- **Swagger UI**: For interactive API documentation

## Installation

Follow these steps to set up and run the project locally.

### 1. Clone the repository

Clone the repository to your local machine:

```bash
git clone https://github.com/XavierCuases/tourism-ecuador-backend.git
cd tourism-ecuador-backend/delete-user
