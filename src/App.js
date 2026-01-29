import './App.css';
import Todo from './components/Todo';
import { TaskProvider } from './components/taskContext';
import { useState } from 'react'
import { EditProvider } from './components/editContext';
import { CurrentProvider } from './components/currentContext';

function App() {
  const [task, setTask] = useState([]);
  
  const [editing, setEditing] = useState(false);

  const initialTodo = { id: null, task_name: '', status: '' };

  const [currentTask, setCurrentTask] = useState(initialTodo);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Todo Task
        </p>
      </header>
      <TaskProvider value={[task, setTask]}>
        <EditProvider value={[editing, setEditing]}>
          <CurrentProvider value={[currentTask, setCurrentTask]}>
            <Todo />
          </CurrentProvider>
        </EditProvider>
      </TaskProvider>
    </div>
  );
}

export default App;
