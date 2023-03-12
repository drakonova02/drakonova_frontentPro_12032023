function renderWelcomeMessage(nameCustomer) {
    const wrapper = document.querySelector('.wrapper');
    wrapper.innerHTML = `<h1>Hello ${nameCustomer}</h1>`;
}

function renderInput(clickButton) {
    const wrapper = document.querySelector('.wrapper');
    const input = document.createElement('input');
    const button = document.createElement('button');

    wrapper.innerHTML = '<h1>Hi, what is your name?</h1>';
    button.innerText = 'OK';
    button.onclick = clickButton;
    wrapper.append(input);
    wrapper.append(button);
}

export {
    renderInput,
    renderWelcomeMessage
}