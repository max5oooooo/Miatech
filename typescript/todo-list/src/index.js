"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todos = [];
function addTodo(title) {
    var nextId = Date.now();
    var newTodo = {
        id: nextId++,
        title: title,
        completed: false
    };
    todos.push(newTodo);
}
;
addTodo('Comprare il latte');
addTodo('Finire il progetto');
addTodo('Pulire la casa');
console.log(todos);
