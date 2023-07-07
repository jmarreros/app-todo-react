import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  if (total === completed && total > 0) {
    return (
      <h1>Felicidades!! 🚀 Has completado todo!!</h1>
    )
  }

  return (
    <h1>
      <span className="completed">{completed}</span>
      &nbsp;tareas completadas de&nbsp;
      <span className="total">{total}</span>
    </h1>
  );
}

export { TodoCounter };
