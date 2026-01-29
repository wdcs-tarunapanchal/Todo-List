import { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { CurrentContext } from "./currentContext";
import { EditContext } from "./editContext";
import { TaskContext } from "./taskContext";

function EditList() {
  // const EditList = (props) => {

  const [task, setTask] = useContext(TaskContext);
  const [editing, setEditing] = useContext(EditContext);
  const [currentTask] = useContext(CurrentContext);
  const [new_task, setNewTask] = useState(currentTask);

  useEffect(() => {}, [task]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...new_task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = task.map((obj) => {
      if (obj.id == e.target.id) {
        obj["status"] = new_task.status;
        obj["task_name"] = new_task.task_name;
        return { ...obj };
      }

      return obj;
    });
    setTask(newTask);
    setEditing(false);
  };

  return (
    <form>
      <div style={{ marginBottom: "10px" }}>
        <label>Task Name:</label>
        <br />
        <input
          type="text"
          value={new_task.task_name}
          name="task_name"
          onChange={handleChange}
          placeholder="Update your task..."
          required
          style={{ width: "100%", maxWidth: "300px" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>Status:</label>
        <br />
        <select
          name="status"
          value={new_task.status}
          onChange={handleChange}
          style={{ width: "100%", maxWidth: "300px" }}
        >
          <option value="Pending">📌 Pending</option>
          <option value="InProgress">🔄 In Progress</option>
          <option value="Complete">✅ Complete</option>
        </select>
      </div>
      <div style={{ marginTop: "15px" }}>
        <Button
          variant="primary"
          type="submit"
          id={new_task.id}
          onClick={handleSubmit}
          style={{
            marginRight: "10px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          ✏️ Update Task
        </Button>
        <Button
          variant="secondary"
          type="button"
          onClick={() => setEditing(false)}
          style={{ paddingLeft: "20px", paddingRight: "20px" }}
        >
          ❌ Cancel
        </Button>
      </div>
    </form>
  );
}

export default EditList;
