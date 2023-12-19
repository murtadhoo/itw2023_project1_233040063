/* contoh js punya si mattboldt
var typed = new Typed('#element', {
    strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
    typeSpeed: 50,
    });*/
var typed= new Typed ('.text', {
        strings: [ 'Student College.'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

/*============scroll sections==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top =window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top => offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
};