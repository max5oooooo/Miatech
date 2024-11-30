export interface Todo {
    id:number;
    title:string;
    completed:boolean;
    userId?:number;
    /*metadata?: any;  // Aggiunta la proprietà metadata opzionale con tipo any*/
    metadata?:string | object;
  };


  export interface User {
    id:number;
    name:string;
    email:string;
  }

  export interface TodoWithMetadata extends Todo {
    metadata: any;  // La proprietà metadata è ora obbligatoria
  }