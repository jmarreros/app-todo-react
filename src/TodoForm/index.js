import React from 'react';
import './TodoForm.css';
import { TodoContext } from '../TodoContext';

function TodoForm() {
    const { addTodo, setOpenModal } = React.useContext(TodoContext);

    // Crear estados locales
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = (e) => {
        setOpenModal(false);
    }

    const onChange = (e) => {
        setNewTodoValue(e.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <h3>Ingresa una nueva tarea</h3>
            <input type="text"
                placeholder='Ingresa una tarea'
                value={newTodoValue}
                onChange={onChange}
                required
            />
            <div className="btnContainer">
                <button onClick={onCancel} type="button" className="btn btn-cancel">Cancelar</button>
                <button type="submit" className='btn btn-save'>Cuardar</button>
            </div>
        </form>
    )
}

export { TodoForm };