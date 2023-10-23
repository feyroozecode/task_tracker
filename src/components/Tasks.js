import TaskItem from './Task'
import { v4 as uuidv4 } from 'uuid'

const Tasks = ({ tasks, onDelete , onToggle }) => {

    return (
       <>
       { 
        tasks.map((task,) => ( 
        
                <TaskItem 
                    key={uuidv4()}
                    task={task} 
                    onDelete={onDelete} 
                    onToggle={onToggle}
                    /> 
         )) 
       }
       </>
    );
}

export default Tasks 