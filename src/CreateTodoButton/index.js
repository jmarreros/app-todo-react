import "./CreateTodoButton.css";

function CreateTodoButton() {
    return (
        <section className="footer">
            <button onClick={
                () => console.log('Le diste click')
            }>
                Crear Tarea
            </button>
        </section >
    )
}

export { CreateTodoButton }