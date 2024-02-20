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