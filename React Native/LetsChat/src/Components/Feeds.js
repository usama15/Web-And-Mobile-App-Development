import React, {useState} from 'react';
import { StyleSheet, Image} from 'react-native'
import { Container, Content, Card, CardItem, Thumbnail, Left, Body, Right, Button, Icon, Text, Badge } from 'native-base';
import database from '@react-native-firebase/database';
import NewPost from "./NewPost";
import MyNewFeeds from './AllFeeds'

// var newFeeds = []



const Feeds = () => {
  // var [feeds, setFeeds] = useState([])
  // var [flag, setFlag] = useState("")
  var feeds = []

  database().ref('/').child(`feeds`).on('child_added',(newdata)=>{
    // setFlag(flag)
    // setFeeds([newdata.val(), ...feeds])
    feeds.push(newdata.val())
    // var proFeeds = [newdata.val()];
    // feeds = proFeeds
  })
  console.log("It is new data",feeds)
  
//   MyFeeds =() =>{

    
//     // return() 
    
// }

  // function MyFeeds(){
  //   const [flag, setFlag] = useState("")
    
  //   return(
  //     database().ref('/').child(`feeds/`).once('child_added',(newdata)=>{

  //       var newFeed = newdata.val()
  //       var setFeed = [newFeed, ...feeds]
  //     //   return (
  //         // setFeeds([newdata.val() , ...Feeds])
  //         feeds.push(newFeed)
  //         console.log("MY OLD FEEDS  ",feeds)
  //         // setFlag(flag)
  //     // )
  //     // setFlag("")
  //   })
  //   )
  //   // console.log("MY NEW FEEDS  ==> ",feeds)
    
  // }

  
  // const NewFeeds = () =>{
  //   return(
    
  //     database().ref('/').child(`feeds/`).on('child_added',(newdata)=>{
  //       Feeds.push(newdata.val())
        
  //       console.log("It is new data",Feeds)
  //       return (
  //       Feeds.map((v,i)=>{
  //           return(
  //             <Card key={i} style={{marginTop:10}}>
  //             <CardItem>
  //               <Left>
  //                 <Thumbnail source={{uri: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'}} />
  //                 <Body>
  //                   <Text>NativeBase</Text>
  //                   <Text note>GeekyAnts</Text>
  //                 </Body>
  //               </Left>
  //             </CardItem>
  //             <CardItem cardBody>
  //               <Image source={{uri: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'}} style={{height: 200, width: null, flex: 1}}/>
  //             </CardItem>
  //             <CardItem>
  //               <Left>
  //                 <Button transparent>
  //                   <Icon active name="thumbs-up" />
  //                   <Text>12 Likes</Text>
  //                 </Button>
  //               </Left>
  //               <Body>
  //                 <Button transparent>
  //                   <Icon active name="chatbubbles" />
  //                   <Text>4 Comments</Text>
  //                 </Button>
  //               </Body>
  //               <Right>
  //                 <Text>11h ago</Text>
  //               </Right>
  //             </CardItem>
  //           </Card>
  //           )
  //       })
  //       )
        
        
  //   })
    
  //   )

  // }
    // const newFeeds =NewFeeds()
   let AdLike = (id) => {

     adLike={
       like:1
     }
     database().ref(`/feeds/${id}`).push(adLike)
     .then((data)=> {
       console.log("Post has been submitted ",data)
     })
     .catch((err)=>{
       console.log("Error has occure ",err)
     })
   }
   var RunFeed = () => {
    // MyFeeds()
      // console.log("This is main Body Feed ==> ",feeds,'<br>')
      
      console.log("Like ==> ",feeds)
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
                        <Button transparent onPress={() => AdLike(v.postId)}>
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
