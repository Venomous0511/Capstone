//menu toggle
let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');

toggle.onclick = function () {
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}

// add hovered class in selected items
let list = document.querySelectorAll('.navigation li');
function activeLink() {
    list.forEach((item) =>
        item.classList.remove('hovered'));
    this.classList.add('hovered');
}
list.forEach((item) => item.addEventListener('click', activeLink));

function showDashboard() {
    document.getElementById('dashboard').style.display = 'block';
    document.getElementById('customers').style.display = 'none';
}

function showCustomers() {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('customers').style.display = 'block';
}