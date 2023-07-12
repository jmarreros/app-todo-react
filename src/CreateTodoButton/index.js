import React from "react";
import { TodoContext } from "../TodoContext";
import "./CreateTodoButton.css";

function CreateTodoButton() {
    const { openModal, setOpenModal } = React.useContext(TodoContext);

    return (
        <section className="footer">
            <button onClick={
                () => setOpenModal(!openModal)
            }>
                Crear Tarea
            </button>
        </section >
    )
}

export { CreateTodoButton }