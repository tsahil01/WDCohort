const express = require("express");
const app = express();

// THIS IS BAD WAY OF DOING VALIDATION AND AUTH ====>

// app.get("/health-checkup", (req, res) => {
//   const username = req.headers.username;
//   const password = req.headers.password;
//   const kidneyId = req.query.kidneyId;
//   if (!(username === "sahil" && password === "pass")) {
//     res.status(400).json({
//       msg: "Something up with your inputs",
//     });
//     return;
//   }
//   if (kidneyId == 1 || kidneyId == 2) {
//     res.json({
//       msg: "Your kidney is fine",
//     });
//   }
// });


app.use(express.json()) // Is a middleware that can be user anywhere below it
// The app.use(express.json()) can be used as req.body in app.post()


// app.get('/health', .... multipleFunctions); // It can have mumtiple functions
app.get('/', function doSomething(req, res, next){
    console.log("Doing Somthing and becoz of next() the next function will be called")
    next(); // this enables us to call the next functions.
}, (req, res)=>{
    console.log("Next function is called")
})

// THE ABOVE IS USED FOR VALIDATION AND AUTH =>

function userValidation(req, res, next) {
    const username = req.headers.username
    const password = req.headers.password
    if (!(username === "sahil" && password === "pass")) {
        res.status(403).json({
          msg: "Something up with your inputs",
        });
        return;
    }else{
        next();
    }
}

function inputValidation(req, res, next) {
    const kidneyId = req.query.kidneyId;
      if (kidneyId != 1) {
        res.status(403).json({
          msg: "Incorrect inputs",
        });
      } else{
        res.status(403).json({
            msg: "Your Kidney is all good",
        });
        next();
      }
}

app.get("/health-checkup", userValidation, inputValidation, (req,res)=>{
    res.json({msg: "EVERTHING IS GOOD!!"})
})

app.listen(4000);
