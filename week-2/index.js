const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`${calculatedSum}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


function sum(n){
    let result = 0
    for (let i = 0; i < n; i++) {
        result++;
    }
    return result
}

let calculatedSum = sum(100)