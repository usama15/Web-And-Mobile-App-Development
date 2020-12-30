import React, { Component } from 'react';
import {StyleSheet, View, ImageBackground, Image} from 'react-native';
import { Container, Header, Text, Button, Content, Form, Item, Input, Label } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
    // conso
  return (
    <>
      <Container>
        <ImageBackground style={{width:400, height:900}} source={require('../../assets/Login/background.jpg')}>
        <Content>
          <View style={styles.mainContainer}>
          <Image style={{width:100, height:100, }} source={require("../../assets/logo.png")}/>
          </View>
          <Form style={styles.Form}>
            <Item floatingLabel>
              <Label style={styles.Label}>Username</Label>
              <Input  style={styles.Input} />
            </Item>
            <Item floatingLabel last>
              <Label style={styles.Label}>Password</Label>
              <Input />
            </Item>
            <Button style={styles.LoginBtn} rounded info>
            <Text>Login</Text>
          </Button>
          <View style={styles.BtnGroup}>
          <Button style={styles.FButton} rounded>
            <Text>Facebook</Text>
          </Button>
          <Button style={styles.FButton} rounded danger>
            <Text>Google</Text>
          </Button>
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
        paddingTop:150,
    },
    BtnGroup:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        flexWrap:'wrap',
    },
    FButton:{
      width:150,
      justifyContent:'center',
      marginTop:20,
      borderWidth:0,
      margin:5,
      fontSize:10
    }
  
});

export default App;
