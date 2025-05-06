const form = document.getElementById('cadastro-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
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

  alert('Usuário cadastrado com sucesso!');
  form.reset();
  
});
