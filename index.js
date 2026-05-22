"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fun1() {
    console.log("Hello");
}
function fun2(callback) {
    setTimeout(callback, 1000);
}
fun2(fun1);
//# sourceMappingURL=index.js.map