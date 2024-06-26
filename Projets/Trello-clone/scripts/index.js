"use strict";
const itemContainer = document.querySelectorAll('.items-container');
let actualContainer, actualBtn, actualUL, actualForm, actualTextInuput, actualValidation;
// Détruire un élément
itemContainer.forEach((container) => {
    addContainerListeners(container);
});
function addContainerListeners(currentContainer) {
    //<button class="delete-container-btn">X</button>
    const currentContainerDeleteBtn = currentContainer.querySelector('.delete-container-btn');
    deleteBtnListeners(currentContainerDeleteBtn);
    // <button class="add-item-btn">Ajouter un article</button>
    const currentAddItemBtn = currentContainer.querySelector('.add-item-btn');
    addItemBtnListeners(currentAddItemBtn);
    // <button type="button" class="close-form-btn">X</button>
    const currentCloseForBtn = currentContainer.querySelector('.close-form-btn');
    closingFormBtnListerner(currentCloseForBtn);
    // <form autocomplete="off"></form>
    const currentForm = currentContainer.querySelector('form');
    addFormSubmitListeners(currentForm);
}
function deleteBtnListeners(btn) {
    btn.addEventListener('click', handleContainerDelete);
}
function handleContainerDelete(e) {
    const btn = e.target;
    const btnsArray = [...document.querySelectorAll('.delete-container-btn')];
    const containers = [...document.querySelectorAll('.items-container')];
    containers[btnsArray.indexOf(btn)].remove();
}
// Ajouter le toggle
function addItemBtnListeners(btn) {
    btn.addEventListener('click', handleAddItem);
}
function handleAddItem(e) {
    const btn = e.target;
    if (actualContainer)
        toggleForm(actualBtn, actualForm, false);
    setContainerItems(btn);
    toggleForm(actualBtn, actualForm, true);
}
function setContainerItems(btn) {
    actualBtn = btn;
    actualContainer = btn.parentElement;
    actualUL = actualContainer.querySelector('ul');
    actualForm = actualContainer.querySelector('form');
    actualTextInuput = actualContainer.querySelector('input');
    actualValidation = actualContainer.querySelector('.validation-msg');
}
function toggleForm(btn, form, action) {
    !action ? (form.style.display = 'none', btn.style.display = 'block') : (form.style.display = 'block', btn.style.display = 'none');
}
// Ajouter un item et le détruire
function closingFormBtnListerner(btn) {
    btn.addEventListener('click', () => toggleForm(actualBtn, actualForm, false));
}
function addFormSubmitListeners(form) {
    form.addEventListener('submit', createNewItem);
}
function createNewItem(e) {
    e.preventDefault();
    if (actualTextInuput.value.length === 0) {
        actualValidation.textContent = "Doit contenir au moins 1 caractère !";
        return;
    }
    else {
        actualValidation.textContent = "";
    }
    const itemContent = actualTextInuput.value;
    const li = `<li class="item" draggable="true"><p>${itemContent}</p><button type="button" class="close-form-btn">X</button></li>`;
    actualUL.insertAdjacentHTML('beforeend', li);
    const item = actualUL.lastElementChild;
    const liBtn = item.querySelector('button');
    handleItemDeletion(liBtn);
    actualTextInuput.value = "";
}
function handleItemDeletion(btn) {
    btn.addEventListener('click', () => {
        const elToRemove = btn.parentElement;
        elToRemove.remove();
    });
}
// Ajouter un nouveau container
const addContainerBtn = document.querySelector('.add-container-btn');
const addContainerForm = document.querySelector('.add-new-container form');
const addContainerInput = document.querySelector('.add-new-container Input');
const validationNewContainer = document.querySelector('.add-new-container .validation-msg');
const addContainerCloseBtn = document.querySelector('.close-add-list');
const addNewContainer = document.querySelector('.add-new-container');
const containerList = document.querySelector('.main-content');
addContainerBtn.addEventListener('click', () => {
    toggleForm(addContainerBtn, addContainerForm, true);
});
addContainerCloseBtn.addEventListener('click', () => {
    toggleForm(addContainerBtn, addContainerForm, false);
});
addContainerForm.addEventListener('submit', createNewContainer);
function createNewContainer(e) {
    e.preventDefault();
    if (addContainerInput.value.length === 0) {
        validationNewContainer.textContent = "Doit contenir au moins 1 caractère !";
        return;
    }
    else {
        validationNewContainer.textContent = "";
    }
    const itemsContainer = document.querySelector('.items-container');
    const newContainer = itemsContainer.cloneNode();
    const newContainerContent = `
    <div class="top-container">
      <h2>${addContainerInput.value}</h2>
      <button class="delete-container-btn">X</button>
    </div>
    <ul></ul>
    <button class="add-item-btn">Ajouter un article</button>

    <form autocomplete="off">
      <div class="top-form-container">
        <label for="item">Ajouter un nouvelle article</label>
        <button type="button" class="close-form-btn">X</button>
      </div>
      <input type="text" id="item">
      <span class="validation-msg"></span>

      <button type="submit">Submit</button>
    </form>`;
    newContainer.innerHTML = newContainerContent;
    containerList === null || containerList === void 0 ? void 0 : containerList.insertBefore(newContainer, addNewContainer);
    addContainerInput.value = "";
    addContainerListeners(newContainer);
}
