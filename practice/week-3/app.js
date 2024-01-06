const express = require('express')
const zod = require('zod')

const port = 4000
const app = express()

const schema = zod.string().min(5)

app.use(express.json()) // middleware to use req.body in post request


function veriftyUser(req, res, next){
    const username = req.headers.username
    const pass = req.headers.pass
    if(!(username === 'tsahil' || pass == 'pass')){
        res.status(403).json({
            msg: "Incorrect user",
          });
          return;
    }else{
        console.log("User is correct!");
        next();
    }
}

function inputValidation(req, res, next){
    const kidney = req.query.kidney
    if(kidney != 2){
        res.status(400).json({
            msg: "Something up with your inputs",
          }); 
    }else{
        console.log("All good!!")
        next();
    }
}

app.get('/',veriftyUser, inputValidation, (req, res)=>{
    res.json({
        msg:"All good"
    })
})


app.post('/posting', veriftyUser, (req, res)=>{
    const body = req.body;
    const items = req.body.items
    console.log(items.length)
    res.json({
        msg: "Succesfully posting done"
    })
    console.log(body)
})

app.post('/zoding', (req, res)=>{
    const name = req.body.name;
    console.log(name)
    const response = schema.safeParse(name)
    res.send(response)
})


app.use((err, req, res, next)=>{
    console.log(err)
    res.json({
        msg:"Something is not right here man"
    })
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})

