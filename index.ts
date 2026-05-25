// function fun1(): void {
//     console.log("Hello");
// }

// function fun2(callback: () => void): void {
//     setTimeout(callback, 1000);
// }

// fun2(fun1)


// function greet(firstName: number | string ) {
//     console.log("Hello" + firstName)
// }

// greet("ajay")
// greet(1)


// function isLegal(age: number) {
//     if (age > 18){
//         return true
//     } else {
//         return false
//     }
// }

// console.log(isLegal(12))  


interface User {
    name: string,
    age: number,
    address: Address
    
}

interface Address {
        state: string,
        city: string,
        pincode: number
    }

interface OfficeAdd {
    address: Address
}

let user: User = {

    name: "Harkirat",
    age: 21,
    address: {
        state: "UP",
        city: "haryan",
        pincode: 512292
    }
}

function isLegal(user: User) : boolean {
    if (user.age > 18 ) {
        return true
    }else {
        return false
    }
}

console.log(isLegal(user))
