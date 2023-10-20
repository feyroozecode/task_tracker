import Header from './components/Header'
import Tasks from './components/Tasks'

/**
 * A App component entry of the React App
*/
const App = ()  => {
   const appName = 'Task Tracker App'

   return (
     <div className="container">
      <Header title={appName} />
      <Tasks />
     </div>
   );

}

export default App;