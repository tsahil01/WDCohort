import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(email: string, password: string, firstName: string, lastName: string) {
  const res = await prisma.user.create({
    data:{
        email:email,
        firstname:firstName,
        lastname:lastName,
        password:password
    }
  })
  console.log(res);
}

// insertUser("st@gmail.com", "sah123", "john", "cena")

interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(email: string, {
    firstName,
    lastName
}: UpdateParams) {
    const res = await prisma.user.update({
        data: {
            firstname: firstName,
            lastname: lastName
        },
        where: {
            email: email
        }
    })
    console.log(res);
}

// updateUser("st@gmail.com", {
//     firstName: "johnnn",
//     lastName: "cenaaaa"
// })


async function getUser(username: string) {
    const res = await prisma.user.findFirst({
        where: {
            email:username   
        }
    })
    console.log(res);
}

getUser("st@gmail.com")
