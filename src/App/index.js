import React from "react";
import { AppUI } from './AppUI';
import './App.css';
import { useLocalStorage } from './useLocalStorage';

// const defaultTodos = [
//   { text: 'cortar cebolla', completed: true },
//   { text: 'estudiar curso', completed: true },
//   { text: 'salir a correr', completed: false },
//   { text: 'bailar con video', completed: false },
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

function App() {

  let {
    item: todos,
    saveItem: saveTodos,
    loading,
    error } = useLocalStorage('TODOS_V1', []);
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
    <AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      handleOnCompleted={handleOnCompleted}
      handleOnDelete={handleOnDelete}
    />
  )
}

export default App;
