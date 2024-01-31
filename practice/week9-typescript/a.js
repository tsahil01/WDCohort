"use strict";
function islegal(user) {
    user.forEach((value) => {
        console.log(value.firstName);
    });
}
islegal([{ firstName: "av",
        lastName: "a",
        age: 40 }, { firstName: "ava",
        lastName: "a",
        age: 40 }
]);
