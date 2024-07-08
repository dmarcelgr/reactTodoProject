import {TodoCounter} from "./TodoCounter";
import {TodoSearch} from "./TodoSearch";
import {TodoList} from "./TodoList";
import {TodoItem} from "./TodoItem";
import {CreateTodoButton} from "./CreateTodoButton";
import React from 'react';

// const defaultTodos = [
//     {text: "cortar cebolla", completed: true},
//     {text: "tomar curso", completed: false},
//     {text: "llorar con la llorona", completed: false},
//     {text: "lalalala", completed: false},
//     {text: "estados derivados", completed: true}
// ]
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');

function useLocalStorage(itemName, initialValue){

    const localStorageItem = localStorage.getItem(itemName);

    let parsedItem;

    if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
    } else {
        parsedItem = JSON.parse(localStorageItem);
    }

    const [item, setItem] = React.useState(parsedItem);

    const saveItem = (newItem) => {
        localStorage.setItem(itemName,JSON.stringify(newItem));
        setItem(newItem);
    }

    return [item, saveItem];

}

function App() {

    const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');

    const completedTodos = todos.filter(
        todo => !!todo.completed
    ).length;
    const totalTodos = todos.length;

    const searchedTodos = todos.filter(
        (todo) => {

            // función texto sin tildes
            const noTildes = (text) => {
                return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            };

            // Normalizando texto sin tildes y a Lower Case
            const TodoTextLC = noTildes(todo.text.toLowerCase());
            const searchTextLC = noTildes(searchValue.toLowerCase());

            //renderizar con filtro
            return TodoTextLC.includes(searchTextLC);
        }
    );
    const completeTodo = (text) =>{
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    }

    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }


  return (
    <React.Fragment>

        <h1>TODOs Manager</h1>
        <TodoCounter completed={completedTodos} total={totalTodos}/>
        <CreateTodoButton />

        <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
        />
        <TodoList>
            {searchedTodos.map(todo =>(
                <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                />
            ))}
        </TodoList>
    </React.Fragment>
  );
}

export default App;
