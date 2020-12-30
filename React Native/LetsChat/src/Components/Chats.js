import React from 'react';
import { StyleSheet, TouchableOpacity} from 'react-native'
import { Container, Content, Card, CardItem, Thumbnail, Left,Body, Text} from 'native-base';


const Feeds = () => {
    let OpenMessage = ()=>{
        console.log("What is it sir");
    }
  return (
    <>
      <Container style={{flex:1}}>
      <Content>

        <TouchableOpacity style={styles.User} onPress={OpenMessage}>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'}} />
                <Body>
                  <Text>MTehseen</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem> 
          </Card>
        </TouchableOpacity>
        
        </Content>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  TextArea:{
    borderRadius:10,
    width:370,
    borderColor:'#fff',
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: .10,
shadowRadius: 1.41,

elevation: 1,
  },
  Form:{
    justifyContent:'center',
    alignItems:'center',
    padding:20,
  },
  Button:{
    flex:1,
    marginTop:20,
    backgroundColor:'#61bfe1',
  },
  ButtonText:{
    color:'#fff'
  },
  Picker:{
    flex:1,
    marginTop:10,
    backgroundColor:'#f3f3f3',
    height:40,
    width:300,
    marginLeft:35,
    justifyContent:'center'
  },
  PickerText:{
    fontSize:12,
    color:'#5f5f5f'
  },
  User:{
      marginTop:-10,
      padding:0,
  }
  
});

export default Feeds;
