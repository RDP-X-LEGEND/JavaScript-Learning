// let appUser = new Object() // this creates an singleton object

let appUser = {} // this creates a object literals

appUser.id = "1223ghvhbkjd4343b8cbdc"
appUser.name = "Nobody"
appUser.isLoggedIn = false

// console.log(appUser);

let goodUser = {
    id: "iegu34308rrjrbjeb",
    email: "nobody008@gmail.com",
    name: {
        username: "Nobody_98760",
        fullname: {
            firstname: "Nobody",
            middlename: "Forgot",
            lastname: "Nothing"
        }
    }
}

// console.log(goodUser.name.fullname.middlename);

let obj1 = {1: "a", 2: "b"}
let obj2 = {10: "a1", 20: "b1"}
let obj3 = {100: "a10", 200: "b10"}

// let obj4 = Object.assign({}, obj1, obj2, obj3)
let obj4 = {...obj1, ...obj2, ...obj3}

// console.log(obj4);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h1@gmail.com"
    },
    {
        id: 1,
        email: "h2@gmail.com"
    },
]

// console.log(users[1].email)

// console.log(appUser);

// console.log(Object.keys(appUser));

// console.log(Object.values(appUser));

// console.log(Object.entries(appUser));

// console.log(appUser.hasOwnProperty("isLoggedIn"));
// console.log(appUser.hasOwnProperty("isLogged"));

let course = {
    name: "Java Script learning",
    "courseteacher'name": "Hitesh",
    channel: "Chai Aur Code"
}

let {"courseteacher'name": teacher} = course

// console.log(teacher);
