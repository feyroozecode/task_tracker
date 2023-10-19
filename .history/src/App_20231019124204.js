import Header from './components/Header'

const App = ()  => {
  const appName = 'Task Tracker App'
  return (
    <div className="container">
     <Header title={appName} />
    </div>
  );

}


export default App;
