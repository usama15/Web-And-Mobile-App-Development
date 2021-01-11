import React, {useState, useEffect} from 'react';
import { StyleSheet, Image} from 'react-native'
import { Container, Content, Card, CardItem, Thumbnail, Left, Body, Right, Button, Icon, Text, Badge } from 'native-base';
import database from '@react-native-firebase/database';
import NewPost from "./NewPost";
import MyNewFeeds from './AllFeeds'



// var newFeeds = []

const Feeds = (props) => {
  const [feeds, setFeeds] = useState([])
  
  const [like, setLike] = useState("Like")

  var [flag, setFlag] = useState(true)
  var newFeedsUser = []

  const {name, picURL, uid} = props.userData
  useEffect(()=>{
    database().ref('/').child(`feeds`).on('child_added',(newdata)=>{

      const adFeeds = [newdata.val(), ...feeds]
      setFeeds(adFeeds)
      newFeedsUser.push(newdata.val().id)
      // console.log("This is After  ",feeds)
    })
  },[])
  useEffect(()=>{
    database().ref(`/`).child(`/users/${newFeedsUser[0]}`).on('child_added',(setUser)=>{
      // const adFeeds = [newdata.val(), ...feeds]
      // setFeeds(adFeeds)
      console.log("This is After  ",setUser)
    })
  },[])
  

   let AdLike = (feed) => {

     adLike={
       ...feed,
       like: [...feed.like, uid]
     }
     database().ref(`/feeds/${feed.postId}`).set(adLike)
     .then((data)=> {

       console.log("Post has been submitted ",data)
       setLike('Liked')
     })
     .catch((err)=>{
       console.log("Error has occure ",err)
     })
   }
   var RunFeed = () => {
    // MyFeeds()
      // console.log("This is main Body Feed ==> ",feeds,'<br>')
      
      
      return (
        feeds.map((v,i)=>{
                  return(
                    <Card key={i} style={{marginTop:10}}>
                    <CardItem>
                      <Left>
                        <Thumbnail source={{uri: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'}} />
                        <Body>
                          <Text>{v.post}</Text>
                          <Text note>{v.post_date}</Text>
                        </Body>
                      </Left>
                    </CardItem>
                      <Text style={styles.postText}>{v.post}</Text>
                    <CardItem cardBody>
                      <Image source={{uri: v.post_url}} style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem>
                      <Left>
                        <Button transparent onPress={() => AdLike(v)}>
                          <Icon active name="thumbs-up" />
                          <Text>{like}</Text>
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
                  </Card>
                  )})
      )
    }
  return (
    
    <Container>
        
        <Content>
      

      <RunFeed/>

          
        </Content>
        
      </Container>
    
  );
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
  postText:{
    fontSize:13,
    color:'#808080',
    margin:10,
    marginLeft:50,
  }
});

export default Feeds;
