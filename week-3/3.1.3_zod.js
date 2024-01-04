const express = require("express");
const { charsets } = require("mime");
const zod = require('zod'); // ZOD => to do inout validation

const app = express();

const schema = zod.array(zod.number());


app.use(express.json()) // middleware

app.post('/zoding', function (req, res) {
    const kidneys = req.body.kidneys;

    const response = schema.safeParse(kidneys)
    res.send({
        response
    })

})

app.listen(4000);



// Example schema =>
// Required data in this form =>
// {
//     email: string => email@e.com
//     password: atleast 8 char
//     country: "IN", "US"
// }

// SCHEMA FOR ABOVE DATA ---->
// const schema = zod.object({
//     email: zod.string(),
//     password : zod.string(),
//     contry: zod.literal("IN").or(zod.literal("US"))
// })

