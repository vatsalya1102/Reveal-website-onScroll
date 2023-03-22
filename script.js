window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        console.log(windowheight);
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        // if (revealtop < windowheight) {
        //     reveals[i].classList.add('active');
        // }

        //You can use any one of these ifs, both works

        else {
            reveals[i].classList.remove('active');
        }
    }
}