# Create Activity API

The `createActivity` API allows you to create activities with specific details such as name, location, date, description, photos, and price. This API is built using **GraphQL**, and the data is stored in a **MongoDB** database.

---

## Features

- Create a new activity with fields such as name, location, date, description, photos, and price.
- Validation to ensure required fields are provided and that price is a positive number.
- Documentation available through Swagger for easy integration and testing.

---

## Technologies Used

- **Node.js**: Backend runtime.
- **Express.js**: Web framework.
- **Apollo Server**: For GraphQL implementation.
- **MongoDB**: NoSQL database.
- **Mongoose**: ORM for MongoDB.
- **Swagger**: API documentation.
- **Docker**: Containerization for development and production.

---

## Installation and Setup

### Prerequisites

- **Node.js** (v18 or higher)
- **MongoDB** instance running locally or in Docker
- **Docker** (optional, for containerized setup)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo-url/create-activity.git
   cd create-activity
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file:

   ```env
   MONGO_URI=mongodb://localhost:27017/ActivitiesDB
   PORT=4001
   NODE_ENV=development
   ```

4. Start the server:

   - For development (with auto-restart):
     ```bash
     npm run dev
     ```
   - For production:
     ```bash
     npm start
     ```

5. Open GraphQL Playground: Visit [http://localhost:4001/graphql](http://localhost:4001/graphql) to interact with the API.

6. Swagger Documentation: Visit [http://localhost:4001/api-docs](http://localhost:4001/api-docs) to view API documentation.

---

## API Details

### **Endpoint:**

- **URL:** `/graphql`
- **Method:** `POST`

### **GraphQL Mutation**

#### **Mutation Example:**

```graphql
mutation {
  createActivity(
    name: "Cascada de Peguche"
    location: "Otavalo"
    date: "2025-01-26"
    description: "A beautiful waterfall in Otavalo."
    photos: ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg"]
    price: 25.50
  ) {
    _id
    name
    location
    date
    description
    photos
    price
  }
}
```

#### **Response Example:**

```json
{
  "data": {
    "createActivity": {
      "_id": "64c12345abcde1234567890f",
      "name": "Cascada de Peguche",
      "location": "Otavalo",
      "date": "2025-01-26",
      "description": "A beautiful waterfall in Otavalo.",
      "photos": [
        "https://example.com/photo1.jpg",
        "https://example.com/photo2.jpg"
      ],
      "price": 25.50
    }
  }
}
```

### **Validation Rules:**

- `name`, `location`, and `date` are **required fields**.
- `price` must be a **positive number** if provided.
- `photos` must be an **array of strings** (URLs).

#### **Error Response Example:**

```json
{
  "errors": [
    {
      "message": "Missing required fields: location, date"
    }
  ]
}
```

---

## Docker Setup

### Build the Docker Image

```bash
docker build -t create-activity .
```

### Run the Docker Container

```bash
docker run -p 4001:4001 create-activity
```

### Development with `nodemon`

If you want to use `nodemon` inside Docker:

```bash
docker build -f Dockerfile.dev -t create-activity-dev .
docker run -p 4001:4001 -v $(pwd)/src:/app/src create-activity-dev
```

---

## Project Structure

```
create-activity/
├── src/
│   ├── database/
│   │   └── mongoDBClient.js       # MongoDB connection setup
│   ├── models/
│   │   └── ActivitySchema.js      # Mongoose schema for activities
│   ├── resolvers/
│   │   └── createActivityResolver.js # GraphQL resolver for createActivity
│   ├── schema/
│   │   └── activitySchema.graphql # GraphQL schema definition
│   └── index.js                   # Main server file
├── Dockerfile                     # Production Dockerfile
├── Dockerfile.dev                 # Development Dockerfile
├── package.json                   # Project dependencies
└── README.md                      # Project documentation (this file)
```

---

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

## License

This project is licensed under the MIT License.


