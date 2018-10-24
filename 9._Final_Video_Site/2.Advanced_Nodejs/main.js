const exported = require("./exportValues");
// import "alias" from "express";

console.log(exported.name);

console.log(exported.greetings("Anders"));

const bob = require("./aboutBob");
const Bob = new bob(2, 5);

console.log(Bob.bobTangle());

