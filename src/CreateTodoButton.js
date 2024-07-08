import './CreateTodoButton.css'
function CreateTodoButton(){
    return (
        <div style={{width: '100%', display: 'inline-flex', margin: '30px 0 20px 0'}}>
            <input placeholder="Agregar tarea" />
            <button className="TodoButton"
                    onClick={
                        ()=> console.log('le diste click')
                     }> +
            </button>
        </div>
    );
}

export { CreateTodoButton }