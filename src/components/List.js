import React, { useContext } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { TaskContext } from './taskContext';
import { CurrentContext } from './currentContext';
import { EditContext } from './editContext';

function List() {
    // const List = (props) => {
    const [task, setTask] = useContext(TaskContext);
    const [currentTask, setCurrentTask] = useContext(CurrentContext);
    const [editing, setEditing] = useContext(EditContext);

    const deleteTodo = inx => {
        var newArr = task.filter(function (ele) {
            return ele.id != inx;
        });
        setTask(newArr);
    }

    const editTodo = (id, task) => {
        setEditing(true);
        setCurrentTask(task);
    }

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Status</th>
                        <th> Action</th>
                    </tr>
                </thead>
                <tbody>
                    {task.length > 0 ? (
                        task.map(todo => {
                            const { id, task_name, status } = todo;
                            return (
                                <tr key={id}>
                                    <td>{task_name}</td>
                                    <td>{status}</td>
                                    <td>
                                        <Button variant="secondary" id={id} onClick={() => deleteTodo(id)}>Delete</Button> &nbsp;
                                        <Button variant="light" onClick={() => editTodo(id, todo)}>Edit</Button>
                                    </td>
                                </tr>
                            )
                        })
                    ) : (
                        <tr>
                            <td colSpan={4}>No task found</td>
                        </tr>
                    )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default List