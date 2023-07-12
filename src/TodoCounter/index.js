import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
  const { completedTodos: completed, totalTodos: total } = React.useContext(TodoContext);

  return (
    <h1>
      <span className="completed">{completed}</span>
      &nbsp;tareas completadas de&nbsp;
      <span className="total">{total}</span>
    </h1>
  );
}

export { TodoCounter };


// if (total === completed && total > 0) {
//   return (
//     <h1>Felicidades!! 🚀 Has completado todo!!</h1>
//   )
// }

