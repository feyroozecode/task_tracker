
/**
 * A TaskItem compnent to show a simple Item of Task
 */
const TaskItem = ({ task }) => {
    return (
        <div className="task" key={task.id}>
            <h3> { task.text } </h3>
            <p> { task.day } </p>
        </div>
    )
}

export default TaskItem