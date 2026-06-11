import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './taskbody.css';

export default function TaskBody() {
  const location = useLocation();
  const isCreatePage = location.pathname === '/create';
  const [showInput, setShowInput] = useState(false);
  const [taskText, setTaskText] = useState('');
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [checkedTasks, setCheckedTasks] = useState(new Set());
  const [loadingTasks, setLoadingTasks] = useState(true);
  const [popup, setPopup] = useState({ show: false, message: '', type: 'success' });
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  // Fetch tasks on component mount
  useEffect(() => {
    fetchTasks();
  }, []);

  const showPopup = (message, type = 'success') => {
    setPopup({ show: true, message, type });
    setTimeout(() => {
      setPopup({ show: false, message: '', type: 'success' });
    }, 3000);
  };

  const fetchTasks = async () => {
    setLoadingTasks(true);
    try {
      const response = await fetch('http://localhost:8080/task');
      if (response.ok) {
        const data = await response.json();
        setTasks(Array.isArray(data) ? data : []);
      } else {
        console.error('Failed to fetch tasks');
      }
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setLoadingTasks(false);
    }
  };

  const handleAddTask = async () => {
    if (!taskText.trim()) {
      showPopup('Please enter a task', 'error');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('http://localhost:8080/task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ task: taskText }),
      });

      if (response.ok) {
        setTaskText('');
        setShowInput(false);
        showPopup('Task created successfully!', 'success');
        fetchTasks(); // Refresh task list
      } else {
        const errorData = await response.text();
        showPopup('Failed to create task: ' + errorData, 'error');
      }
    } catch (error) {
      console.error('Error:', error);
      showPopup('Error creating task: ' + error.message, 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleClearList = async () => {
    if (tasks.length === 0) {
      showPopup('No tasks to clear', 'error');
      return;
    }

    setShowConfirmModal(true);
  };

  const confirmClearList = async () => {
    setShowConfirmModal(false);
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8080/task', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (response.ok) {
        setTasks([]);
        setCheckedTasks(new Set());
        showPopup('All tasks cleared successfully!', 'success');
      } else {
        showPopup('Failed to clear tasks', 'error');
      }
    } catch (error) {
      console.error('Error:', error);
      showPopup('Error clearing tasks: ' + error.message, 'error');
    } finally {
      setLoading(false);
    }
  };

  const cancelClearList = () => {
    setShowConfirmModal(false);
  };

  const handleCheckTask = (taskId) => {
    const newChecked = new Set(checkedTasks);
    if (newChecked.has(taskId)) {
      newChecked.delete(taskId);
    } else {
      newChecked.add(taskId);
    }
    setCheckedTasks(newChecked);
  };

  return (
    <div className="task-body">
      {isCreatePage ? (
        <div className="task-container">
          <h2>Create New Task</h2>
          {!showInput ? (
            <button className="add-task-btn" onClick={() => setShowInput(true)}>
              <span className="plus-icon">+</span>
            </button>
          ) : (
            <div className="task-input-form">
              <input
                type="text"
                className="task-input"
                placeholder="Enter task description..."
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
                autoFocus
              />
              <div className="form-buttons">
                <button 
                  className="btn btn-submit" 
                  onClick={handleAddTask}
                  disabled={loading}
                >
                  {loading ? 'Creating...' : 'Create'}
                </button>
                <button 
                  className="btn btn-cancel" 
                  onClick={() => {
                    setShowInput(false);
                    setTaskText('');
                  }}
                  disabled={loading}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="task-container">
          <h2>View Tasks</h2>
          {loadingTasks ? (
            <p className="loading">Loading tasks...</p>
          ) : tasks.length === 0 ? (
            <p className="no-tasks">No tasks yet. Create one to get started!</p>
          ) : (
            <div className="view-tasks-wrapper">
              <div className="tasks-list">
                {tasks.map((task, index) => {
                  let taskName = '';
                  
                  try {
                    // If it's a string that looks like JSON, parse it
                    if (typeof task === 'string' && task.startsWith('{')) {
                      const parsed = JSON.parse(task);
                      taskName = parsed.task || parsed.name || parsed.title || '';
                    } else if (typeof task === 'string') {
                      taskName = task;
                    } else if (typeof task === 'object' && task !== null) {
                      taskName = task.task || task.name || task.title || task.description || '';
                    }
                  } catch (e) {
                    taskName = typeof task === 'string' ? task : 'Unnamed Task';
                  }
                  
                  return (
                    <div key={index} className="task-item">
                      <input
                        type="checkbox"
                        className="task-checkbox"
                        checked={checkedTasks.has(index)}
                        onChange={() => handleCheckTask(index)}
                        id={`task-${index}`}
                      />
                      <label 
                        htmlFor={`task-${index}`}
                        className={`task-label ${checkedTasks.has(index) ? 'completed' : ''}`}
                      >
                        {taskName || 'Unnamed Task'}
                      </label>
                    </div>
                  );
                })}
              </div>
              <button 
                className="btn btn-clear" 
                onClick={handleClearList}
                disabled={loading}
              >
                {loading ? 'Clearing...' : 'Clear All Tasks'}
              </button>
            </div>
          )}
        </div>
      )}
      
      {popup.show && (
        <div className={`popup popup-${popup.type}`}>
          <div className="popup-content">
            <p>{popup.message}</p>
          </div>
        </div>
      )}

      {showConfirmModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Confirm Action</h3>
            <p>Are you sure you want to delete all tasks? This cannot be undone.</p>
            <div className="modal-buttons">
              <button 
                className="btn btn-confirm" 
                onClick={confirmClearList}
              >
                Delete All
              </button>
              <button 
                className="btn btn-cancel-modal" 
                onClick={cancelClearList}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
