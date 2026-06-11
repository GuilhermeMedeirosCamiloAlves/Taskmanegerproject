# Task Manager Frontend

A modern, responsive React-based task management application with a beautiful user interface and smooth user experience.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Components](#components)
- [Styling](#styling)
- [Future Enhancements](#future-enhancements)

## ✨ Features

### Core Functionality
- **Create Tasks** - Add new tasks via a clean, user-friendly interface
- **View Tasks** - Display all tasks in a responsive list layout
- **Mark Complete** - Check tasks to mark them as complete (with strikethrough effect)
- **Clear All** - Delete all tasks at once with confirmation modal
- **Real-time Feedback** - Toast notifications for all user actions

### User Experience
- **Navigation** - Easy switching between Create and View pages via header buttons
- **Responsive Design** - Fully responsive on desktop, tablet, and mobile devices
- **Smooth Animations** - Slide and fade animations for modals and popups
- **Custom Notifications** - In-app success and error popups instead of browser alerts
- **Confirmation Modal** - Beautiful confirmation dialog for destructive actions
- **Visual Feedback** - Hover effects and transitions throughout the app

### Design Features
- **Purple Gradient Header** - Sticky header with navigation buttons
- **Clean Task Cards** - Each task displays in a single-line list format
- **Color-coded UI** - Green for success, red for delete actions
- **Professional Styling** - Modern, polished appearance with box shadows and borders

## 🛠 Tech Stack

### Frontend
- **React 19.2.6** - UI library
- **React Router DOM** - Client-side routing
- **Vite 8.0** - Build tool and dev server
- **JavaScript (ES6+)** - Programming language
- **CSS3** - Styling with animations and gradients

### Build & Development
- **Node.js** - JavaScript runtime
- **npm** - Package manager
- **ESLint** - Code linting
- **Vite** - Fast development server

## 📁 Project Structure

```
Taskmaneger-FE/
├── src/
│   ├── App.jsx                 # Main app component with routing
│   ├── App.css                 # App styles
│   ├── main.jsx                # Entry point
│   ├── index.css               # Global styles
│   ├── assets/                 # Static assets
│   └── packages/
│       ├── header/
│       │   ├── header.jsx      # Header component with navigation
│       │   └── header.css      # Header styles
│       └── taskbody/
│           ├── taskbody.jsx    # Task management component
│           └── taskbody.css    # Task styles
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
├── package.json                # Dependencies
└── README.md                   # Project documentation
```

## 🚀 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Setup Steps

1. **Navigate to project directory:**
   ```bash
   cd Taskmaneger-FE
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - Navigate to `http://localhost:5174` (or the port shown in terminal)

### Building for Production

```bash
npm run build
```

The optimized build will be created in the `dist/` folder.

## 💻 Usage

### Creating Tasks

1. Click the **"CREATE TASK"** button in the header
2. Click the **"+"** button to show the input field
3. Type your task description
4. Click **"Create"** or press **Enter** to submit
5. A success notification appears, and the task list updates automatically

### Viewing Tasks

1. Click the **"VIEW TASKS"** button in the header
2. All tasks display as a clean list with checkboxes
3. Each task shows on a separate line

### Marking Tasks Complete

1. Navigate to **View Tasks** page
2. Check the checkbox next to a task
3. The task text will **strikethrough** and fade to gray
4. Uncheck to mark as incomplete

### Clearing All Tasks

1. On the **View Tasks** page, scroll to the bottom
2. Click the **"CLEAR ALL TASKS"** button (red)
3. A confirmation modal appears
4. Click **"Delete All"** to confirm or **"Cancel"** to go back
5. Success notification confirms deletion

## 🔌 API Endpoints

The frontend communicates with a backend server at `http://localhost:8080`

### GET /task
Retrieves all tasks from the server.

**Response:**
```json
[
  {"task": "Buy groceries"},
  {"task": "Complete project"}
]
```

### POST /task
Creates a new task.

**Request Body:**
```json
{
  "task": "Task description here"
}
```

**Response:** Task created successfully

### DELETE /task
Deletes all tasks.

**Response:** All tasks deleted successfully

## 🎨 Components

### App.jsx
Main application component that handles:
- Route setup with React Router
- Redirects root path to `/view`
- Renders Header and TaskBody components

### Header Component (`header.jsx`)
Navigation header with:
- App title ("Task Manager")
- View Tasks button → navigates to `/view`
- Create Task button → navigates to `/create`
- Purple gradient background
- Sticky positioning

**Features:**
- Uses `useNavigate` hook for client-side routing
- Hover effects on buttons
- Responsive design on mobile

### TaskBody Component (`taskbody.jsx`)
Main task management component with:
- Create mode (shows input form)
- View mode (displays task list)
- Task list management
- Popup notifications
- Confirmation modal

**State Management:**
- `tasks` - Array of all tasks
- `checkedTasks` - Set of checked task indices
- `popup` - Current notification
- `showConfirmModal` - Confirmation modal visibility
- `loading` - Loading states for API calls

**Key Functions:**
- `fetchTasks()` - Retrieves tasks from backend
- `handleAddTask()` - Creates new task via POST
- `handleCheckTask()` - Toggles task completion
- `handleClearList()` - Shows confirmation modal
- `confirmClearList()` - Deletes all tasks via DELETE
- `showPopup()` - Displays notification toast

## 🎨 Styling

### Color Scheme
- **Primary Purple**: `#667eea`
- **Secondary Purple**: `#764ba2`
- **Success Green**: `#4caf50`
- **Error Red**: `#ff6b6b`
- **Light Gray**: `#f5f5f5`
- **Dark Gray**: `#333`

### Animations
- **Slide In**: Popups slide in from the right (0.4s)
- **Fade In**: Modal overlay fades in (0.3s)
- **Modal Scale**: Modal scales up with animation (0.3s)
- **Hover Effects**: Cards lift and glow on hover

### Responsive Breakpoints
- **Desktop**: Full width with multiple columns
- **Tablet**: Adjusted spacing and button sizes
- **Mobile**: Single column layout, full-width buttons
- **Breakpoint**: 768px

## 📲 Responsive Features

- **Header**: Adapts to all screen sizes
- **Task List**: Single column on mobile, flows naturally
- **Buttons**: Full-width on mobile, sized on desktop
- **Modals**: Scales appropriately on small screens
- **Popups**: Positioned safely on mobile viewports
- **Typography**: Scales down on smaller devices

## 🔒 CORS Configuration

The frontend sends requests to `http://localhost:8080`. Your backend must allow CORS from `http://localhost:5174`:

**Spring Boot Configuration:**
```java
@Configuration
public class CorsConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:5174")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true)
                .maxAge(3600);
    }
}
```

## 🚀 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 🐛 Troubleshooting

### "Failed to fetch" Error
- Check if backend is running on `localhost:8080`
- Verify CORS is properly configured on backend
- Check browser console for detailed error messages

### Tasks Not Loading
- Ensure backend `/task` GET endpoint is working
- Check network tab in browser DevTools
- Verify backend returns an array of tasks

### Port Already in Use
If port 5173/5174 is in use:
```bash
# Kill the process using the port
# Windows: taskkill /PID <PID> /F
# Mac/Linux: lsof -ti:5173 | xargs kill -9
```

## 📈 Performance Optimizations

- **Code Splitting**: Components are organized for lazy loading
- **Efficient Rendering**: React optimizes re-renders
- **CSS Animations**: Use transform and opacity for smooth 60fps
- **Minimal Dependencies**: Only essential packages included
- **Vite Bundling**: Fast production builds with Rollup

## 🔮 Future Enhancements

- [ ] **Task Editing** - Edit existing tasks
- [ ] **Task Deletion** - Delete individual tasks
- [ ] **Task Categories** - Organize tasks by category
- [ ] **Priority Levels** - Set task priority (High, Medium, Low)
- [ ] **Due Dates** - Add deadlines to tasks
- [ ] **Local Storage** - Persist checked state locally
- [ ] **Dark Mode** - Theme toggle for dark/light mode
- [ ] **Task Search** - Search and filter tasks
- [ ] **Drag & Drop** - Reorder tasks by dragging
- [ ] **User Authentication** - Login and user accounts
- [ ] **Task Syncing** - Real-time updates via WebSockets
- [ ] **Export/Import** - Backup and restore tasks

## 👨‍💻 Development Tips

### Debugging
- Open DevTools: `F12` or `Ctrl+Shift+I`
- Check Console tab for errors
- Use React DevTools extension for component inspection

### Hot Module Replacement (HMR)
- Changes automatically refresh without full reload
- Component state is preserved during updates

### Code Organization
- Keep components focused and single-responsibility
- Use consistent naming conventions
- Add comments for complex logic

## 📝 License

This project is part of a portfolio and is freely available for use and modification.

## 📧 Contact & Support

For questions or issues, please refer to the backend API documentation or contact the development team.

---

**Version**: 1.0.0  
**Last Updated**: 2026-06-10  
**Status**: Production Ready ✅
