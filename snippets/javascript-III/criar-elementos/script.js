function newInput() {
    const ul = document.getElementById('ulInputs');

    const newLi = document.createElement('li');
    newLi.innerText = 'Novo input: '; 
    newLi.className = 'ul__item';

    const newInput = document.createElement('input');
    newInput.type = 'text'; 
    newInput.placeholder = 'Lorem, ipsum dolor.'; 

    newLi.appendChild(newInput); 
    ul.appendChild(newLi); 
}

function sayHi() {
    const ul = document.getElementById('hiZone')

    const newLi = document.createElement('li')
    newLi.className = 'hiZone__item';

    const newP = document.createElement('p')
    newP.innerText = 'Oi!';

    newLi.appendChild(newP);
    ul.appendChild(newLi);
}
