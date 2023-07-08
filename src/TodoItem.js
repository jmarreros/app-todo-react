import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';
import "./TodoItem.css";

function TodoItem(props) {

  return (
    <li className="list-item">

      <CompleteIcon isCompleted={props.completed} onCompleted={props.onCompleted} />
      <p className={`text ${props.completed && "completed"}`}>{props.text}</p>
      <DeleteIcon onDelete={props.onDelete} />

    </li >
  );
}

export { TodoItem }