import { useState, useEffect } from 'react'
import {BrowserRouter as Router , Routes, Route , Switch} from 'react-router-dom'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'
import TaskDetails from './components/TaskDetails'


/**
 * A App component entry of the React App
*/
const App = ()  => {

   const TASK_BASE_URL = 'http://localhost:5000/tasks';
   const appName = 'Task Tracker App'

  const [showAddTask, setShowAddTask] = useState(false)

   // my default task list with init to use useState
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
       const tasksFromServer = await fetchTasks()
       setTasks(tasksFromServer)
    }    
  
  getTasks();

  console.log(tasks)

  }, [] )

 const fetchTasks = async () => {
       const res = await fetch(TASK_BASE_URL)
       const data = await res.json()
   return data;
}    

 // fetch a single task 
 const fetchTask = async (id) => {
       const res = await fetch(`${TASK_BASE_URL}/${id}`)
       const data = await res.json()

   return data;
}    


// delete task based on its ID
const deleteTask = async  (id) => {

  await fetch(`${TASK_BASE_URL}/${id}`, { 
    method: 'DELETE' 
  })

  // update the tasks state with newly filtred array 
  setTasks(tasks.filter((task) => task.id !== id ))

  console.log('delete product with id ', id);
}

// Fun to Toggle Reminder status based in its ID
const toggleReminder = async (id) => {

  // get the id to update 
  const taskToToggle = await fetchTask(id)

  // update there value on locale 
  const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

  // update  to the server based on there id with PUT method
  const res = await fetch(
    `${TASK_BASE_URL}/${id}`, {
     method: 'PUT' ,
     headers: {
      'Content-type': 'application/json'
     },
     body: JSON.stringify(updatedTask)
    }
  );

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
const addTask = async (task) => {


  const res = await fetch(`${TASK_BASE_URL}`, { 
    method: 'POST' , 
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(task)
    } )
 
  const data = await  res.json()

  setTasks([...tasks, data])

  //console.log(`new task addes successfully => ${newTask.title}`);

}

   return (
      <Router>
         <div className="container">
      <Header 
        onAdd={ ()=> 
            setShowAddTask(!showAddTask)
        } 
        showAdd={showAddTask}
        title={appName} 
      />
    
      <Routes>
          <Route
            path='/'
            element={
                <>
                { showAddTask &&   <AddTask onAdd={addTask} />  }
                { 
                tasks.length > 0 ? (
                  <Tasks  
                    tasks={tasks} 
                    onDelete={deleteTask} 
                    onToggle={toggleReminder} 
                  /> 
                  )
                  : ( 
                    <center>
                      <p> Not task to show</p> 
                    </center>
                  )
                
                }   
              </>
            }
            
          />

           
      <Route element={ <About /> }  path='/about'/>
      <Route element={<TaskDetails />}  path='/task/:id' />
     </Routes>
    <Footer />
     </div>
  </Router>
     
 
   );

}

export default App;
