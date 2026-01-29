import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import { CurrentProvider } from "./components/currentContext";
import { EditProvider } from "./components/editContext";
import { TaskProvider } from "./components/taskContext";

function App() {
  // Feature 1: State to hold the list of tasks
  const [task, setTask] = useState([]);

  // Feature 1: State to track if we are in editing mode
  const [editing, setEditing] = useState(false);

  // Feature 1: State to hold the current task being edited
  const initialTodo = { id: null, task_name: "", status: "" };

  const [currentTask, setCurrentTask] = useState(initialTodo);

  return (
    <div className="App">
      <header className="App-header">
        <p>Todo Task</p>
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
