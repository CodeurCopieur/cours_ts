// Tuple

let tuple : [boolean, string]
// tuple = [true, "Hello",  123]; -> ca ne fonctionne pas
tuple = [true, "Hello"];
// default
tuple.push("lol")
console.log(tuple);


// Enum


// const Roles = {
//   js: 1,
//   html: 2,
//   scss: 3
// }

// console.log(Roles.js);

// enum Roles { js, html, scss}
enum Roles { js = 1, html, scss}

console.log(Roles);

