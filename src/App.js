import React from "react";
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

const defaultTodos = [
  { text: 'cortar cebolla', completed: true },
  { text: 'estudiar curso', completed: true },
  { text: 'salir a correr', completed: false },
  { text: 'bailar con video', completed: false },
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  return (
    <>

      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {
          defaultTodos.map(todo => (
            <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
          ))
        }
      </TodoList>

      <CreateTodoButton />

    </>
  );
}

export default App;
