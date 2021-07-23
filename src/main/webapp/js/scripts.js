/*!
* Start Bootstrap - Creative v7.0.3 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    }


    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});

var about = document.getElementById("about-button")

about.addEventListener('click', () => {
    var title = document.getElementById('title-about')
    var pagraph = document.getElementById('text-about')


    title.classList.add('animate__animated', 'animate__backInRight');
    pagraph.classList.add('animate__animated', 'animate__backInRight');

})

about = document.getElementById('sobre')
about.addEventListener('click', () => {
    var title = document.getElementById('title-about')
    var pagraph = document.getElementById('text-about')

    title.classList.add('animate__animated', 'animate__backInRight');
    pagraph.classList.add('animate__animated', 'animate__backInRight');

})


var admi = document.getElementById('admin')
admi.addEventListener('click', () => {
    var title = document.getElementById('title-map1')
    var address = document.getElementById('div-map-admin')
    var images = document.getElementById('carouselExampleInterval')
    var divider = document.getElementById('divider-map1')


    divider.classList.add('animate__animated', 'animate__backInUp');
    title.classList.add('animate__animated', 'animate__backInUp');
    images.classList.add('animate__animated', 'animate__backInUp');
    address.classList.add('animate__animated', 'animate__backInUp');
})

var princi = document.getElementById('principal')
princi.addEventListener('click', () => {
    var title = document.getElementById('title-map2')
    var address = document.getElementById('div-map-princi')
    var images = document.getElementById('carouselExampleInterval1')
    var divider = document.getElementById('divider-map')

    divider.classList.add('animate__animated', 'animate__backInUp');
    title.classList.add('animate__animated', 'animate__backInUp');
    images.classList.add('animate__animated', 'animate__backInUp');
    address.classList.add('animate__animated', 'animate__backInUp');

})

var home = document.getElementById('home')
home.addEventListener('click', () => {
    var title = document.getElementById('title-banner')

    title.classList.add('animate__animated', 'animate__fadeInDown')
})

var title = document.getElementById('title-banner')

title.classList.add('animate__animated', 'animate__fadeInDown')

function sendData() {
    var email = document.getElementById('email').value
    var name = document.getElementById('name').value
    var text = document.getElementById('text-body').value
    var phone = document.getElementById('phone').value
    var matter = document.getElementById("matter").value

    if (email != "" && name != "" && text != "" && matter != "" &&
        phone != "" && email.includes('@')
        && email.includes('.')) {

        var http = new XMLHttpRequest()
        var uri = 'http://35.199.121.206:8080/Internacionale-1.0-SNAPSHOT/api/send-email/' + name + "/" + matter + "/" + phone + "/" + email + "/" + text
        http.open('POST', uri, true)

        http.onreadystatechange = () => {
            if (http.readyState == 4 && http.status == 200) {
                swal("Envio de datos Exitosos", "Informacion enviada con exito.")
            }
        }


        http.send()


    } else {
        if (email == "" && name == "" && text == "" && matter == "" &&
            phone == "") {

            swal("Error al ingresar datos", "Todos los campos estan vacios.")
        } else if (email != "" && !email.includes('@')
            && !email.includes('.')) {
            swal('Error en el campo email', 'Verifique que este bien escrito su email y que contenga los caracteres "@" y  "." .')

        } else if (isNaN(email) || isNaN(name) || isNaN(text) || isNaN(matter)) {
            swal('Error en el campos', 'Verifique campos email,nombre,mensaje y/o asunto !! Estos campos NO deben tener número ¡¡.')
        } else if (email == "" || name == "" || text == "" || matter == "" ||
            phone == "") {
            swal('Error en el campos', 'Verifique campos email,nombre,mensaje y/o asunto, algúno de estos campos esta vacio.')
        }

    }

}