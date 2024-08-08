import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: "Do the laundry" },
        { text: "Iron the clothes" },
        { text: "Go for a walk" }
      ]
    };
  }
  handleAdd = (text) => {
    let {todos} = this.state
    todos.push({text})
    this.setState({
      todos: todos
    })
    console.log(todos)
  };

  handleRemove = (text) => {
    let {todos} = this.state
    console.log({text})
    const ind = todos.findIndex(todo => todo.text === text);
    console.log(ind)
    if (ind !== -1) {
      todos = [...todos];  
      todos.splice(ind, 1); 
    }

    this.setState({
      todos: todos
    })
    console.log(todos)
  };

  render() {
    const {todos} = this.state
    return (
      <div className="App">
        <span>Todo List</span>
        <Form handleAdd={this.handleAdd}/>
        <List todos={todos} handleRemove={this.handleRemove}/>
      </div>
    );
  }
}
