"use strict";
function sumOfAge(user1, user2) {
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
