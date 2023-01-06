const navbar = document.getElementById('navbar');
let scrolled = false;

window.onscroll = function() {

    //se a pagina rolar mais do que 100px
    if (window.pageYOffset > 100) {
        navbar.classList.remove('top'); //remover classe 'top'
        if (!scrolled) {
            navbar.style.transform = 'translateY(-70px)';
        }
        setTimeout(function() {
            navbar.style.transform = 'translateY(0)';
            scrolled = true;
        }, 200);
    } else {
        //caso contrario adicionar classe 'top'
        navbar.classList.add('top');
        scrolled = false;
    }
}

// Smooth Scrolling
$('#navbar a').on('click', function(e) {
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
                scrollTop: $(hash).offset().top - 100,
            },
            800
        );
    }
});