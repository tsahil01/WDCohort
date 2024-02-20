type User = {
    readonly name: string;
    readonly age: number;
}

const user: User = {
    name: "asad",
    age: 20
}

user.name = "newName"; // TS gives error here...