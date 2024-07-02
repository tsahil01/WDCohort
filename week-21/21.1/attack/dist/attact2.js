"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://harkiratapi.classx.co.in/get/otpverify?useremail=sahiltiwaskar2003%40gmail.com&otp=123456',
    headers: {
        'accept': '*/*',
        'accept-language': 'en-GB,en;q=0.8',
        'auth-key': 'appxapi',
        'client-service': 'Appx',
        'device-type': '',
        'origin': 'https://harkirat.classx.co.in',
        'priority': 'u=1, i',
        'referer': 'https://harkirat.classx.co.in/',
        'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Brave";v="126"',
        'sec-ch-ua-mobile': '?1',
        'sec-ch-ua-platform': '"Android"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'sec-gpc': '1',
        'source': 'website',
        'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36'
    }
};
axios_1.default.request(config)
    .then((response) => {
    console.log(JSON.stringify(response.data));
})
    .catch((error) => {
    console.log(error);
});
