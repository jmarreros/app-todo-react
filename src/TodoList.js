import "./TodoList.css";

function TodoList({ children }) {
  return (
    <ul class="list">
      {children}
    </ul>
  );
}

export { TodoList };