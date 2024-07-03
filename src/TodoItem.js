import './TodoItem.css'
function TodoItem(props){
    return (
        <li className="TaskItem">
            <button
                className={`MarkedAsDone MarkedAsDone-check ${props.completed && "MarkedAsDone-check--active"}`}>
                v
            </button>
            <span
                className={`TaskItem - p ${props.completed && "TaskItem-p--completed"}`}>
                {props.text}
            </span>
            <button
                className="CloseTaskB">
                x
            </button>
        </li>
    );
}

export {TodoItem}