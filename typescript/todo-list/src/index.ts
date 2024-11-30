import { PartialTodo, Project, Todo, TodoStatus, TodoWithMetadata, User } from "./types";
import UserU from "./User";
import { convertArrayToRecord } from "./utils";
const todos: Todo[] = [
    { id: 1, title: "Prova 1", completed: false },
    { id: 2, title: "Prova 2", completed: true }
  ];

  function addTodo(title: string, userId?: number, /*metadata?: any*/  metadata?:string | object): void{
    let nextId = Date.now();
    const newTodo: Todo ={
        id: nextId,
        title:title,
        completed:false,
        status:TodoStatus.Pending,
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


  function updateTodo(id: number, updates: Partial<Todo>): Todo | undefined {
    // Trova il Todo da aggiornare
    const todo = todos.find(todo => todo.id === id);
    
    if (!todo) {
      console.log(`Todo con id ${id} non trovato.`);
      return undefined;
    }
  
    // Applica gli aggiornamenti
    Object.assign(todo, updates);
  
    return todo;
  };


const updateTodo1 = updateTodo(1, { title: "Prova 1 aggiornata" });
console.log(updateTodo1);

// Aggiorna il completamento e aggiunge metadata a un altro Todo
const updateTodo2 = updateTodo(2, { completed: false, metadata: { priority: "low" } });
console.log(updateTodo2);



// Funzione getTodoSummary che restituisce una tupla (title, completed)
function getTodoSummary(todo: Todo): [string, boolean] {
    return [todo.title, todo.completed];
  }
  
  const exampleTodo: Todo = {
    id: 1,
    title: "Summary Todo",
    completed: false
  };
  
  const summary = getTodoSummary(exampleTodo);
  
  console.log(summary);  


  function createProject(id: number, name: string, users: User[], todos: Todo[]): Project {
    return {
      id: id,
      name: name,
      users: users,
      todos: todos
    };
  }


const user1: User = { id: 1, name: "Alessandro", email: "Alessandro@hotmail.com" };
const user2: User = { id: 2, name: "Francesco", email: "Francesco@hotmail.com" };

const todo1: Todo = { id: 1, title: "Iniziare il progetto", completed: false, userId: 1 };
const todo2: Todo = { id: 2, title: "Finire il progetto", completed: false, userId: 2 };

const newProject = createProject(1, "Project 1", [user1, user2], [todo1, todo2]);

console.log(newProject);


function updateTodoStatus(todoId: number, status: TodoStatus): void {
    // Troviamo il Todo con l'ID corrispondente
    const todo = todos.find(t => t.id === todoId);
    
    if (todo) {
      // Aggiorniamo lo stato del Todo
      todo.status = status;
      console.log(`Todo con id ${todoId} aggiornato allo status: ${status}`);
    } else {
      // Se il Todo non viene trovato, lanciamo un errore
      console.error(`Todo con id ${todoId} non trovato.`);
    }
  }
  

  updateTodoStatus(1,TodoStatus.Completed);
  updateTodoStatus(2,TodoStatus.InProgress);


  const classUser1= new UserU(1,"Alessandro", "Alessandro@hotmail.com");
  const classUser2= new UserU(2,"Francesco", "Francesco@hotmail.com");

  const todoProva1:Todo={
    id: 3,
    title: "Completare esercizi",
    completed: false,
    status: TodoStatus.InProgress
  };
  const todoProva2:Todo={
    id: 3,
    title: "Iniziare esercizi",
    completed: true,
    status: TodoStatus.Completed
  };

  classUser1.addTodo(todoProva1);
  classUser2.addTodo(todoProva2);

  console.log("Todos of User 1:", classUser1.todos);
  console.log("Todos of User 2:", classUser2.todos);

  function updatePartialTodo(todoId: number, partialTodo: PartialTodo): Todo | undefined {
    // Troviamo il Todo con l'id corrispondente
    const todo = todos.find((t) => t.id === todoId);
    
    if (!todo) {
      console.error("Todo non trovato");
      return undefined;
    }
    
    // Aggiorniamo il Todo con le proprietà specificate in partialTodo
    Object.assign(todo, partialTodo);
  
    return todo;
  }

  const updatedTodo = updatePartialTodo(2, { completed: true, status: TodoStatus.Completed });
  console.log(updatedTodo);
  console.log(todos);


  
const todoRecord = convertArrayToRecord(todos);

console.log(todoRecord);