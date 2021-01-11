const mongoose = require('mongoose');
const addUser = require('./addUser')

mongoose.connect("mongodb+srv://admin:ykwPDIjMkoVf3eJz@cluster.rofy8.mongodb.net/test_database?retryWrites=true&w=majority")
mongoose.connection
.once('open', () => {
    console.log(`Yahooo. Connection has stablished`)
    addUser()
})
.on(`error`, (err) =>{
    console.log(`Error: ${err}`);
})