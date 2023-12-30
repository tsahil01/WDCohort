const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`${calculatedSum}`)
})

app.get('/new', (req, res) => {
    let counter = req.query.counter; // getting input from the browser.
    // We can check it here => `http://localhost:3000/new?counter=500`
    res.send(`${sum(counter)}`)
})


// All four Routes =>
app.get('/handleSum', (req, res) =>{
    res.send("Hello handling sum")
})

app.post('/createUser', (req, res) =>{ // cant be handled in Browser hence we use postman
    res.send("CREATE USER")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// CREATE Remaining Request

function sum(n){
    let result = 0
    for (let i = 0; i < n; i++) {
        result++;
    }
    return result
}

let calculatedSum = sum(100)


// const express = require('express')
// const app = express()
// const port = 4000

// app.get('/', (req, res)=>{
//     res.send("Hello")
// })

// app.listen(port, ()=>{
//     console.log(`App is listening on port ${port}`)
// })