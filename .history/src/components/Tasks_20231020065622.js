const tasks = [
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
    return (
       <>
       { tasks.map((task) => ( <h4> { task.id } </h4>  <h3> {task.text} </h3> ) ) 
        }
       </>
    );
}

export default Tasks 