import React, {useState} from 'react';
import { StyleSheet} from 'react-native'
import { Container, Footer, FooterTab, Button, Content, List, Right, ListItem, Left, Thumbnail, Body, Text, Badge } from 'native-base';
import Feeds from '../../Components/Feeds';
import NewPost from '../../Components/NewPost';
import Chats from '../../Components/Chats';

const Home = (props) => {
  // const { email, name, picURL, uid} = props.route.params;
  // console.log('EEEEEMMMAIL ====> ',email)
  const name  = 'Mohammed Tehseen Jawed';
    const email = 'tehseenjawed1@gmail.com';
    const profile = 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=3415773818535229&height=100&width=100&ext=1611339218&hash=AeSeGb14oMMm3fPos-k';
  let [newScreens,setNewScreens] = useState(0)
  let Screens = ()=>{
    if(newScreens==1){
      return <NewPost/>
    }
    else if(newScreens == 2){
      
    }
    else if(newScreens == 3){
      return <Chats/>
    }
    else{
      
      // return <NewPost payload={name, email, profile}/>
      return <Feeds/>
    }
  }
  return (
    <>
      <Container>
        
          <List style={{marginBottom:5,}}>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: profile }} />
              </Left>
              <Body>
                <Text>{name}</Text>
                <Text note>{email}</Text>
              </Body>
              <Right>
                <Text note>Admin</Text>
              </Right>
            </ListItem>
          </List>
        

        <Screens />
        <Footer style={styles.Footer}>
          <FooterTab style={styles.Footer}>
            <Button onPress={() => setNewScreens(0)} style={styles.FooterActive} active badge vertical>
              <Badge><Text>2</Text></Badge>
              <Text>Feeds</Text>
            </Button>
            <Button onPress={() => setNewScreens(1)} vertical>
              <Text>NewPost</Text>
            </Button>
            <Button onPress={() => setNewScreens(2)} vertical>
              <Text>Camera</Text>
            </Button>
            <Button onPress={() => setNewScreens(3)} vertical>
              <Text>Chats</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    </>
  );
};

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

export default Home;
