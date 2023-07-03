function TodoItem(props) {
  return (
    <li className="list-items">
      <span className="status">{props.completed}</span>
      <p className="text">{props.text}</p>
      <span className="remove">X</span>
    </li>
  );
}

export { TodoItem }