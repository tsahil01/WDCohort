interface User {
	firstName: string;
	lastName: string;
	age: number;
}

function islegal(user: User[]){
    user.forEach((value)=>{
        console.log(value.firstName);
    })
}

islegal([{firstName:"av",
    lastName: "a",
age:40 },{firstName:"ava",
lastName: "a",
age:40 }
])