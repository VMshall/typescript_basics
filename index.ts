// function fun1(): void {
//     console.log("Hello");
// }

// function fun2(callback: () => void): void {
//     setTimeout(callback, 1000);
// }

// fun2(fun1)


function greet(firstName: number | string ) {
    console.log("Hello" + firstName)
}

greet("ajay")
greet(1)