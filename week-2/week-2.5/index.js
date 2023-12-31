const express = require('express')
const app = express()
const port = 3000

app.use(express.json()) // used for post request to get body

let users = [{
    name: "John",
    kidneys: [{
        healthy: true
    },
    {
        healthy: true
    },
    {
        healthy: false
    }]
}];


app.get('/', (req,res)=>{
    users.forEach(element => {
        const name = element.name
        const totalKidney = element.kidneys.length
        let healthyKidney = 0;
        element.kidneys.forEach(k => {
            if(k.healthy){
                healthyKidney++;
            }
        });
        let unhealthyKidney = totalKidney - healthyKidney
        res.json({name, totalKidney, healthyKidney, unhealthyKidney});
    });
})

app.post('/', (req, res)=>{
    // console.log(req.body)
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg:"Done!"
    })
})

app.put('/', (req, res)=>{
    users.forEach(element => {
        element.kidneys.forEach(t=>{
            t.healthy = true
        })
    });
    res.json({
        msg:"All healthy kidneys here!"
    })
})

app.delete('/', (req, res)=>{
    users.forEach(element=>{
        element.kidneys.forEach(t=>{
            if(t.healthy == false){
                element.kidneys.pop(t)
            }
        })
    })
    res.json({
        msg:"Removed unhealthy kidney"
    })
})

app.listen(port, ()=>{
    console.log(`app is running on port ${port}`);
})