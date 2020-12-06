import React from "react";
import "./App.css";
import Data from "./data.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      flag:false,
    };
  }
  addTodo = () => {
    const object = { task: this.state.value };
    Data.push(object);
    this.setState({ value: "" });
  };
  updateData = (index ,value, item) => {
    Data[index].task = value
    Data[index].edit = false
    this.setState({ value: "" , flag:false}); 
  }
  editTodo = (index, item) => {
    if(this.state.flag === false){
      Data[index].edit = true
    this.setState({flag:true})
    }
    else{
      this.updateData(index , this.state.value)
    }
  }
  deleteTodo = (index) => {
    Data.splice(index, 1);
    this.setState({ value: "" });
  };

  render() {
    return (
      <div>
        <input
          onChange={(e) => this.setState({ value: e.target.value })}
          // value={this.state.value}
          type='text'
          placeholder='Enter Your Text'
        />
        <button onClick={this.addTodo}>Add</button>
        <ul>
          {Data.map((item, index) => {
            return (
              <li key={index}>
                {item.edit? <input placeholder={item.task} onChange={(e) => this.setState({ value: e.target.value })} type="text"/>  : item.task}
                <button onClick={() => this.editTodo(index, item)}>Edit</button>
                <button onClick={() => this.deleteTodo(index)}>Delete</button>
                {/* <button>Delete</button> */}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
