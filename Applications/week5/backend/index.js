const express = require('express');
const cors = require('cors')
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');

const port = 4000
const app = express()

app.use(express.json())
app.use(cors())

app.post('/todo' , async (req, res)=>{
    const parseBody = req.body
    const title = req.body.title
    const description = req.body.description

    const parsePayload = createTodo.safeParse(parseBody)
    if(!parsePayload.success){
        res.status(411).json({
            msg:"You sent the wrong input"
        })
        return;
    }
    try{
        await todo.create({title, description, completed: false})
    } catch(err){
        res.json({
            msg:"Some error occured in Database"
        })
    }
    res.json({
        msg: "todo Created."
    })

})

app.get('/todos' ,async (req, res)=>{
    const todos = await todo.find({});
    res.json({
        msg: todos
    })

})

app.put('/completed' ,async (req, res)=>{
    const id = req.body.id
    const parsePayload = updateTodo.safeParse({id})
    if(!parsePayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    await todo.updateOne({
        _id: id
    }, {
        completed: true
    })
    res.json({
        msg: "Todo marked as done"
    })
})


app.listen(port, ()=> console.log(`Running App on port ${port}`))