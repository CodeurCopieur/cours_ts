const itemContainer = document.querySelectorAll('.items-container') as NodeListOf<HTMLDivElement>;

let actualContainer: HTMLDivElement,
    actualBtn: HTMLButtonElement,
    actualUL: HTMLUListElement,
    actualForm: HTMLFormElement,
    actualTextInuput: HTMLInputElement,
    actualValidation: HTMLSpanElement;

// Détruire un élément
itemContainer.forEach((container: HTMLDivElement) => {
  addContainerListeners(container)
})

function addContainerListeners (currentContainer: HTMLDivElement) {
  //<button class="delete-container-btn">X</button>
   const currentContainerDeleteBtn =  currentContainer.querySelector('.delete-container-btn') as HTMLButtonElement;
    deleteBtnListeners(currentContainerDeleteBtn)

   // <button class="add-item-btn">Ajouter un article</button>
   const currentAddItemBtn = currentContainer.querySelector('.add-item-btn') as HTMLButtonElement;
   addItemBtnListeners(currentAddItemBtn)


    // <button type="button" class="close-form-btn">X</button>
    const currentCloseForBtn = currentContainer.querySelector('.close-form-btn') as HTMLButtonElement;
    closingFormBtnListerner(currentCloseForBtn)

    // <form autocomplete="off"></form>
    const currentForm = currentContainer.querySelector('form') as HTMLFormElement;
    addFormSubmitListeners(currentForm)
}

function deleteBtnListeners (btn: HTMLButtonElement) {
  btn.addEventListener('click', handleContainerDelete)
}

function handleContainerDelete(e: MouseEvent) {
  const btn = e.target as HTMLButtonElement;
  const btnsArray = [...document.querySelectorAll('.delete-container-btn')] as HTMLButtonElement[];
  const containers = [...document.querySelectorAll('.items-container')] as HTMLDivElement[];

  containers[btnsArray.indexOf(btn)].remove()
}

// Ajouter le toggle

function addItemBtnListeners(btn: HTMLButtonElement) {
  btn.addEventListener('click', handleAddItem)
}

function handleAddItem(e: MouseEvent) {
  const btn = e.target as HTMLButtonElement;
  if(actualContainer) toggleForm(actualBtn, actualForm, false)
  setContainerItems(btn);
  toggleForm(actualBtn, actualForm, true)
}

function setContainerItems(btn: HTMLButtonElement) {
  actualBtn = btn;
  actualContainer = btn.parentElement as  HTMLDivElement;
  actualUL = actualContainer.querySelector('ul') as HTMLUListElement;
  actualForm = actualContainer.querySelector('form') as HTMLFormElement;
  actualTextInuput = actualContainer.querySelector('input') as HTMLInputElement;
  actualValidation = actualContainer.querySelector('.validation-msg') as HTMLSpanElement;
}

function toggleForm(btn: HTMLButtonElement, form: HTMLFormElement, action: Boolean) {
  !action ? (form.style.display = 'none', btn.style.display = 'block') : (form.style.display = 'block', btn.style.display = 'none');
}


// Ajouter un item et le détruire

function closingFormBtnListerner(btn: HTMLButtonElement) {
  btn.addEventListener('click', () => toggleForm(actualBtn, actualForm, false))
}


function addFormSubmitListeners(form: HTMLFormElement) {
  form.addEventListener('submit', createNewItem)
}

function createNewItem(e: Event) {
  e.preventDefault()

  if (actualTextInuput.value.length === 0) {
    actualValidation.textContent = "Doit contenir au moins 1 caractère !"
    return;
  } else {
    actualValidation.textContent = ""
  }

  const itemContent = actualTextInuput.value;
  const li = `<li class="item" draggable="true"><p>${itemContent}</p><button type="button" class="close-form-btn">X</button></li>`

  actualUL.insertAdjacentHTML('beforeend', li)

  const item = actualUL.lastElementChild as HTMLLIElement;
  const liBtn = item.querySelector('button') as HTMLButtonElement;

  handleItemDeletion(liBtn)
  actualTextInuput.value = ""
}

function handleItemDeletion(btn: HTMLButtonElement) {
  btn.addEventListener('click', ()=> {
      const elToRemove = btn.parentElement as HTMLLIElement
      elToRemove.remove()
  })
}

// Ajouter un nouveau container

const addContainerBtn = document.querySelector('.add-container-btn') as HTMLButtonElement;
const addContainerForm = document.querySelector('.add-new-container form') as HTMLFormElement;
const addContainerInput = document.querySelector('.add-new-container Input') as HTMLInputElement;
const validationNewContainer = document.querySelector('.add-new-container .validation-msg') as HTMLSpanElement; 
const addContainerCloseBtn = document.querySelector('.close-add-list') as HTMLButtonElement;
const addNewContainer = document.querySelector('.add-new-container') as HTMLDivElement;
const containerList = document.querySelector('.main-content') as HTMLDivElement;


