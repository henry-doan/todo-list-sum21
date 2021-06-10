// const TodoList = (props) => (

// )

// const TodoList = (props) => {
//   props.todos 
// props.name
// const TodoList = ({ todos, name }) => {
//   // logic
//   return (
//     <>
//       <h1>{name}</h1>
//       <ul>
//         {
//           todos.map( t => 
//             <li>
//               {t.title}
//             </li>
//           )
//         }
//       </ul>
//     </>
//   )
// }

import Todo from './Todo';

const TodoList = ({ todos, name, completeUpdate }) => {
  // logic
  return (
    <>
      <h1>{name}</h1>
      <ul>
        {
          todos.map( t => 
            <Todo {...t} completeUpdate={completeUpdate} />
            // <Todo title={t.title} id={t.id} complete={t.complete} />
          )
        }
      </ul>
    </>
  )
}

export default TodoList;