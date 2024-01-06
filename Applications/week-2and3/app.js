const express = require('express')
const path = require('path')
const jws = require('jsonwebtoken')


const port = 3000

const app = express()
app.use(express.json())


app.get('/login', (req, res)=>{

})

app.post('/createUser', (req, res)=>{

})

app.listen(port, function(){
    console.log(`listening on port ${port}`)
})