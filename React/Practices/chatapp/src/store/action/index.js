import firebase from "firebase";

export const setData = (data) => {
  return (dispatch) => {
    dispatch({
      type: "SETDATA",
      data,
    });
  };
};
export const facebook_login = (history) => {
  console.log("Facebook Login");
  return (dispatch) => {
    var provider = new firebase.auth.FacebookAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        var token = result.credential.accessToken;
        var user = result.user;
        let newUser = {
          name: user.displayName,
          email: user.email,
          profile: user.photoURL,
          uid: user.uid,
        };
        let customerName = user.displayName;
        firebase
          .database()
          .ref("/")
          .child(`users/${user.uid}`)
          .set(newUser)
          .then(() => {
            dispatch({ type: "SETUSER", payload: newUser });
            alert("You have succesfully Loged In");
            history.push("/chat");
          });
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("Error ==> ", errorMessage);
      });
  };
};

export let getMembersfromFirebase = () => {
  return (dispatch) => {
    let users = [];
    console.log("It is users action ",users);
    firebase
      .database()
      .ref("/")
      .child("users")
      .on("child_added", (data) => {
        users.push(data.val());
      });
    console.log("It is users action ",users);
    dispatch({
      type: "CHATMEMBERS",
      payload: users,
    });
  };
};
