let navLink = document.querySelectorAll('.nav-link');

function headerShrink() {
    let winScrol = window.scrollY;
    for(i=0;i<navLink.length;i++) {
        if (winScrol > 40) {
            navLink[i].classList.add('padding-shrink');
        } else {
            navLink[i].classList.remove('padding-shrink');
        }
    }
}

window.addEventListener('scroll', headerShrink);