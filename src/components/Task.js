import { FaTimes }  from 'react-icons/fa'
/**
 * A TaskItem compnent to show a simple Item of Task
 */
const TaskItem = ({ task , onDelete , onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder': '' }`} onDoubleClick={() => onToggle(task.id) } >
            <h3> 
                { task.text }  
                <FaTimes 
                    style={{ color: 'red', cursor: 'pointer' }} 
                    onClick={() => onDelete(task.id)}
                /> 
            </h3>
            <p> { task.day } </p>

        </div>
    )
}

export default TaskItem