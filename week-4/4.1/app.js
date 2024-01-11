const express = require('express')
const cors = require('cors');

const app = express()
app.use(cors());


app.get('/sum', function(req, res){
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.send((a+b).toString())
})

app.get('/princple', function(req, res){
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.send((a+b).toString())
})

app.listen(3000, ()=>console.log("Listening"))