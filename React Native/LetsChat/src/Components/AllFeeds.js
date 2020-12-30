import React, {useState} from 'react';
import { StyleSheet, Image} from 'react-native'
import { Container, Content, Card, CardItem, Thumbnail, Left, Body, Right, Button, Icon, Text, Badge } from 'native-base';
import database from '@react-native-firebase/database';
import NewPost from "./NewPost";




  const NewFeeds = () =>{
    const [flag, setFlag] = useState("")
    const Feeds = []
    return(
    
      database().ref('/').child(`feeds/`).once('child_added',(newdata)=>{
        Feeds.push(newdata.val())
        
        console.log("It is new data",Feeds)
        return (
        Feeds.map((v,i)=>{
            return(
              <Card key={i} style={{marginTop:10}}>
              <CardItem>
                <Left>
                  <Thumbnail source={{uri: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'}} />
                  <Body>
                    <Text>NativeBase</Text>
                    <Text note>GeekyAnts</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={{uri: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'}} style={{height: 200, width: null, flex: 1}}/>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="thumbs-up" />
                    <Text>12 Likes</Text>
                  </Button>
                </Left>
                <Body>
                  <Button transparent>
                    <Icon active name="chatbubbles" />
                    <Text>4 Comments</Text>
                  </Button>
                </Body>
                <Right>
                  <Text>11h ago</Text>
                </Right>
              </CardItem>
              {setFlag("")}
            </Card>
            
            )
        })
        )
        
        
    })
    
    )

  }
   
const styles = StyleSheet.create({
  Footer:{
    backgroundColor:'#57aece',
    color:'#fff',
  },
  FooterActive:{
    backgroundColor:'#61bfe1',
    color:'#fff',
  },
});

export default NewFeeds;
