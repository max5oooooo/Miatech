import { Todo, TodoRecord } from './types';  

// Funzione generica filterTodos
function filterTodos<T>(todos: T[], filterFn: (todo: T) => boolean): T[] {
  return todos.filter(filterFn);
}

// Esportiamo la funzione filterTodos per poterla usare in altri file
export { filterTodos };


function convertArrayToRecord(todos: Todo[]): TodoRecord {
    return todos.reduce((record, todo) => {
      record[todo.id] = todo;
      return record;
    }, {} as TodoRecord);  // Inizializziamo come oggetto vuoto di tipo TodoRecord
  }
  
  // Esportiamo la funzione
  export { convertArrayToRecord };