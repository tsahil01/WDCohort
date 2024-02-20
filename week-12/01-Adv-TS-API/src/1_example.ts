interface User {
    name: string;
    age: number;
}

function sumOfAge(user1: User, user2: User) : number{
    return user1.age + user2.age;
}

const age = sumOfAge({
    name: "sahil",
    age: 20
}, {
    name: "arun",
    age: 40
});

console.log(age);