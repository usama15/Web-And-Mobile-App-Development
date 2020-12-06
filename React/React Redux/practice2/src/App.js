import './App.css';
import {connect} from 'react-redux'
import {set_data} from './store/action';

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <header className="App-header">
        
          <button onClick={()=> props.set_data("New Data is going from here")}>Dispatch</button>
          Learn React
      </header>
    </div>
  );
}
const mapStateToProps = (state)=>({
  acc_id : state.acc.id,
  name: state.customer.customerName,
  balance: state.acc.balance,
  account_type: state.customer.type
})

const mapDispatchToProps = (dispatch)=>({
   set_data: (data) => dispatch(set_data(data))
})


export default connect(mapStateToProps,mapDispatchToProps)(App);
