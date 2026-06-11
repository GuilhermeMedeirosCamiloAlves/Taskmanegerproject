import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './packages/header/header';
import TaskBody from './packages/taskbody/taskbody';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/view" replace />} />
        <Route 
          path="/view" 
          element={
            <>
              <Header />
              <TaskBody />
            </>
          } 
        />
        <Route 
          path="/create" 
          element={
            <>
              <Header />
              <TaskBody />
            </>
          } 
        />
      </Routes>
    </Router>
  )
}

export default App
