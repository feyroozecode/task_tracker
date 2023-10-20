import Task from './Task'

const Tasks = ({ tasks }) => {

    return (
       <>
       { 
        tasks.map((task) => ( <> <Task task={}/> </> )) 
       }
       </>
    );
}

export default Tasks 