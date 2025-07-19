export function DessertList(props) {
  const lowCaloriesDesserts = props.topDesserts
    .filter((dessert) => {
      return dessert.calories < 500;
    })
    .sort((a, b) => {
      return a.calories - b.calories
    })
    .map((dessert) => {
      return (
        <li>
          {dessert.title} - {dessert.calories} cal
        </li>
      )
    })
  return <ul>{lowCaloriesDesserts}</ul>;
}

export function ToDo(props) {
    return (
    <tr>
        <td>
        <label>{props.id}</label>
        </td>
        <td>
        <input />
        </td>
        <td>
        <label>{props.createdAt}</label>
        </td>
    </tr>
  )
}