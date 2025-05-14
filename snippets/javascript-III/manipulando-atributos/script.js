const input = document.getElementById('input');
const value = document.getElementById('value');
const type = document.getElementById('type');
const placeholder = document.getElementById('placeholder');
const disable = document.getElementById('disable');
const data = document.getElementById('data');

value.addEventListener('click', () => {
    input.value = 'Novo valor do input';
    console.log(input.value)

})

type.addEventListener('click', () => {
    input.type = input.type !== 'radio' ? input.type = 'radio' : input.type = 'text'
})

placeholder.addEventListener('click', () => {
    input.placeholder = 'Digite aqui...';
})
disable.addEventListener('click', () => {
    input.disabled = !input.disabled;
})
data.addEventListener('click', () => {
    const data = input.dataset.something;
    console.log('Os dados são: ' + data);
    input.dataset.something = 'Outro valor';
})

