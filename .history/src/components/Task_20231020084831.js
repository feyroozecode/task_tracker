import { FaTimes }  from 'react-icons/fa'
/**
 * A TaskItem compnent to show a simple Item of Task
 */
const TaskItem = ({ task }) => {
    return (
        <div className="task" key={task.id}>
            <h3> { task.text }  <FaTimes ></FaTimes> </h3>
            <p> { task.day } </p>

        </div>
    )
}

export default TaskItem