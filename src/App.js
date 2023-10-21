import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

/**
 * A App component entry of the React App
*/
const App = ()  => {
   const appName = 'Task Tracker App'

  const [showAddTask, setShowAddTask] = useState(false)

   // my default task list with init to use useState
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

// delete task based on its ID
const deleteTask = (id) => {
  // create a new array, updateTasks , by filtering out the task with the given ID
  const updatedTasks = tasks.filter((task) => task.id !== id )

  // update the tasks state with newly filtred array 
  setTasks(updatedTasks)

  console.log('delete ', id);
}

// Fun to Toggle Reminder status based in its ID
const toggleReminder = (id) => {
  // use setTasks function to update the state of the tasks
  setTasks(tasks.map((task) => 
      // check if the task id matches the provided id 
      task.id === id ? 
        // if id match, create a new task by spreading the existing tasks and toggle the reminder status to its opposite
        {  ...task , reminder: !task.reminder}
        : task // else don't change a status 
    )
  )
  console.log(id);
}

// Add task with given task object
const addTask = (task) => {
  // Generate a unique ID of new task
  const id = Math.floor(Math.random() * 1000 ) + 1

  // create a new task object by spreading he provided task properties and adding the generated ID
  const newTask = { id, ...task }
  // Update the tasks state by adding a new task to the existing tasks
  setTasks([...tasks, newTask])

  //console.log(`new task addes successfully => ${newTask.title}`);

}

   return (
     <div className="container">
      <Header 
        onAdd={ ()=> 
            setShowAddTask(!showAddTask)
        } 
        showAdd={showAddTask}
        title={appName} 
      />
      { showAddTask &&   <AddTask onAdd={addTask} />  }
      { 
      tasks.length > 0 ? (
        <Tasks 
          tasks={tasks} 
          onDelete={deleteTask} 
          onToggle={toggleReminder} /> 
        )
        : ( 
          <p><center> Not task to show</center> </p> 
        )
      }
     </div>
   );

}

export default App;
