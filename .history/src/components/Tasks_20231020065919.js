const tasks =

const Tasks = () => {
    return (
       <>
       { 
        tasks.map((task) => ( <>  <h3>{ task.id.toString } {task.text} </h3> </> )) 
       }
       </>
    );
}

export default Tasks 