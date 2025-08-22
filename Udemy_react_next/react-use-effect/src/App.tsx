import useFetch from "./hooks/useFetch";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const App = () => {

  const {data: todo, isLoading, error} = useFetch<Todo>("https://jsonplaceholder.typicode.com/todos/1")
  
  if(isLoading) return <p>Loading...</p>;
  if(error) return <p>{error}</p>
  if(!todo) return <p>Sin todo...</p>

  return (
    <div>
      <h1>Fetch</h1>
      <div>
        <pre>{JSON.stringify(todo, null, 2)}</pre>
        <h1>{todo?.title}</h1>
      </div>
    </div>
  );
};
export default App