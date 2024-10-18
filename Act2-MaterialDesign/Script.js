document.getElementById('theme-toggle-btn').addEventListener('click', function () {
    
    document.body.classList.toggle('blue-grey');
    document.body.classList.toggle('darken-4');
     
    var h5 = document.querySelector('.title');
    h5.classList.toggle('grey-text');
    h5.classList.toggle('text-lighten-5');

    var desc = document.querySelector('.description');
    desc.classList.toggle('grey-text');
    desc.classList.toggle('text-lighten-5');

    var cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.toggle('blue-grey');
        card.classList.toggle('darken-3');
    }); 

    var cardTitles = document.querySelectorAll('.card-title');
    cardTitles.forEach(title => {
        title.classList.toggle('grey-text');
        title.classList.toggle('text-lighten-5');
    });

    var button = document.getElementById('theme-toggle-btn');
    button.classList.toggle('amber');
    button.classList.toggle('accent-3');
    button.classList.toggle('grey-text');
    button.classList.toggle('text-darken-4');

    if (document.body.classList.contains('blue-grey')) {
        M.toast({ html: 'El tema ha cambiado a oscuro' });
        button.textContent = 'Activar Tema Claro';
    } else {
        button.textContent = 'Activar Tema Oscuro';
        M.toast({ html: 'El tema ha cambiado a claro' });
    }
});