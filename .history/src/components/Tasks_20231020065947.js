import { useState } from 'react'

const Tasks = () => {

    const [task, setTasks]

    return (
       <>
       { 
        tasks.map((task) => ( <>  <h3>{ task.id.toString } {task.text} </h3> </> )) 
       }
       </>
    );
}

export default Tasks 