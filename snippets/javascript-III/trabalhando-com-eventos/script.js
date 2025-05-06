const actionBtn = document.getElementById('action-button');
const actionBtnTwo = document.getElementById('action-button2');
const actionText = document.getElementById('action-text');
const actionTextTwo = document.getElementById('action-text2');

const showMessage = () => {
    alert('Clicado!')
}
actionBtn.addEventListener('click', showMessage);
actionBtnTwo.addEventListener('dblclick', showMessage);

actionText.addEventListener('mouseover', () => {
    alert('Mouse detectado!');
})
actionText.addEventListener('mouseout', () => {
    alert('Mouse não detectado')
})

actionTextTwo.addEventListener('mousedown', () => {
    console.log('Mouse pressionado..')
})
actionTextTwo.addEventListener('mouseup', () => {
    console.log('Mouse solto')
})