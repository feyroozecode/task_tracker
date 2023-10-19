import Header from './components/Header'

const App = ()  => {
  const appName = 'Task Tracker'
  return (
    <div className="container">
     <Header title={appName} />
    </div>
  );

}

Header.defaultPropos = {
  
}

export default App;
