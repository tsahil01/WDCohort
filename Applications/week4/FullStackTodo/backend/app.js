const express = require('express')
const cors = require('cors');

const port = 3000

const app = express()
app.use(express.json())
app.use(cors())


const data =[]

app.get('/getTodo', function(req, res){
    res.json({
        data: data
    })
})

app.post('/addTodo', function(req, res){
    const title = req.query.title
    const description = req.query.description
    const id = req.query.id
    console.log(title)
    data.push({
        title: title,
        description: description,
        id: id
    })
    
    res.json({
        msg: "Done"
    })
})

app.listen(port, ()=> console.log(`Listening on port ${port}`))