const express = require('express');

const app = express();

app.get('/', (req:Request, res:any)=>{
    res.json({
        msg: "Hello"
    })
})


app.listen(4000, ()=>console.log("Running Backend on 4000"));
