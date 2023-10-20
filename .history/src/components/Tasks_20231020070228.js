import { useState } from 'react'

const tasks =  [
    {
        id: 1,
        text: 'Read Quraan',
        day: 'Oct 20th at 6h00',
        reminder: true
    },
    {
        id: 2,
        text: 'Code a React Project ',
        day: 'Oct 20th at 6h30',
        reminder: false
    },
    {
        id: 3,
        text: 'Learn Project Management',
        day: 'Oct 21th at 6h30',
        reminder: true
    },
];

const Tasks = () => {

    const [tasks, setTasks] = useState( [
        {
            id: 1,
            text: 'Read Quraan',
            day: 'Oct 20th at 6h00',
            reminder: true
        },
        {
            id: 2,
            text: 'Code a React Project ',
            day: 'Oct 20th at 6h30',
            reminder: false
        },
        {
            id: 3,
            text: 'Learn Project Management',
            day: 'Oct 21th at 6h30',
            reminder: true
        },
    ]);

    return (
       <>
       { 
        tasks.map((task) => ( <>  <h3 key={task.id}>{ task.id } : {task.text} </h3> </> )) 
       }
       </>
    );
}

export default Tasks 