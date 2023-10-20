import TaskItem from './Task'

const Tasks = ({ tasks }) => {

    return (
       <>
       { 
        tasks.map((task) => ( <> <TaskI task={task}/> </> )) 
       }
       </>
    );
}

export default Tasks 