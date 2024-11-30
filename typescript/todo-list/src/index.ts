import { Todo, TodoWithMetadata } from "./types";
const todos: Todo[] = [
    { id: 1, title: "Prova 1", completed: false },
    { id: 2, title: "Prova 2", completed: true }
  ];

  function addTodo(title: string, userId?: number, /*metadata?: any*/ metadata?:string | object): void{
    let nextId = Date.now();
    const newTodo: Todo ={
        id: nextId,
        title:title,
        completed:false,
        userId,
        metadata,
    };
    todos.push(newTodo);
};

addTodo('Comprare il latte');
addTodo('Finire il progetto');
addTodo('Pulire la casa');
addTodo('todos con userId e metadata',53,{ priority: "high", dueDate: "03-08-2025" });

console.log(todos)


function assignTodoToUser(todos: Todo[], todoId: number, userId: number): Todo | undefined {
    // Trova il todo con l'ID corrispondente
    const todo = todos.find(todo => todo.id === todoId);
    
    // Se il todo è trovato, assegna il userId
    if (todo) {
      todo.userId = userId;
    }
    
    // Restituisce il todo aggiornato o undefined se non trovato
    return todo;
  };

  assignTodoToUser(todos, 1, 42);

  console.log(todos);



  function getUserTodos(todos: Todo[], userId: number): Todo[] {
    // Filtra i todo che hanno un userId corrispondente
    return todos.filter(todo => todo.userId === userId);
  }


const userId42 = getUserTodos(todos, 42);

console.log(userId42);


function error(message: string): never {
    throw new Error(message);  // Lancia un errore con il messaggio passato
  };




function parseInput(input: unknown): string {
    if (typeof input === "string") {
      return input;  // Se l'input è una stringa, restituiscilo com'è
    } else if (typeof input === "number") {
      return input.toString();  // Se l'input è un numero, restituisci la sua rappresentazione in stringa
    } else {
      // Se l'input non è né una stringa né un numero, lancia un errore
      error("attenzione errore");
    }
  };


  try {
    console.log(parseInput("Hello, world!"));  // Output: "Hello, world!"
    console.log(parseInput(42));  // Output: "42"
    console.log(parseInput(true));  // Questo lancerà un errore
  } catch (e:unknown) {
    if (e instanceof Error) {
        console.log(e.message);  // Output: Invalid input: must be a string or a number
    }
  };
  

  const todoMetaData: TodoWithMetadata ={
    id: 67,
    title: "Todo with Meta Data",
    completed: true,
    userId: 67,
    metadata: { priority: "low", dueDate: "01-12-2025" }
  }

  console.log(todoMetaData);