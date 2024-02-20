## Pick =>

```ts
interface User {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
};

interface UpdateProps {
    name: string;
    age: number;
    password: string;
} // this is good but bad
// we can create a subset of User to re-use the User interface rather than creating a new interface
// To achive this we use PICK!


function updateUser(user: UpdateProps){
    // hit the database to update the user, where u can only chage the name, age, password only
}
```

**Pick =>**
- Pick allows you to create a new type by selecting a set of properties (Keys) from an existing type (Type).
```ts
interface User {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
};

type UpdateProps = Pick < User, 'name' | 'age' | 'email' > // Pick

function updateUser(user: UpdateProps){
    // hit the database to update the user, where u can only chage the name, age, password only
}
```

## Partial =>
- In the above `UpdateProps` all the properites or some could be optional. To make it optional we use Partial rather than createing a new interface or type.
- `Partial` makes all properties of a type optional, creating a type with the same properties, but each marked as optional.

```ts
type UpdatePropsPartial = Partial <UpdateProps> // Partial, {name? age? email?}
```

## Readonly =>

```ts
const arr = [1, 4, 5];
arr[0] = 30; // we can update the arr even its it is const... Reason => we can update the value inside arr. We are not changing the reference.
```

```ts
type User = {
    readonly name: string;
    readonly age: number;
}

const user: User = {
    name: "asad",
    age: 20
}

user.name = "newName"; // TS gives error here...
```

```ts
// More easy readonly code =>
type User = {
    name: string;
    age: number;
}

const user: Readonly < User > = {
    name: "asad",
    age: 20
}

user.name = "newName"; // TS gives error here...
```

## Record and Map =>

```ts
type User = {
    id: string;
    username: string;
}

type Users = {
    [key: string] : string;
} // looks ugly

const users = {
    "abc@q1" : {
        id: "abc@q1",
        username: "sahil"
    },
    "abc@q2" : {
        id: "abc@q2",
        username: "sahillllll"
    }
}
```

- Record =>
```ts
type User = {
    id: string;
    username: string;
}

// Record
type Users = Record<string, number>;

const users = {
    "abc@q1" : {
        id: "abc@q1",
        username: "sahil"
    },
    "abc@q2" : {
        id: "abc@q2",
        username: "sahillllll"
    }
}
```