/*This function activates when the user clicks on the mobile menu
 and displays the rest of the options*/
function menu() {
    var x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
        x.className += ' responsive';
    } else {
        x.className = 'topnav';
    }
}
let navBar = document.getElementById('myTopnav');
// This code block creates a nav list dynamically
const navMenu = ['Inicio', 'Nosotros', 'Cursos', 'Premios', 'Contacto'];
const navMenuHref = ['#one', '#two', '#three', '#four', '#five'];
for (let i = 0; i < navMenu.length; i++) {
    //<li><a href="#one" class="active">Inicio</a></li> how it should look
    let li = document.createElement('li');
    let a = document.createElement('a');
    if (i === 0) {
        //this condition is only to add active to the first child
        a.classList.add('active');
    }
    a.href = navMenuHref[i];
    a.innerHTML = navMenu[i];
    li.appendChild(a);
    navBar.appendChild(li);
}

//
// get all sections that have an ID defined
const sections = document.querySelectorAll('section[id]');

// add an event listener listening for scroll
window.addEventListener('scroll', navHighlighted);

function navHighlighted() {
    // get current scroll position
    let scrollY = window.pageYOffset;

    // loop through sections to get height, top and ID values for each
    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        /*
    - if the current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - to know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            console.log(sectionId);
            document
                .querySelector('.topnav a[href*=' + sectionId + ']')
                .classList.add('active');
        } else {
            document
                .querySelector('.topnav a[href*=' + sectionId + ']')
                .classList.remove('active');
        }
    });
}
