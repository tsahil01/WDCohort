interface User {
    firstname: string,
    lastname: string,
    age: number,
    email?: string
};

function isItLegal(user : User) : boolean{
    if (user.age>18){
        return true;
    }
    return false;
}

isItLegal({
    firstname: "sahil",
    lastname: "tiwaskar",
    age: 20
})