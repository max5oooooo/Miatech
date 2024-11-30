import { Todo } from "./types";

const todos: Todo[] = [];



function addTodo(title:string,): void{
    let nextId = Date.now();
    const newTodo: Todo ={
        id: nextId,
        title:title,
        completed:false
    };
    todos.push(newTodo);
};

addTodo('Comprare il latte');
addTodo('Finire il progetto');
addTodo('Pulire la casa');

console.log(todos);