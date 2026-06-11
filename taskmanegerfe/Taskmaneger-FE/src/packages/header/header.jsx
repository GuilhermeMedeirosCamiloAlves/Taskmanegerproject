import { useNavigate } from 'react-router-dom';
import './header.css';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">Task Manager</h1>
        <nav className="header-nav">
          <button className="nav-btn view-btn" onClick={() => navigate('/view')}>View Tasks</button>
          <button className="nav-btn create-btn" onClick={() => navigate('/create')}>Create Task</button>
        </nav>
      </div>
    </header>
  );
}
