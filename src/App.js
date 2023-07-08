import React from "react";
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

// const defaultTodos = [
//   { text: 'cortar cebolla', completed: true },
//   { text: 'estudiar curso', completed: true },
//   { text: 'salir a correr', completed: false },
//   { text: 'bailar con video', completed: false },
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

function useLocalStorage(itemName, initialValue) {
  const localStorageItems = localStorage.getItem(itemName);

  let parsedItem;

  if (!localStorageItems) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItems);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }

  return [item, saveItem];
}

function App() {

  let [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  // Derivate state
  const searchedTodos = todos.filter(
    todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );

  const handleOnCompleted = (keyText) => {
    const newTodos = [...todos];

    const todoIndex = newTodos.findIndex((todo) => todo.text === keyText);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;

    saveTodos(newTodos);
  }

  const handleOnDelete = (keyText) => {
    const newTodos = todos.filter(todo => todo.text !== keyText);

    saveTodos(newTodos);
  }

  return (
    <>

      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {
          searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onCompleted={() => handleOnCompleted(todo.text)}
              onDelete={() => handleOnDelete(todo.text)}
            />
          ))
        }
      </TodoList>

      <CreateTodoButton />

    </>
  );
}

export default App;
