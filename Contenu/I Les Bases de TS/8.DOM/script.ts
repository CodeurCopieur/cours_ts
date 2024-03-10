//Assertion
const form: HTMLFormElement = document.querySelector('form')!;
console.log(form?.children); // ? ca fonctionne  grace  à ?

// Casting
const form2 = document.querySelector('form') as HTMLFormElement;
console.log(form2.children);

const form3 = document.querySelector('.form') as HTMLFormElement;
// form3 : il faut le as parque la class  .form n'est pas assez précis




form3.addEventListener('submit', handleSubmit)

function handleSubmit(e:Event) {
  e.preventDefault()
  console.log('oui');
}

window.addEventListener('click', handleClick)

function handleClick(e: MouseEvent) {
  console.log(e.clientX, e.clientY)
}

/**
 *  Exception querySelectorAll
 *  NodeListOf<HTMLParagraphElement> est un type qui représente une collection de nodes
 *  Ne peut être null car c'est une NodeList qui est retourner, même vide
 */
const paragraphList = document.querySelectorAll('p'); 