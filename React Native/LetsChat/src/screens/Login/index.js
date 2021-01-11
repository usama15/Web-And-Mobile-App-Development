import React, { useState } from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Image, TextInput,View,ImageBackground} from 'react-native';
import { Container, Header, Text, Button, Content, Form, Item, Input, Label } from 'native-base';
import database from '@react-native-firebase/database';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import auth from '@react-native-firebase/auth';
function App(props){
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  var [state, freshState] = useState(0);
   
    const facebookLogin = async () =>{
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }

  // Once signed in, get the users AccesToken
  const data = await AccessToken.getCurrentAccessToken();

  if (!data) {
    throw 'Something went wrong obtaining access token';
  }

  // Create a Firebase credential with the AccessToken
  const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

  // Sign-in the user with the credential
  auth().signInWithCredential(facebookCredential)
  .then((user)=>{
    const facebookData = user.additionalUserInfo.profile;
    const userData = {
      email:facebookData.email,
      name: facebookData.name,
      picURL: facebookData.picture.data.url,
      uid: facebookData.id
    }
    database().ref('/').child(`users/${facebookData.id}`).set(userData)
    .then((data) => props.navigation.navigate('Home',userData))
    
  })
  .catch((error)=>{
    console.log('Error ===> ',error)
  })
    
  
    }

  return (
    <>
      <Container>
        <ImageBackground style={{width:415, height:900, flex:1,}} source={require('../../assets/Login/background.jpg')}>
        <Content>
          <View style={styles.mainContainer}>
          <Image style={{width:150, height:150, }} source={require("../../assets/logo.png")}/>
          </View>
          <Form style={styles.Form}>
            
              <TextInput value={username} placeholder='Username' onChangeText={(text) => setUsername(text)} style={styles.Input} />
            
              <TextInput placeholder='Password' value={password} onChangeText={(text) => setPassword(text)}  style={styles.Input}  />
            
            <Button onPress={() => props.facebook_login(zzzprops.history)}  style={styles.LoginBtn} rounded info>
            {/* <button className="button" onClick={() => this.props.facebook_login(this.props.history)}>Login With FaceBook</button> */}
        
            
            <Text>Login</Text>
          </Button>
          <View style={styles.BtnGroup}>
          <Button onPress={facebookLogin}  style={styles.FButton} rounded>
            <Text>Facebook</Text>
          </Button>
          {/* <Button onPress={action} style={styles.FButton} rounded danger>
            <Text>Google</Text>
          </Button> */}
          </View>
          </Form>
        </Content>
        </ImageBackground>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingTop:100,

    },
    Container:{
        
    },
    Label:{
        color:'#77cae8',
        fontSize:13
    },
    Input:{
        width:360,
        marginTop:20,
        borderBottomWidth:.5,
        borderBottomColor:'#77cae8',
        padding:10,
        color:'#77cae8',
        fontSize:15,
    },
    LoginBtn:{
        width:370,
        justifyContent:'center',
        marginTop:20,
        borderWidth:0
    },
    Form:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        flexWrap:'wrap',
        padding:20,
        paddingTop:80,
    },
    BtnGroup:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        flexWrap:'wrap',
    },
    FButton:{
      width:300,
      justifyContent:'center',
      marginTop:20,
      borderWidth:0,
      margin:5,
      fontSize:10
    }
  
});
const mapStateToProps = (state)=>({
  name : state.name
})
const mapDispatchToProps = (dispatch)=>({
  facebook_login: (data) => dispatch(facebook_login(data)),
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
