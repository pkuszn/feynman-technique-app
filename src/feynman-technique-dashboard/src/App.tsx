import './App.css';
import * as React from 'react';
import InputField from './components/InputField';
import { Todo } from './model'
import TodoList from './components/TodoList';

const App : React.FC = () => {

  const [todo, setTodo] = React.useState<string>("");
  const [todos, setTodos] = React.useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}]);
    }

    setTodo("");
  };

  //https://www.youtube.com/watch?v=FJDVKeh7RJI&t=286s
  
  console.log(todos);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;