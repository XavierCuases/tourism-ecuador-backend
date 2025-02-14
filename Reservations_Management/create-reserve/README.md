# 📌 Reservation Management API CREATE RESERVE

## 📖 Description
This project is a **FastAPI** microservice designed to manage activity reservations.  
It includes functionalities to **create, retrieve, and cancel reservations**, integrating with a **MySQL database hosted on AWS RDS**.

## 🚀 Technologies Used
- **Python** (FastAPI, SQLAlchemy)
- **MySQL** (AWS RDS database)
- **Uvicorn** (ASGI server for FastAPI)
- **Docker** (Optional, for deployment)

## 📂 Project Structure
/create-reserve │── main.py # Application entry point │── database.py # MySQL configuration and connection │── config.py # Environment variables │── .env # Database credentials │── app/ │ │── init.py # Initialization file │ │── routers/ # API routes │ │ │── init.py │ │ │── reserva.py │ │── models/ # ORM models with SQLAlchemy │ │── schemas/ # Data validation schemas with Pydantic │ │── controllers/ # Business logic


## 🛠 Setup and Execution

### 1️⃣ **Configure Environment Variables**
Edit the `.env` file with your credentials:
```env
DB_HOST=database1.c20pppmbajcg.us-east-1.rds.amazonaws.com
DB_USER=admin
DB_PASSWORD=your_password
DB_NAME=reservations
DB_PORT=3306
2️⃣ Install Dependencies

pip install -r requirements.txt
3️⃣ Run the Server

uvicorn main:app --host 0.0.0.0 --port 8000 --reload
4️⃣ Access the API Documentation
Swagger UI: http://127.0.0.1:8000/docs
ReDoc: http://127.0.0.1:8000/redoc
📌 Available Endpoints
Method	Endpoint	Description
POST	/reservations/	Create a new reservation
GET	/reservations/{id}	Get a reservation by ID
PUT	/reservations/{id}/cancel	Cancel a reservation
🛠 Stop Uvicorn Processes
If Ctrl+C does not work, run:



🔹 **Save this file as `README.md` in your project's root directory.**  
🔹 **If you need any modifications, let me know!** 🚀