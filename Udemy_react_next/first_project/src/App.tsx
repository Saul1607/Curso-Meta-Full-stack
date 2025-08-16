const App = () => {

  const products = [
    { title: "🍉", id: 1 },
    { title: "🍎", id: 2 },
    { title: "🍐", id: 3 },
  ];

  return (
    <div>
      <h1>Listas</h1>
      <ul>
        {
          products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))
        }
      </ul>
    </div>
  )
}
export default App