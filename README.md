# 📝 Personal Task Dashboard

A full-stack, responsive web application to help users manage daily tasks, track time spent on each, and view productivity statistics — built using **React**, **Node.js**, **Express**, and **PostgreSQL**, and containerized with **Docker**.

---

## 🚀 Features

- ✅ Task Management (Create, Edit, Delete, Complete)
- ✅ Time Tracking per Task
- ✅ Productivity Statistics (Completed, Pending, Completion Rate)
- ✅ Dark/Light Mode Toggle
- ✅ JWT Authentication
- ✅ Dockerized Deployment
- ✅ Redux-based State Management
- ✅ Unit Tests for Key Components
- ✅ Error Boundaries & Graceful Failure Handling

---

## 🖥️ Tech Stack

| Frontend | Backend | Database | Auth | DevOps |
|---------|---------|----------|------|--------|
| React + Redux + Tailwind | Node.js + Express | PostgreSQL | JWT | Docker |

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/bhuvan0410/personal-task-dashboard.git
cd personal-task-dashboard
```

---

### 2. Create Environment File
Inside the server folder, create a .env file with the following:

env
Copy
Edit
PORT=5000
DB_NAME=task_dashboard
DB_USER=postgres
DB_PASSWORD=kiit@123
DB_HOST=postgres
JWT_SECRET=super_secret_jwt_key
⚠️ Note: These values are set for Docker-based development. Adjust if running outside containers.

---

### 3. Run with Docker
bash
Copy
Edit
docker-compose up --build
The app will start on:

Frontend: http://localhost:3000

Backend: http://localhost:5000

---

### 🧪 Testing

Run unit tests using:

bash
Copy
Edit
cd client
npm test

---

### 🧠 Design Rationale

The architecture and tech stack for the Personal Task Dashboard were selected with scalability, developer experience, and responsiveness in mind.

🔹 Frontend: React + Redux + Tailwind CSS
React provides component-based architecture and scalability.

Redux manages shared global state.

Tailwind CSS enables utility-first styling with dark mode support.

🔹 Backend: Node.js + Express
Express provides lightweight routing and middleware.

JWT allows secure, stateless user authentication.

🔹 Database: PostgreSQL
Relational DB structure maps well to users, tasks, and time entries.

Foreign key constraints and indexes ensure consistency and performance.

🔹 Dockerized Environment
Modular setup with isolated containers for frontend, backend, and DB.

Ensures consistency across environments and simplifies deployment.

🔹 Additional Considerations
Dark/Light Mode Toggle for accessibility.

Error Boundaries to handle rendering failures gracefully.

Basic Unit Tests for UI reliability.

Modern UI/UX enhancements scoped for future phase.

---

### 🧭 Folder Structure (Brief)
- bash
- Copy
- Edit
personal-task-dashboard/
- ├── client/       # React frontend
- ├── server/       # Node.js/Express backend
- ├── docker-compose.yml
- ├── Dockerfile (client + server)
- └── README.md

---

### ⚠️ Known Issues / Future Improvements

❌ Real-time WebSocket updates (Planned)

❌ Offline Support (PWA) to be added

❌ CI/CD via GitHub Actions (Future enhancement)

🔄 UI Modernization phase with animations and layout enhancements (planned)

⚠️ Minor visibility issues in dark mode fixed but may need polish

📄 License
This project is for educational and assessment purposes.

🙌 Author
Bhuvan Pagilla
GitHub Profile
