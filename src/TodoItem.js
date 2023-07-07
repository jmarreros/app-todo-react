import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="list-item">
      <span
        className={`status ${props.completed ? "completed" : "uncompleted"}`}
        onClick={props.onCompleted}
      >
        <i className={props.completed ? "fa-solid fa-circle-check" : "fa-regular fa-circle"}></i>
      </span>
      <p className={`text ${props.completed && "completed"}`}>{props.text}</p>
      <span
        className="remove uncompleted"
        onClick={props.onDelete}
      >
        <i className="fa-solid fa-xmark"></i>
      </span>
    </li >
  );
}

// function handleComplete(props) {
//   const todos = props.todos;
//   const setTodos = props.setTodos;

//   const tmpTodo = todos.map(todo => {
//     if (todo.text === props.text) {
//       todo.completed = !todo.completed;
//     }
//     return todo;
//   })

//   setTodos(tmpTodo);
// }

// function handleRemove(props) {
//   const todos = props.todos;
//   const setTodos = props.setTodos;
//   const tmpTodo = todos.filter(todo => todo.text !== props.text);

//   setTodos(tmpTodo);
// }

export { TodoItem }