import { useState } from 'react'

const Tasks = ({ tasks }) => {

    return (
       <div cla>
       { 
        tasks.map((task) => ( <>  <h3 key={task.id}>{ task.id } {task.text} </h3> </> )) 
       }
       </div>
    );
}

export default Tasks 