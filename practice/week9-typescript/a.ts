type User = {
    name: string,
    age: number
}

type Job = {
    place: string,
    experience: number
}

type Person = User & Job

function getUser(person: Person){
    console.log(person.name)
    console.log(person.place)
}

getUser({
    name:"Sahil",
    age:20,
    place:"Nagpur",
    experience:20
})

type Something = number | string

function smth(value:Something){
    console.log(value)
}

smth(10)
smth("20")