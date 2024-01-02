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
    const body = req.body
    console.log(body)
    res.send("Done")
})

app.put('/', (req, res)=>{

})


app.delete('/', (req, res)=>{
    
})

app.listen(port, ()=> console.log(`app is listening on port ${port}`))