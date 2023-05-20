let navbar = document.querySelector('#navbar');
let menu = document.querySelector('.menu');

menu.addEventListener('click', () => {
    navbar.classList.toggle('open');
});

// const sr = ScrollReveal({
//     distance: '65px',
//     duration: 2600,
//     delay: 450,
//     reset: true
// });

// sr.reveal('.hero-text', { delay: 200, origin: 'top' });
// sr.reveal('.image', { delay: 450, origin: 'top' });
// sr.reveal('.icons', { delay: 500, origin: 'left' });

// ******************************************************************

let mode = document.querySelector('#mode');

mode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {

        mode.style.color = 'white';
    } else {
        mode.classList.add('fa-moon');
        mode.style.color = 'black';
    }
});