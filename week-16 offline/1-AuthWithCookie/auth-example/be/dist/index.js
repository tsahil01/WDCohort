"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const JWT_SECRET = "somerandomkey";
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
app.get('/', (req, res) => {
    res.json({
        msg: "On home"
    });
});
app.post('/signup', (req, res) => {
    const body = req.body;
    console.log(body);
    try {
        const email = body.email;
        const token = jsonwebtoken_1.default.sign(email, JWT_SECRET);
        res.cookie("token", token);
        res.json({
            msg: "Signup done"
        });
    }
    catch (e) {
        console.log("Error: ", e);
        res.json({
            msg: "Some error"
        });
    }
});
app.get('/user', (req, res) => {
    const token = req.cookies.token;
    console.log("Token: ", token);
    try {
        const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        console.log('decoded value: ', decoded);
        res.json({
            msg: decoded.email
        });
    }
    catch (e) {
        console.log("Error: ", e);
        res.json({
            msg: "Some error"
        });
    }
});
app.listen(4000, () => console.log(`Listening on 4000`));
