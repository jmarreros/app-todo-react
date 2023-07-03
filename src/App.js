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
  return (
    <>

      <TodoCounter total={30} completed={4} />
      <TodoSearch />

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
