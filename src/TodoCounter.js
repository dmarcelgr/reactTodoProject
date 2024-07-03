import './TodoCounter.css'
function TodoCounter({total, completed}) {
    return (
        <h3 className="TodoCounter">
            You have completed <span>{completed}</span> of <span>{total}</span> TODOS!
        </h3>
    );
}

export { TodoCounter }