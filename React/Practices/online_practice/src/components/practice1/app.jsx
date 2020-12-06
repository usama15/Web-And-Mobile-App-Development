import React from 'react';

class Practice1 extends React.Component{
    constructor(){
        super()
        this.state={
            username: 'Tehseen',
            email   : 'tehseenjawed1@gmail.com'
        }  
    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value,
        })
    }
    render(){
        return(
            <div>
                <label htmlFor="#username">Your Username</label>
                <input id="username" name="username" type="text" onChange={(e) => this.setState({username:e.target.value})} placeholder="Add Your Name"/>
                <label htmlFor="#email">Your Email</label>
                <input id="email" name="email" type="text" onChange={(e)=> this.handleChange(e)} placeholder="Add Your Email"/>
                <h3>Your Name</h3>
                <h2>{this.state.username}</h2>
                <h3>Your Email</h3>
                <h2>{this.state.email}</h2>
            </div>
        )
    }
}
export default Practice1;