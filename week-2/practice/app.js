const express = require('express')
const app = express()
const port = 4040
app.use(express.json())

let user = {
    name: "Sahil",
    age:20
}

app.get('/', (req,res)=>{
    let age = req.query.age
    res.json(user)
    console.log(age)
})

app.post('/', (req, res)=>{
    const like = req.body.like
    user.like = like

    console.log(body)
    res.send("Done")
})

app.put('/', (req, res)=>{
    user.like = null
    res.send("Done with it!")
})


app.delete('/', (req, res)=>{
    delete user.name
    res.send("Done with it!")
})

app.listen(port, ()=> console.log(`app is listening on port ${port}`))