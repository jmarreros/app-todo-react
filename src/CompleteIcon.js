
function CompleteIcon(props) {
    return (
        <span
            className={`status ${props.isCompleted ? "completed" : "uncompleted"}`}
            onClick={props.onCompleted}
        >
            <i className={props.isCompleted ? "fa-solid fa-circle-check" : "fa-regular fa-circle"}></i>
        </span>
    );
}

export { CompleteIcon };