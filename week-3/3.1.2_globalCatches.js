const express = require("express");
const app = express();

app.use(express.json()) // middleware

app.post('/heath-checkup', function (req, res) {
    const kidneys = req.body.kidneys; // req.body can be used bcoz of app.use(expreess.json()) middleware
    const kidneyLength = kidneys.length
    res.send(`You have ${kidneyLength} kidneys`)
    // THE ABOVE CAN GIVE US EXCEPTION. here kidneys is in arrays but what if user sends string or sonthing else.
    // TO AVOID THE WE USE global catches middleware which is used after every route
})

// global catches=>
app.use(function(err, req, res, next) {
    res.json({
        msg: 'Sorry something is up with our server'
    })
})

app.listen(4000);
