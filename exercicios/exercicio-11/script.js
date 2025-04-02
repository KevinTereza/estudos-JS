function lineUpPlayer() {
    const playerName = document.getElementById('player-name').value;
    const playerPosition = document.getElementById('player-position').value;
    const playerNumber = document.getElementById('player-number').value;

    let userChoice = confirm(`Você quer escalar o jogador:\nNome ${playerName}\nPosição ${playerPosition}\nNúmero: ${playerNumber}`);
    if (userChoice) {
        const playersDiv = document.getElementById('team-playes');
        const playersList = document.createElement('ul')
    }

    

}