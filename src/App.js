import {TodoCounter} from "./TodoCounter";
import {TodoSearch} from "./TodoSearch";
import {TodoList} from "./TodoList";
import {TodoItem} from "./TodoItem";
import {CreateTodoButton} from "./CreateTodoButton";
import React from 'react';

const defaultTodos = [
    {text: "cortar cebolla", completed: true},
    {text: "tomar curso", completed: false},
    {text: "llorar con la llorona", completed: false},
    {text: "lalalala", completed: false}
]

function App() {
  return (
    <React.Fragment>
        <h1>TODOs Manager</h1>
        <TodoCounter completed={16} total={25}/>
        <CreateTodoButton />

        <TodoSearch />
        <TodoList>
            {defaultTodos.map(todo =>(
                <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
            ))}
        </TodoList>
    </React.Fragment>
  );
}

export default App;
