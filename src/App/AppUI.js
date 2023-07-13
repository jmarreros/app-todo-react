import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodosEmpty } from '../TodosEmpty';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoContext } from '../TodoContext';

function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        handleOnCompleted,
        handleOnDelete,
        openModal
    } = React.useContext(TodoContext);

    return (
        <>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {loading && <TodosLoading />}
                {error && <TodosError />}
                {(!loading && searchedTodos.length === 0) && <TodosEmpty />}
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

            {openModal && (
                <Modal >
                    <TodoForm />
                </Modal>
            )}
        </>
    );
}

export { AppUI }