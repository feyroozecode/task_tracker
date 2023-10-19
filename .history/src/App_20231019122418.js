import './App.css';

function App() {
  const userName = 'Ahmad'
  const isMan = true

  return (
    <div className="container">
      <h1>Task tracking </h1>
      <h3>Salam {userName} </h3>

      <p>Votre nom comporte  { userName.length.toString() } caracteres </p>
      {isMan ? 'Et le travail' : 'Et les enfants' }
    </div>
  );
}

export default App;
