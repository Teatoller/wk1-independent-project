import './App.css';
import AddTask from './components/AddTask';

function App() {

  const addTask = () => {};
  
  return (
    <div className="App">
      <h1>Task Manager</h1>
      <AddTask addTask={addTask} />
    </div>
  );
}

export default App;
