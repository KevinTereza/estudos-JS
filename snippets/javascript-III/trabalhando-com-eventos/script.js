const form = document.getElementById('cadastro-form');
const registerBtn = document.getElementById('register-button');
const removeBtn = document.getElementById('remove-event');

function register(ev) {
  ev.preventDefault();
  const nameField = form.children.nome;
  const emailField = form.children.email;
  const passwordField = form.children.senha;

  if (nameField.value === '') {
    alert('Digite o nome para continuar o cadastro.');
    nameField.focus();
    return
  } 

  if (emailField.value === '') {
    alert('Digite o email para continuar o cadastro.');
    emailField.focus()
    return
  } 

  if (passwordField.value === '') {
    alert('Digite a senha para continuar o cadastro.')
    passwordField.focus()
    return
  } 

  if (passwordField.value.length < 6) {
    alert('A senha precisa ter pelo menos 6 (Seis) digitos ')
    return
  } 
  alert(`Usuário "${nameField.value}" cadastrado com sucesso.`)
}

form.addEventListener('submit', register);

removeBtn.addEventListener('click', () => {
  form.removeEventListener('submit', register)
  registerBtn.disabled = true;
  alert('Evento removido com sucesso.');
})
