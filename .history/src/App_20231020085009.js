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



   return (
     <div className="container">
      <Header title={appName} />
      <Tasks tasks={tasks} />
     </div>
   );

}

export default App;
