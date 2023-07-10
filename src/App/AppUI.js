import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodosEmpty } from '../TodosEmpty';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI(
    {
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        handleOnCompleted,
        handleOnDelete }
) {
    return (
        <>

            <TodoCounter total={totalTodos} completed={completedTodos} />
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

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

        </>
    );
}

export { AppUI }