import { useContext } from "react";
import AddList from "./AddList";
import EditList from "./EditList";
import List from "./List";
import { EditContext } from "./editContext";

function Todo() {
  const [editing] = useContext(EditContext);
  return (
    <>
      <div className="form-container">
        {editing ? (
          <div>
            <p>✏️ Edit Todo</p>
            <EditList />
          </div>
        ) : (
          <div>
            <p>➕ Add New Todo</p>
            <AddList />
          </div>
        )}
      </div>
      <div className="list-container">
        <p>📋 Your Todo List</p>
        <List />
      </div>
    </>
  );
}

export default Todo;
