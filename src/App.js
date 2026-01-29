import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import { CurrentProvider } from "./components/currentContext";
import { EditProvider } from "./components/editContext";
import { TaskProvider } from "./components/taskContext";

function App() {
  // Test commit of feature branch 6
  const [task, setTask] = useState([]);

  const [editing, setEditing] = useState(false);

  const initialTodo = { id: null, task_name: "", status: "" };

  const [currentTask, setCurrentTask] = useState(initialTodo);
  // console.log("currentTask", currentTask);
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
