import validName from "./validation.js";
import {renderInput, renderWelcomeMessage} from "./render.js"

const nameCustomer = localStorage.getItem('nameCustomer');

function clickButton() {
    const inputName = document.querySelector('input');
    const nameCustomer = inputName.value;

    if(validName(nameCustomer)) {
        localStorage.setItem('nameCustomer', nameCustomer);
        renderWelcomeMessage(nameCustomer);
    } else {
        inputName.value = '';
        alert('Please, input name');
    }
}

if(nameCustomer) {
    renderWelcomeMessage(nameCustomer);
} else {
    renderInput(clickButton);
}