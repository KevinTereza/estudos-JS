function addContact() {
    const sectionContacts = document.getElementById('contacts-list');

    const sectionTitle = document.createElement('h2');
    sectionTitle.innerText = 'Informações do contato:';
    sectionContacts.appendChild(sectionTitle);

    const sectionList = document.createElement('ul');

    const listNameItem = document.createElement('li');
    const itemNameLabel = document.createElement('label');
    itemNameLabel.innerText = 'Nome: ';
    itemNameLabel.htmlFor = 'list__name'
    const itemNameInput = document.createElement('input');
    itemNameInput.id = 'list__name'
    itemNameInput.name = 'name'

    const listNumberItem = document.createElement('li')
    const itemNumberLabel = document.createElement('label');
    itemNumberLabel.innerText = 'Telefone: ';
    itemNumberLabel.htmlFor = 'list__number'
    const itemNumberInput = document.createElement('input');
    itemNumberInput.id = 'list__number'
    itemNumberInput.name = 'number';

    const listAdressItem = document.createElement('li')
    const itemAdressLabel = document.createElement('label');
    itemAdressLabel.innerText = 'Endereço: ';
    itemAdressLabel.htmlFor = 'list__adress'
    const itemAdressInput = document.createElement('input');
    itemAdressInput.id = 'list__adress'
    itemAdressInput.name = 'adress';

    listNameItem.append(itemNameLabel, itemNameInput);
    sectionList.appendChild(listNameItem);

    listNumberItem.append(itemNumberLabel, itemNumberInput);
    sectionList.appendChild(listNumberItem);

    listAdressItem.append(itemAdressLabel, itemAdressInput);
    sectionList.appendChild(listAdressItem);

    sectionContacts.appendChild(sectionList)   
}

function removeContact() {
    const sectionContacts = document.getElementById('contacts-list');
    const subtitles = sectionContacts.querySelectorAll('h2')
    const contacts = sectionContacts.querySelectorAll('ul')

    sectionContacts.removeChild(subtitles[subtitles.length - 1]);
    sectionContacts.removeChild(contacts[contacts.length - 1]);
    
}