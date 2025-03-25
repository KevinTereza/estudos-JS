function show() {
    const btnClick = document.querySelector('button'); // Elemento
    console.log(btnClick);

    const ulList = document.getElementById('contact-list'); // Elemento
    console.log(ulList);

    const contactsInput = document.getElementsByClassName('contact-input'); // HTML Collection
    console.log(contactsInput);

    const contactsInputs = document.querySelectorAll('#contact-list > li > label'); // NodeList (ForEach)
    console.log(contactsInputs);

    const titleTag = document.getElementsByTagName('h1'); // HTML Collection
    console.log(titleTag);

}