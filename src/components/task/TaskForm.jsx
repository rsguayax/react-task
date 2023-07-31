import { useState, useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const {createTask} = useContext(TaskContext)
/*   const valor = useContext(TaskContext);
  console.log(valor); */

  const handleSubmit = (e) => {
    e.preventDefault();
    /*     const newTask = {
      title,
      id:,
      description:'algo nuevo'
    } 
    createTask(newTask)*/
    createTask({ title, description });

    setTitle("");
    setDescription("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea
        placeholder="
      escribe la desc de la tarea"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <button>Save</button>
    </form>
  );
}

export default TaskForm;
