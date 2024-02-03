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
Object.defineProperty(exports, "__esModule", { value: true });
//Elephent PSQL Url =  postgres://drhqmydq:ilFd0wzGMdQpeI_9U3Co9LdN7w0Aho2f@kesavan.db.elephantsql.com/drhqmydq
const pg_1 = require("pg");
function getClient() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client('postgres://drhqmydq:ilFd0wzGMdQpeI_9U3Co9LdN7w0Aho2f@kesavan.db.elephantsql.com/drhqmydq');
        yield client.connect();
        return client;
    });
}
console.log(getClient());
