import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { CurrentContext } from "./currentContext";
import { EditContext } from "./editContext";
import { TaskContext } from "./taskContext";

function List() {
  // const List = (props) => {
  const [task, setTask] = useContext(TaskContext);
  const [currentTask, setCurrentTask] = useContext(CurrentContext);
  const [editing, setEditing] = useContext(EditContext);

  const deleteTodo = (inx) => {
    var newArr = task.filter(function (ele) {
      return ele.id != inx;
    });
    setTask(newArr);
  };

  const editTodo = (id, task) => {
    setEditing(true);
    setCurrentTask(task);
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "Pending":
        return (
          <span
            style={{
              display: "inline-block",
              padding: "5px 10px",
              backgroundColor: "#ffc107",
              color: "#000",
              borderRadius: "20px",
              fontWeight: "bold",
              fontSize: "12px",
            }}
          >
            📌 {status}
          </span>
        );
      case "InProgress":
        return (
          <span
            style={{
              display: "inline-block",
              padding: "5px 10px",
              backgroundColor: "#17a2b8",
              color: "#fff",
              borderRadius: "20px",
              fontWeight: "bold",
              fontSize: "12px",
            }}
          >
            🔄 {status}
          </span>
        );
      case "Complete":
        return (
          <span
            style={{
              display: "inline-block",
              padding: "5px 10px",
              backgroundColor: "#28a745",
              color: "#fff",
              borderRadius: "20px",
              fontWeight: "bold",
              fontSize: "12px",
            }}
          >
            ✅ {status}
          </span>
        );
      default:
        return status;
    }
  };
  // Render the list of tasks
  return (
    <div>
      <Table striped bordered hover responsive style={{ marginBottom: "0" }}>
        <thead style={{ backgroundColor: "#667eea", color: "white" }}>
          <tr>
            <th style={{ padding: "15px" }}>📝 Task</th>
            <th style={{ padding: "15px" }}>📊 Status</th>
            <th style={{ padding: "15px" }}>⚙️ Actions</th>
          </tr>
        </thead>
        <tbody>
          {task.length > 0 ? (
            task.map((todo) => {
              const { id, task_name, status } = todo;
              return (
                <tr key={id} style={{ verticalAlign: "middle" }}>
                  <td style={{ padding: "15px", fontSize: "15px" }}>
                    {task_name}
                  </td>
                  <td style={{ padding: "15px", textAlign: "center" }}>
                    {getStatusBadge(status)}
                  </td>
                  <td style={{ padding: "15px", textAlign: "center" }}>
                    <Button
                      variant="danger"
                      size="sm"
                      id={id}
                      onClick={() => deleteTodo(id)}
                      style={{ marginRight: "8px" }}
                    >
                      🗑️ Delete
                    </Button>
                    <Button
                      variant="warning"
                      size="sm"
                      onClick={() => editTodo(id, todo)}
                    >
                      ✏️ Edit
                    </Button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td
                colSpan={3}
                style={{ padding: "30px", color: "#999", fontSize: "16px" }}
              >
                🎉 No tasks yet! Add one to get started.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default List;
