"use strict";
// Tuple
var tuple;
// tuple = [true, "Hello",  123]; -> ca ne fonctionne pas
tuple = [true, "Hello"];
// default
tuple.push("lol");
console.log(tuple);
// Enum
// const Roles = {
//   js: 1,
//   html: 2,
//   scss: 3
// }
// console.log(Roles.js);
// enum Roles { js, html, scss}
var Roles;
(function (Roles) {
    Roles[Roles["js"] = 1] = "js";
    Roles[Roles["html"] = 2] = "html";
    Roles[Roles["scss"] = 3] = "scss";
})(Roles || (Roles = {}));
console.log(Roles);
