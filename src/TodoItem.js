import './TodoItem.css'
import { FaCheck } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";


function TodoItem(props){
    return (
        <li className="TaskItem">
            <button
                onClick={props.onComplete}
                className={`MarkedAsDone MarkedAsDone-check ${props.completed && "MarkedAsDone-check--active"}`}>
                <FaCheck />
            </button>
            <span
                className={`TaskItem - p ${props.completed && "TaskItem-p--completed"}`}>
                {props.text}
            </span>
            <button
                onClick={props.onDelete}
                className="CloseTaskB">
                <FaMinus />
            </button>
        </li>
    );
}

export {TodoItem}