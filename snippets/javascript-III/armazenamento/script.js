document.getElementById('sessionBtn').addEventListener('click', () => {
    const input = document.getElementById('session');
    sessionStorage.setItem('infoSession', input.value)
    input.value = ''
    input.placeholder = 'sucesso!'
})

document.getElementById('readSesssion').addEventListener('click', () => {
    const info = sessionStorage.getItem('infoSession');
    alert('A informação guardada foi: ' + info)
})

document.getElementById('localBtn').addEventListener('click', () => {
    const input = document.getElementById('local');
    localStorage.setItem('infoLocal', input.value)
    input.value = ''
    input.placeholder = 'sucesso!'
})

document.getElementById('readLocal').addEventListener('click', () => {
    const info = localStorage.getItem('infoLocal');
    alert('A informação guardada foi: ' + info)
})

// Cookies
document.getElementById('cookieBtn').addEventListener('click', () => {
    const input = document.getElementById('cookie')
    const cookieName = 'info=' + input.value + ';'
    const cookieExp = 'Expires=' + new Date('2025-06-01T00:00:00Z').toUTCString() + ';'
    const cookiePath = 'path=/;'
    document.cookie = cookieName + cookieExp + cookiePath;
    console.log(document.cookie)
})

document.getElementById('cookie2Btn').addEventListener('click', () => {
    const input = document.getElementById('cookie2')
    const cookieName = 'name=' + input.value + ';'
    const cookieExp = 'Expires=' + new Date('2025-06-01T00:00:00Z').toUTCString() + ';'
    const cookiePath = 'path=/;'
    document.cookie = cookieName + cookieExp + cookiePath;
    console.log(document.cookie)
})

