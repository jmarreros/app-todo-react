import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <h1>
      <span className="completed">{completed}</span>
      &nbsp;tareas completadas de&nbsp;
      <span className="total">{total}</span>
    </h1>
  );
}

export { TodoCounter };
