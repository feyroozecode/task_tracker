import TaskItem from './Task'

const Tasks = ({ tasks, onDelete }) => {

    return (
       <>
       { 
        tasks.map((task) => ( 
            <> <TaskItem task={task}/> 
            </> )) 
       }
       </>
    );
}

export default Tasks 