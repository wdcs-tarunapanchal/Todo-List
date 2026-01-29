import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import { TaskContext } from "./taskContext";

function AddList() {
  const [task, setTask] = useContext(TaskContext);

  const initList = { id: null, task_name: "", status: "Pending" };

  const [list, setList] = useState(initList);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setList({ ...list, id: new Date().getTime() + 1, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newTodos = [...task, list];
    setTask(newTodos);
    setList(initList);
  };

  return (
    <form>
      <div style={{ marginBottom: "10px" }}>
        <label>Task Name:</label>
        <br />
        <input
          type="text"
          name="task_name"
          value={list.task_name}
          onChange={handleChange}
          placeholder="Enter your task..."
          required
          style={{ width: "100%", maxWidth: "300px" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>Status:</label>
        <br />
        <select
          name="status"
          value={list.status}
          onChange={handleChange}
          style={{ width: "100%", maxWidth: "300px" }}
        >
          <option value="Pending">📌 Pending</option>
          <option value="InProgress">🔄 In Progress</option>
          <option value="Complete">✅ Complete</option>
        </select>
      </div>
      <Button
        variant="success"
        className="button-primary"
        type="submit"
        onClick={submitHandler}
        style={{ marginTop: "10px", paddingLeft: "20px", paddingRight: "20px" }}
      >
        ➕ Add Task
      </Button>
    </form>
  );
}

export default AddList;
