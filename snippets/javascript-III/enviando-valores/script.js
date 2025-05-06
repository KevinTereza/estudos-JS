function register(element) {
    const userName = element.querySelector('[name="username"]').value;
    const userPassword = element.querySelector('[name="password"]').value;
    const userPasswordConfirmation = element.querySelector('[name="passwordConfirmation"]').value;
    
    if (userPasswordConfirmation === userPassword) {
        alert(`Usuário "${userName}" cadastrado com sucesso!`)
        document.getElementById('registro-usuario').reset();
    } else {
        alert('As senhas não coincidem.')
        document.querySelector('[name="passwordConfirmation"]').focus();
    }
}