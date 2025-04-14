function lineUpPlayer() {
    const playerName = document.getElementById('player-name').value;
    const playerPosition = document.getElementById('player-position').value;
    const playerNumber = document.getElementById('player-number').value;
    
    if (playerName === '' || playerPosition === '' || playerNumber === '') {
        alert('Por favor, insira informações nos campos para continuar.');
        return; 
    }

    let userChoice = confirm(`Você quer escalar o jogador:\nNome: ${playerName}\nPosição: ${playerPosition}\nNúmero: ${playerNumber}`);
    if (userChoice) {
        const playersDiv = document.getElementById('team-players');
        const playersList = document.createElement('ul');

        const playerInfo = document.createElement('ul');
        const playerInfoLegend = document.createElement('h2')
        const playerInfoName = document.createElement('li');
        const playerInfoPosition = document.createElement('li');
        const playerInfoNumber = document.createElement('li');

        playerInfoLegend.innerText = `Informações do jogador:`;
        playerInfoName.innerText = `Nome: ${playerName}`;
        playerInfoPosition.innerText = `Posição: ${playerPosition}`;
        playerInfoNumber.innerText = `Número: ${playerNumber}`;


        playerInfo.append(playerInfoLegend, playerInfoName, playerInfoPosition, playerInfoNumber);
        playersList.appendChild(playerInfo);
        playersDiv.appendChild(playersList);

        document.getElementById('lineup-form').reset();

    }
}