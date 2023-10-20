import TaskItem from './Task'

const Tasks = ({ tasks }) => {

    return (
       <>
       { 
        tasks.map((task) => ( <> <TaskItem task={task}/> </> )) 
       }
       </>
    );
}

export default Tasks 