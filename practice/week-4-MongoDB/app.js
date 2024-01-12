const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://admin:CoKTf8q6ntrW8dou@cluster0.4gpvday.mongodb.net/')

// SCHEMA =>
const UserSchema = new mongoose.Schema({
    username : String,
    age : Number
})


// Object =>
const User =  mongoose.model('User', UserSchema)



// Create =>
async function createUser(username, age){
    let newUser = await User.create({
        username,
        age
    })
    console.log(newUser)
}


// Read =>
async function readUser(username, age){
    const findUser = await User.find({
        username
    })
    console.log(findUser)
}


// Update =>
async function updateUser(username, age, newAge){
    const upadate = await User.updateOne({
        username
    }, {
        age: newAge
    })
    console.log(upadate)
}

// Delete =>
async function deleteUser(username, age){
    const deleteUser = await User.deleteOne({
        username
    })
    console.log(deleteUser)
}

function prining(){
    console.log("Hello 1")
     createUser("Jack@12", 23)
    console.log("Hello 2")
     createUser("Roman@12", 21)
    console.log("Hello 3")
}

prining()
// console.log("Hello 4")