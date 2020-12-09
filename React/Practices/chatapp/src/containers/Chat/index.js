import React from 'react';
import {connect} from 'react-redux';
import './style.css';
import {getMembersfromFirebase} from '../../store/action'
import firebase from '../../config/firebase';


class Chat extends React.Component{
    constructor(){
        super()
        this.state ={
            chat_user: {},
            chats:[],
            message:"",
            sendTo:{}
        }
    }

    get_message =(uid) =>{
        firebase.database().ref('/').child(`chats/${uid}`).on('child_added',(newdata)=>{
            console.log("It is new data",newdata.val())
            this.state.chats.push(newdata.val())
            this.setState({
                chats:this.state.chats,
            })
        }) 
        
    }
    setToChat =(data)=> {
        this.get_message(this.chatID())
        this.setState({
            chat_user : data,
        })
        console.log("====>",this.state.chats)
        
        // this.state.chats.push(this.state.message)
    }

    
    chatID = () =>{
        const chatUser = this.state.chat_user.uid;
        const user = this.props.current_user.uid;
        if(chatUser < user){
            return chatUser + user
        }
        else{
            return user + chatUser
        }

    }
    
    sendMesage = () => {
        // let chatUID = this.chatID();
        const user = this.props.current_user;
        firebase.database().ref(`/`).child(`chats/${this.chatID()}`).push({
            message:this.state.message,
            name:user.name,
            uid:user.uid
        })
        this.setState({
            // chats:this.state.chats,
            message:""
        })
        // this.state.message = ""
    }
    componentDidMount(){
        this.props.getMembersfromFirebase()
        
        
    }
    render(){
        const {email, name, profile, uid} = this.state.chat_user
        let user = this.props.current_user;
        // console.log("It is Dispatch Work sir ",this.props.users)
        // console.log("It is new one sir ",this.props.users)
        // console.log(this.state.chat_user)
        return(
            <div>
                <div className="Header">
                    <img className="profileImage" src={user.profile} alt="img"/>
                    <span className="profileName">{user.name}<br/> </span>
                    <span className="headerDots">ProChat.</span>
                </div>
                <div className="connectMenu">
                    <div className="menuTitle"><p>Friends</p></div>
                    {this.props.users.map((data,index)=>{
                        if(user.name != data.name){ 
                            this.state.sendTo = data
                          return <a onClick={() => this.setToChat(data)}> <div className="friendBar" key={index}>
                            <img className="friendPic" src={data.profile} alt="img" />
                            <span className="friendProfile profile">{data.name}<br/> </span>
                        </div></a>
                    
                        }
                    })}
                    
                </div>
                {Object.keys(this.state.chat_user).length ?
                
                <div className="Box">
                <div className="chatBox">
                    <div className="chatHeader">
                    <img className="friendPic" src={profile} alt="img" />
                    <span className="profileName boxHeader">{name}</span>
                </div>
                    <div className="chatBody">
                        {Object.keys(this.state.chats).length ? 
                            
                        <div>
                            {this.state.chats.map((v,i)=>{
                                if(v.uid != user.uid){
                                    console.log("New data here ==>>",v.message);
                                    return <div className="messages" key={i}>
                                    <img className="friendPic" src={this.state.sendTo.profile} alt="img" />
                                    <span className="profileName">{v.message}<br/> </span>
                                </div>
                                }
                                else{
                                    console.log("New data here ==>>",v.message);
                                    return <div className="messageRecieve" key={i}>
                                    <img className="friendPic mesgPic Picres" src={user.profile} alt="img" />
                                    <span className="profileName mesg Picres">{v.message}<br/> </span>
                                </div>
                                }
                            })}
                        </div>
                        :
                        <div style={{color:'gray', fontSize:20, padding:'1%'}}>No Messages Found</div>    
                    }
                        <input value={this.state.message} onChange={(e)=> this.setState({message : e.target.value})} className="msgBox" type="text" placeholder="Send Message"/>
                        <button className="messageBtn" onClick={() => this.sendMesage()}><i class="fas fa-paper-plane"></i></button>
                    </div>
                </div>
                </div>
                    
                    :
                    <h3>No State Updated</h3>
                }
                    
                
                </div>

        )
    }
}
const mapStateToProps= (state) =>({
    current_user: state.current_user,
    users: state.users
})
const mapDispatchToProps = (dispatch) => ({
    getMembersfromFirebase:() => dispatch(getMembersfromFirebase())
})
export default connect(mapStateToProps, mapDispatchToProps)(Chat);