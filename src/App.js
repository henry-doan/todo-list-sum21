import { Component } from 'react';
import TodoList from './components/todos/TodoList';
import TodoForm from './components/todos/TodoForm';
import FilterBar from './components/shared/FilterBar';

class App extends Component {
  state = { todos: [
    { id: 1, title: "Learn Rails", complete: true },
    { id: 2, title: "Learn React", complete: false },
    { id: 3, title: "Learn Router", complete: false },
    // { id: 5, title: "eat dinner ", complete: false }
  ], filter: 'All' }

  setFilter = (filter) => {
    // this.setState({ filter: filter })
    this.setState({ filter })
  }

  // helper function to gen id
  getUniqId = () => {
    //NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  // { title: "eat dinner ", complete: false }
  addTodo = (incommingTodo) => {
    const { todos } = this.state 
    const newTodo = { id: this.getUniqId(), ...incommingTodo }
    // const newTodo = { id: this.getUniqId(), title: incommingTodo.title, complete: incommingTodo.complete }
    this.setState({ todos: [...todos, newTodo] })
  }

  completeUpdate = (id) => {
    const { todos } = this.state 
    this.setState({
      todos: todos.map( t => {
        if (t.id === id) {
          return {
            ...t,
            complete: !t.complete
          }
        }
        return t
      })
    })
  }

  visibleItems = () => {
    const { todos, filter } = this.state 
    // const todos = this.state.todos 
    // const filter = this.state.filter 
    switch(filter) {
      case 'Active':
        return todos.filter( t => !t.complete)
      case 'Complete':
        return todos.filter( t => t.complete)
      default:
        return todos
    }
  }

  render() {
    const { todos, filter } = this.state
    return (
      <>
        <h1>My Todo List</h1>
        <TodoForm addTodo={this.addTodo} />
        <FilterBar filter={filter} setFilter={this.setFilter} />
        {
          todos.length > 0 ? 
          <TodoList 
            // todos={todos} 
            todos={this.visibleItems()} 
            name="dpl" 
            completeUpdate={this.completeUpdate} 
          />
          :
          <p>
            No todos
          </p>
        }
      </>
    )
  }
}

export default App;