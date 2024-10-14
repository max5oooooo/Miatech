import useFetch from "../hook/UseFetch";


function TodoList() {
  const { data: todos, isLoading, error } = useFetch('https://jsonplaceholder.typicode.com/todos');

  return (
    <div>
      {isLoading && <p>Caricamento...</p>}
      {error && <p>Si è verificato un errore: {error.message}</p>}
      {todos && (
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;