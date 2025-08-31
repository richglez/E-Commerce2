import { useEffect, useState } from "react";
import { tasks as data} from "./task.js";

export function TaskList() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(data);
    }, []);

    if (tasks.length === 0) {
        return <h1>No hay Tareas aun</h1>
    }
    return (
        <div>
            {tasks.map((task) => (
                <div>
                    <h1> {task.title} </h1>
                    <p> {task.description} </p>
                </div>
            ))}
        </div>
    );
}

export default TaskList;
