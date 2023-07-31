import {useContext} from 'react'
import {TaskContext} from '../../context/TaskContext'

function TaskCard({ task }) {
/*   function mostrarAlerta() {
    alert("Eliminando...: " + task.id);
    deleteTask(task.id);
  } */

  /*Pueden existir varios contextos, aqui especifico cual voy a ausar */
  const {deleteTask} = useContext(TaskContext)
/*   console.log(valor)
 */
  return (
      <div className='col-4 bg-black p-4 rounded-md'>{/* Componente Hijo  */}
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <button onClick={() => deleteTask(task.id)}>Delete Task</button>
      </div>
  );
}

export default TaskCard;
