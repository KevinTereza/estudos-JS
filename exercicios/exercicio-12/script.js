const form = document.getElementById('dev-form');
const techBtn = document.getElementById('add-tech-btn');
const techList = document.getElementById('tech-list');

techBtn.addEventListener('click', (ev) => {
    techItem = document.createElement('div')
    const techLabel = document.createElement('label');
    const techInput = document.createElement('input');
    const radioLabelJr = document.createElement('label');
    const techRadioJr = document.createElement('input');
    const radioLabelMid = document.createElement('label');
    const techRadioMid = document.createElement('input');
    const radioLabelSenior = document.createElement('label');
    const techRadioSenior = document.createElement('input');

    techItem.className = 'tech-item';
    techItem.style.marginBottom = '1em';

    techLabel.innerText = 'Digite o nome da tecnologia:';
    techLabel.htmlFor = 'tech-input';
    techInput.id = 'tech-input';
    techInput.type = 'text';

    techRadioJr.type = 'radio';
    techRadioJr.name = 'experiencia';
    techRadioJr.value = '0-2 anos';
    radioLabelJr.appendChild(techRadioJr);
    radioLabelJr.append('0 - 2 anos de experiencia com a tecnologia.')

    techRadioMid.type = 'radio';
    techRadioMid.name = 'experiencia';
    techRadioMid.value = '3-4 anos';
    radioLabelMid.appendChild(techRadioMid);
    radioLabelMid.append('3 - 4 anos de experiencia com a tecnologia.')

    techRadioSenior.type = 'radio';
    techRadioSenior.name = 'experiencia';
    techRadioSenior.value = '5+ anos';
    radioLabelSenior.appendChild(techRadioSenior);
    radioLabelSenior.append('5+ anos de experiencia com a tecnologia.')

    techItem.appendChild(techLabel);
    techItem.appendChild(document.createElement('br'));
    techItem.appendChild(techInput);
    techItem.appendChild(document.createElement('br'));
    techItem.appendChild(radioLabelJr);
    techItem.appendChild(document.createElement('br'));
    techItem.appendChild(radioLabelMid);
    techItem.appendChild(document.createElement('br'));
    techItem.appendChild(radioLabelSenior);
    techList.append(techItem);


})