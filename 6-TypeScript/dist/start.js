"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(name) {
    return `Hello Mr. ${name}`;
}
const name = "Kirtan";
console.log(greet(name));
// -----------------Type Infercencing
let chai = "Chai aur code"; // type inferncing automatic smjh jaayega
let cups = Math.random();
let ChannelName = "CodeWithKirtan";
// ChannelName = 1234 give red light and tell not assignable
// -----------------Type Annotions
let chaiFlavour = "Masala Chai";
chaiFlavour = "Choclate Tea"; // will work
// chaiFlavour = 2; wont work
console.log(chaiFlavour);
//# sourceMappingURL=start.js.map