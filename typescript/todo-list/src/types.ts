export interface Todo {
    id:number;
    title:string;
    completed:boolean;
    userId?:number;
    status?: TodoStatus;
    /*metadata?: any;  // Aggiunta la proprietà metadata opzionale con tipo any*/
    metadata?:string | object;
  };


  export interface User {
    id:number;
    name:string;
    email:string;
    readonly todos?: ReadonlyArray<Todo>;
  }

  export interface TodoWithMetadata extends Todo {
    metadata: any;  // La proprietà metadata è ora obbligatoria
  }


  export interface Project {
    id: number;
    name: string;
    users: User[];
    todos: Todo[];
  }


  export enum TodoStatus {
    Pending = "Pending",
    InProgress = "InProgress",
    Completed = "Completed"
  }

  export type PartialTodo = {
    [K in keyof Todo]?: Todo[K];
  };

  export type TodoRecord = {
    [id: number]: Todo;
  };