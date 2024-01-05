const express = require('express')
const zod = require('zod')
const bodyParser = require('body-parser')

const port = 4000
const app = express()

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

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})