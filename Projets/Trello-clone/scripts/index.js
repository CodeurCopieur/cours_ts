"use strict";
const itemContainer = document.querySelectorAll('.items-container');
itemContainer.forEach((container) => {
    addContainerListeners(container);
});
function addContainerListeners(currentContainer) {
    const currentContainerDeleteBtn = currentContainer.querySelector('.delete-container-btn');
    deleteBtnListeners(currentContainerDeleteBtn);
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
