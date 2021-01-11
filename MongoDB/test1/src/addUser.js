const User = require('./userModel');

function addUser(){
    console.log('Adding User');
    const userData = new User({name: `Joe`});
    userData.save()
    .then(() => console.log(`Saved User`))
    .catch((err) => console.log(`Err ${err}`));
}
module.exports = addUser