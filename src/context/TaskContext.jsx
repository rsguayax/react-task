/* Permite retornar un elemento que permite englobar al resto, es decir es un componente global, que da contexto a todos los hijos */
import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/Task";

/* Este es el nombre del contexto, es el que almacena los datos */
export const TaskContext = createContext();

/* Este es el nombre del contenedor, que se llama Provider, es el componente que engloba a todos los componentes
 */
export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    console.log("id a eliminar: " + taskId);
    setTasks(tasks.filter((task) => task.id != taskId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
