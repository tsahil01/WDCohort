import express from "express";
import cors from 'cors';
import jwt, { Jwt } from "jsonwebtoken";
import cookieParser from "cookie-parser";

const JWT_SECRET = "somerandomkey";
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get('/', (req, res)=>{
    res.json({
        msg: "On home"
    })
})


app.post('/signup', (req, res) => {
    const body = req.body;
    console.log(body);
    try{
        const email = body.email;
        const token = jwt.sign(email, JWT_SECRET);
        res.cookie("token", token);
        res.json({
            msg: "Signup done"
        })
    } catch(e){
        console.log("Error: ", e);
        res.json({
            msg: "Some error"
        })
    }
})

app.get('/user', (req, res) => {
    const token = req.cookies.token;
    console.log("Token: ", token);
    try {
        const decoded = jwt.verify(token, JWT_SECRET) as any;
        console.log('decoded value: ', decoded);
        res.json({
            msg: decoded.email
        })
    } catch(e){
        console.log("Error: ", e);
        res.json({
            msg: "Some error"
        })
    }
})

app.listen(4000, () => console.log(`Listening on 4000`));