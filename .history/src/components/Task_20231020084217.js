
const TaskItem = ({ task }) => {
    return (
        <div className="task" key={}>
            <h3> { task.text } </h3>
            <p> { task.day } </p>
        </div>
    )
}

export default TaskItem