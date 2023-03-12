import validName from "./validation.js";
import {renderInput, renderWelcomeMessage} from "./render.js"

const nameCustomer = localStorage.getItem('nameCustomer');

function clickButton() {
    const nameCustomer = document.querySelector('input').value;

    if(validName(nameCustomer)) {
        localStorage.setItem('nameCustomer', nameCustomer);
        renderWelcomeMessage(nameCustomer);
    } else {
        alert('Please, input name');
    }
}

if(nameCustomer) {
    renderWelcomeMessage(nameCustomer);
} else {
    renderInput(clickButton);
}