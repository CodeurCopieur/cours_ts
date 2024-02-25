/**
 * 
 * @param num1 
 * @param num2 
 * @returns {number}
 */
function multiply(num1 : number, num2 : number, action? : string) : number {
  action ? console.log(action) : null
  
  return num1 * num2;
}

console.log(multiply(2, 2, 'multiply'));


let foo : Function;

foo = () => {}


// Function signatures

let baz: (a: number, b: number) => number

baz = (a, b) => a + b

baz(1, 2)

// callback

function test1(fn : (a: string) => void) {
  fn("callback")
}

function test2(msg : string) {
  console.log(msg);
}

test1(test2)
