type User = {
    name: string;
    age: number;
}

const user: Readonly < User > = {
    name: "asad",
    age: 20
}

user.name = "newName"; // TS gives error here...