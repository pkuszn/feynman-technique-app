import './App.css';
import * as React from 'react';
import InputField from './components/InputField';

const App : React.FC = () => {

  const [todo, setTodo] = React.useState<string>("");
  
  console.log(todo);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
