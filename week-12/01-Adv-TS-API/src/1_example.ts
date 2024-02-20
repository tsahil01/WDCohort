interface User {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
};

type UpdateProps = Pick < User, 'name' | 'age' | 'email' > // Pick

type UpdatePropsPartial = Partial <UpdateProps> // Partial, {name? age? email?}

function updateUser(user: UpdateProps){
    // hit the database to update the user, where u can only chage the name, age, password only
}