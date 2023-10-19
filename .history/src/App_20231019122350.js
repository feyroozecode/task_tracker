import './App.css';

function App() {
  const userName = 'Ahmad'
  const isMan = true 

  return (
    <div className="container">
      <h1>Task tracking </h1>
      <h3>Salam {userName} </h3>

      <p>Votre nom comporte  { userName.length.toString() } caracteres </p>
      {isMan ? '<p>Et le travail</p>' : '<p>Et les enfants</p>' }
    </div>
  );
}

export default App;
