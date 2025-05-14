const darkBtn = document.getElementById('darkBtn');
const lightBtn = document.getElementById('lightBtn');
const switchBtn = document.getElementById('switchBtn');
function darkMode() {
    document.body.style.backgroundColor = '#212529';
    document.body.style.color = '#f1f5f9';
}

function lightMode() {
    document.body.style.backgroundColor = '#f1f5f9';
    document.body.style.color = '#212529';
}

function switchModes() {
    document.body.classList.toggle('is-light')
    document.body.classList.toggle('is-dark')
}

darkBtn.addEventListener('click', darkMode);
lightBtn.addEventListener('click', lightMode);
switchBtn.addEventListener('click', switchModes);

