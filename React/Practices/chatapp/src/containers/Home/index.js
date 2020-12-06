import React from "react";
import './style.css';
import { connect } from "react-redux";
import { setData, facebook_login } from "../../store/action";
import logo from '../../assets/logo.jpg'
import './../../config/firebase'
class Home extends React.Component {
  static getDerivedStateFromProps(props, state) {
    console.log("Props ==> ", props);
    return {};
  }

  render() {
    let user = {
      name: "Tehseen Jawed",
      email: "mtehseen@gmail.com",
    };
    console.log(this.props.history)
    return (
      <div>
        <div className="container">
            <img width="200px" src={logo}/>
        </div>
            <div className="subcontainer">
        <button className="button" onClick={() => this.props.facebook_login(this.props.history)}>Login With FaceBook</button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  users: state.users,
});
const mapDispatchToProps = (dispatch) => ({
  set_data: (data) => dispatch(setData(data)),
  facebook_login: (data) => dispatch(facebook_login(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
