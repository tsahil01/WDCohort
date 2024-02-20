type User = {
    name: string;
    age: number;
}
const users = new Map<string, User>()

users.set("abc", { name: "abc", age:20 } );
users.set("qwe", { name: "qwer", age:10 } );

const user = users.get("abc");

console.log(user);


