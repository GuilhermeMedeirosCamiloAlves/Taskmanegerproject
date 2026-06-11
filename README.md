# Task Manager

A full-stack task management application built with a modern tech stack. Create, view, and manage your tasks with an intuitive web interface backed by a robust REST API.

## 📋 Project Structure

```
taskmaneger/
├── taskmanegerapi/          # Spring Boot REST API backend
│   └── api/
├── taskmanegerfe/           # React + Vite frontend
│   └── Taskmaneger-FE/
└── README.md                # This file
```

## 🛠️ Tech Stack

### Backend
- **Framework**: Spring Boot 4.0.6
- **Language**: Java 21
- **Build Tool**: Maven
- **API**: RESTful Web Services

### Frontend
- **Framework**: React 19
- **Build Tool**: Vite 8.0.12
- **Router**: React Router DOM 7.17.0
- **Linter**: ESLint

## ✨ Features

- ✅ View all tasks
- ➕ Create new tasks
- 🗑️ Delete tasks
- 🔄 Real-time updates
- 🎨 Modern, responsive UI
- 🔒 CORS-enabled API

## 🚀 Getting Started

### Prerequisites

- **Java 21** or higher
- **Node.js** 16+ and npm/yarn
- **Maven** (for backend)

### Backend Setup

1. Navigate to the backend directory:
```bash
cd taskmanegerapi/api
```

2. Build the project:
```bash
./mvnw clean install
```

3. Run the application:
```bash
./mvnw spring-boot:run
```

The API will start on `http://localhost:8080`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd taskmanegerfe/Taskmaneger-FE
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal)

## 📡 API Endpoints

### Tasks

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/task` | Retrieve all tasks |
| POST | `/task` | Create a new task |
| DELETE | `/task` | Delete all tasks |

### Request Examples

**Get all tasks:**
```bash
curl http://localhost:8080/task
```

**Create a new task:**
```bash
curl -X POST http://localhost:8080/task \
  -H "Content-Type: application/json" \
  -d '"Buy groceries"'
```

**Delete all tasks:**
```bash
curl -X DELETE http://localhost:8080/task
```

## 🏗️ Project Architecture

### Backend Architecture
```
API Application
├── ApiApplication.java       # Spring Boot entry point
├── controller/
│   └── ApiController.java    # REST endpoints
└── cors/
    └── CorsConfig.java       # CORS configuration
```

### Frontend Architecture
```
React Application
├── App.jsx                   # Main app component
├── main.jsx                  # Entry point
└── packages/
    ├── header/              # Header component
    └── taskbody/            # Task list component
```

## 📦 Available Scripts

### Backend
```bash
./mvnw clean install      # Build project
./mvnw spring-boot:run    # Run application
./mvnw test               # Run tests
```

### Frontend
```bash
npm run dev               # Start dev server with HMR
npm run build             # Build for production
npm run lint              # Run ESLint
npm run preview           # Preview production build locally
```

## 🔧 Configuration

### Backend Configuration

Edit `taskmanegerapi/api/src/main/resources/application.properties`:
```properties
spring.application.name=api
```

### CORS Configuration

CORS is configured in `CorsConfig.java` to allow requests from the frontend application.

## 📝 Development

### Running Both Services

**Terminal 1 - Backend:**
```bash
cd taskmanegerapi/api
./mvnw spring-boot:run
```

**Terminal 2 - Frontend:**
```bash
cd taskmanegerfe/Taskmaneger-FE
npm run dev
```

Open your browser to `http://localhost:5173` to access the application.

## 🧪 Testing

### Backend Tests
```bash
cd taskmanegerapi/api
./mvnw test
```

### Frontend Linting
```bash
cd taskmanegerfe/Taskmaneger-FE
npm run lint
```

## 📚 Useful Resources

### Spring Boot
- [Spring Boot Documentation](https://docs.spring.io/spring-boot/index.html)
- [Spring Web Guide](https://docs.spring.io/spring-boot/docs/current/reference/html/web.html)
- [Building REST services](https://spring.io/guides/tutorials/rest/)

### React & Vite
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Vite + React Guide](https://vitejs.dev/guide/)

### Other Resources
- [Maven Documentation](https://maven.apache.org/guides/index.html)
- [ESLint Configuration](https://eslint.org/docs/latest/use/configure/)

## 🤝 Contributing

Feel free to fork, modify, and submit pull requests to improve this project.

## 📄 License

This project is open source and available under the MIT License.

---

**Author**: Guilherme  
**Last Updated**: June 2026
