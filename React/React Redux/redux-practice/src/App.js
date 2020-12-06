import React from 'react';
import {connect} from 'react-redux';

class App extends React.Component{

  render(){
    console.log(this.props)
    return(
      <div>Welcome </div>
      )
  }
}

const mapStateToProps = (state)=>({
  name : state.name
})

// export default App;
export default connect(mapStateToProps,null)(App);
