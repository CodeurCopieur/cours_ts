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
}

function deleteBtnListeners (btn  : HTMLButtonElement) {
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

