import React from 'react';
import ReactDOM from 'react-dom';
const rootDir = document.getElementById('root')

class App extends React.Component{
  render(){
    return(
      <div><h2>Welcome to my APP</h2></div>
    )
  }
}

ReactDOM.render(
  <App />,
  rootDir
);