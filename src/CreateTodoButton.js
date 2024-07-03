import './CreateTodoButton.css'
function CreateTodoButton(){
    return (
        <div style={{width: '100%', display: 'inline-flex', margin: '30px 0 20px 0'}}>
            <input placeholder="Agregar tarea" />
            <button className="TodoButton"> + </button>
        </div>
    );
}

export { CreateTodoButton }