
function DeleteIcon({ onDelete }) {
    return (
        <span
            className="remove uncompleted"
            onClick={onDelete}
        >
            <i className="fa-solid fa-xmark"></i>
        </span>
    );
}

export { DeleteIcon }