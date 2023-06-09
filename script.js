// Création du DOM qui est content
document.addEventListener('DOMContentLoaded', function () {

    // J'appelle mes éléments HTML pour Nav:
    const elNavButton = document.getElementById('button-nav');
    const elNavGrosse = document.getElementById('grosse-nav');
    
    const elNavTrucsToc = document.getElementById('trucs-toc-nav');
    const elUlDuToc = document.getElementById('ul-du-toc');

    const elNavFalsification = document.getElementById('falsification-nav');
    const elUlDeFalsification = document.getElementById('ul-de-falsification');

    // Ouvrir le menu:
    elNavButton.addEventListener('click', function() {
        elNavGrosse.classList.toggle('hidden');
    });    
    
    // Ouvrir Trucs en toc:
    elNavTrucsToc.addEventListener('click', function() {
        elUlDuToc.classList.toggle('hidden');
    });    
    
    // Ouvrir Falsification:
    elNavFalsification.addEventListener('click', function() {
        elUlDeFalsification.classList.toggle('hidden');
    });


    // TODO: JS Nav Horizontale, pas la même ? Est ce qu'il faut créer une fonction sans bouton ?


    
    // TODO: formulaire
    // J'appelle mes éléments HTML pour le formulaire:
    const elFormEntier = document.getElementById('form-entier');

    const elNomDuForm = document.getElementById('nom-du-form');
    const elErrorName = document.getElementById('error-name');

    const elEmailDuForm = document.getElementById('email-du-form');
    const elErrorEmail = document.getElementById('error-email');

    const elMessage = document.getElementById('message');
    const elErrorText = document.getElementById('error-text');

    // Pour le bouton validé sur mon index principal
    const elValidated = document.getElementById('validated');

    // Mon formulaire validé nouvelle page HTML
    const elValidForm = document.getElementById('valid-form');


    // Essai entier:
    for (let i = 0; i < elFormEntier.length; i++) {
        console.log(elFormEntier[i]);
    }

    // Nom:
    elNomDuForm.addEventListener('submit', function (elFormEntier) {
        elNomDuForm.classList.add('hidden');
        elNomDuForm.textContent = '';
        elNomDuForm.value = '';
    });
    
    console.log(elErrorName);

    //E-mail:
    elEmailDuForm.addEventListener('submit', function (elFormEntier) {
        elEmailDuForm.classList.add('hidden');
        elEmailDuForm.textContent = '';
        elEmailDuForm.value = '';
    });
    
    console.log(elErrorEmail);
    
    //Message:
    elMessage.addEventListener('submit', function (elFormEntier) {
        elMessage.classList.add('hidden');
        elMessage.textContent = '';
        elMessage.value = '';
    });

    console.log(elErrorText);

    //Bouton:
    elValidated.addEventListener('click', function () {

        console.log(elValidForm);
    });

});
