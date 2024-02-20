"use strict";
const users = new Map();
users.set("abc", { name: "abc", age: 20 });
users.set("qwe", { name: "qwer", age: 10 });
const user = users.get("abc");
console.log(user);
