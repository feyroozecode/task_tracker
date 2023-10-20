import TaskItem from './Task'

const Tasks = ({ tasks, onDelete , onToggle }) => {

    return (
       <>
       { 
        tasks.map((task) => ( 
            <> 
                <TaskItem 
                    task={task} 
                    onDelete={onDelete} 
                    onToggle={onToggle}
                    /> 
            </> )) 
       }
       </>
    );
}

export default Tasks 