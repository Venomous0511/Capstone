//menu toggle
const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
const main = document.querySelector('.main');

toggle.onclick = function () {
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}

// add hovered class in selected items
const list = document.querySelectorAll('.navigation li');
function activeLink() {
    list.forEach((item) =>
        item.classList.remove('hovered'));
    this.classList.add('hovered');
}
list.forEach((item) => item.addEventListener('click', activeLink));

function showElement(elementId) {
    const elements = ['dashboard', 'customers', 'messages', 'records', 'change-password'];

    elements.forEach(id => {
        const element = document.getElementById(id);
        if (id === elementId) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
}

function showDashboard() {
    showElement('dashboard');
}

function showCustomers() {
    showElement('customers');
}

function showMessages() {
    showElement('messages');
}

function showRecords() {
    showElement('records');
}

function showPassword() {
    showElement('change-password');
}