//Assertion
var form = document.querySelector('form');
console.log(form === null || form === void 0 ? void 0 : form.children); // ? ca fonctionne  grace  à ?
// Casting
var form2 = document.querySelector('form');
console.log(form2.children);
var form3 = document.querySelector('.form');
// form3 : il faut le as parque la class  .form n'est pas assez précis
form3.addEventListener('submit', handleSubmit);
function handleSubmit(e) {
    e.preventDefault();
    console.log('oui');
}
window.addEventListener('click', handleClick);
function handleClick(e) {
    console.log(e, e.clientX, e.clientY);
}
/**
 *  Exception querySelectorAll
 *  NodeListOf<HTMLParagraphElement> est un type qui représente une collection de nodes
 *  Ne peut être null car c'est une NodeList qui est retourner, même vide
 */
var paragraphList = document.querySelectorAll('p');
