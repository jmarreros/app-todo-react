import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="list-item">
      <span className={`status ${props.completed ? "completed" : "uncompleted"}`}>
        <i className={props.completed ? "fa-solid fa-circle-check" : "fa-regular fa-circle"}></i>
      </span>
      <p className={`text ${props.completed && "completed"}`}>{props.text}</p>
      <span className="remove uncompleted"><i className="fa-solid fa-xmark"></i></span>
    </li>
  );
}

export { TodoItem }