import React,{useState} from 'react';
import { StyleSheet, Image} from 'react-native'
import { Container, Content, Card, CardItem, Thumbnail, Left, Button,Body, Text, Form, Input, Textarea} from 'native-base';
import database from '@react-native-firebase/database';

const NewPost = (props) => {
    // const {name, email, profile} = props.payload
    const [textArea, setTextArea] = useState("");
    const [url, setUrl] = useState("")
    const name  = 'Mohammed Tehseen Jawed';
    const email = 'tehseenjawed1@gmail.com';
    const profile = 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=3415773818535229&height=100&width=100&ext=1611339218&hash=AeSeGb14oMMm3fPos-k';
    const id = 3415773818535229
    const FeedPost = () =>{
      const postDate = new Date();
      const postId = database().ref().push().key
      const myNewPost = {
        postId,
        id,
        post:textArea,
        post_url:url,
        post_date: postDate.getUTCFullYear()+"/" + postDate.getUTCMonth() + "/" + postDate.getUTCDate()  ,
      }
      // console.log()
      database().ref(`/feeds/${postId}`).set(myNewPost)
      .then((data)=> {
        console.log("Post has been submitted ",data)
      })
      .catch((err)=>{
        console.log("Error has occure ",err)
      })
    }
  return (
    <>
    <Container>    
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail style={styles.thumbnail} source={{uri: profile}} />
                <Body>
                  <Text>{name}</Text>
                  <Text note>{email}</Text>
                </Body>
              </Left>
            </CardItem>
            <Form style={styles.Form}>
            <Textarea style={styles.TextArea} value={textArea} onChangeText={(e) => setTextArea(e)} rowSpan={3} bordered placeholder="Add Post Comment" />
            <Input style={styles.textBox} placeholder="Enter URL" value={url} onChangeText={(e) => setUrl(e)}/>
            
            <Button style={styles.Button} onPress={FeedPost} rounded light>
            <Text style={styles.ButtonText}>Post</Text>
          </Button>
          </Form>
          </Card>
        </Content>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  thumbnail:{
    width:35,
    height:35,
  },
  textBox:{
    flex:1,
    width:350,
    borderWidth:.2,
    fontSize:13,
  },
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
  
});

export default NewPost;
