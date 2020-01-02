import React from "react";
import { addTodo } from "../Actions/actions";
import { connect } from "react-redux";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItem: ""
    };
  }
  addTodo = e => {
    e.preventDefault();
    console.log(this.state.todoItem);
    this.props.addTodoItem(this.state.todoItem);
    this.setState({ todoItem: "" });
  };
  todoItem = event => {
    this.setState({ todoItem: event.target.value });
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <form onSubmit={e => this.addTodo(e)}>
          <input
            type="text"
            name="todoItem"
            value={this.state.todoItem}
            onChange={e => this.todoItem(e)}
          />
          <button type="submit">Submit</button>
        </form>
        {this.props.todos
          ? this.props.todos.map((item, index) => <li key={index}>{item}</li>)
          : ""}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodoItem: data => dispatch(addTodo(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
