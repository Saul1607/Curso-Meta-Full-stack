import { useEffect, useState } from "react";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos/100000")
//       .then(res => {
//         if(res.ok) return res.json()
//         throw new Error("404 en la API")
//       })
//       .then((data: Todo) => {
//         console.log(data);
//         setTodo(data);
//       })
//       .catch((e: unknown) => {
//         if (e instanceof Error){
//           setError(e.message);
//           return
//         }
//         console.log(e);
//         setError("Error más grave...");
//       })
//       .finally(() => {
//         setIsLoading(false);
//       })
//   }, []);

const App = () => {

  const [todo, setTodo] = useState<Todo | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        if(!res.ok) throw new Error("404 en la API");
        const data = (await res.json()) as Todo;
        setTodo(data);
      } catch (e: unknown) {
        if (e instanceof Error){
           setError(e.message);
           return;
         }
         console.log(e);
         setError("Error más grave...");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if(isLoading) return <p>Loading...</p>;
  if(error) return <p>{error}</p>

  return (
    <div>
      <h1>Fetch</h1>
      <div>
        <pre>
          {
            JSON.stringify(todo, null, 2)
          }
        </pre>
      </div>
    </div>
  );
};
export default App