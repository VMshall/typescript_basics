"use strict";
// function fun1(): void {
//     console.log("Hello");
// }
Object.defineProperty(exports, "__esModule", { value: true });
let user = {
    name: "Harkirat",
    age: 21,
    address: {
        state: "UP",
        city: "haryan",
        pincode: 512292
    }
};
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegal(user));
//# sourceMappingURL=index.js.map