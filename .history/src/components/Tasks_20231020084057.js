import Task from './Tas'

const Tasks = ({ tasks }) => {

    return (
       <>
       { 
        tasks.map((task) => ( <>  <h3 key={task.id}>{ task.id } {task.text} </h3> </> )) 
       }
       </>
    );
}

export default Tasks 