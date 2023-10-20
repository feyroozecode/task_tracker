import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'
/**
 * A App component entry of the React App
*/
const App = ()  => {
   const appName = 'Task Tracker App'

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

// delete task
const deleteTask = (id) => {
  const updatedTasks = tasks.filter((task) => task.id !== id )
  setTasks(updatedTasks)

  console.log('delete ', id);
}

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => 
      task.id === id ? 
        { ...task , reminder: !task.reminder}
        : task
    )
  )
  console.log(id);
}

   return (
     <div className="container">
      <Header title={appName} />
      { tasks.length > 0 ? ( 
        <Tasks 
          tasks={tasks} 
          onDelete={deleteTask} 
          onToggle={toggleReminder} /> 
        )
        : ( <p><center> Not task to show</center> </p> )
      }
     </div>
   );

}

export default App;
