// Unions
let code : string | number | boolean;
code = 5

let arr : (boolean|number)[]
arr = [true, false, 99]

const foo = (param: number | string | boolean) => console.log(param);

foo(false)

// Types

type first = string | number;
type second = object;


const foo2 = (param: first | second) => console.log(param);

foo2({name: "john"})


type el = {
  name: string;
  id: number;
  visible: boolean;
}

const btn : el = {
  name: 'string',
  id: 123,
  visible: false
}