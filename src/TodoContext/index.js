import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const {
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
        <TodoContext.Provider value={
            {
                loading,
                error,
                completedTodos,
                totalTodos,
                searchValue,
                setSearchValue,
                searchedTodos,
                handleOnCompleted,
                handleOnDelete
            }
        }>
            {children}
        </TodoContext.Provider>
    )
}


<TodoContext.Consumer></TodoContext.Consumer>

export { TodoContext, TodoProvider }