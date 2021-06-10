const Todo = ({ id, title, complete, completeUpdate }) => {
  return (
    <li 
      style={ complete ? {...styles.complete} : {} }
      onClick={ () => completeUpdate(id)}
    >
      { title }
    </li>
  )
}

const styles = {
  complete : {
    color: 'grey',
    textDecoration: 'line-through'
  }
}

export default Todo;