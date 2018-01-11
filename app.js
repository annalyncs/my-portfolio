'use strict'

let landing = $('#landing').offset();
let about = $('#about').offset();
let projects = $('#projects').offset();
let skills = $('#skills').offset();
let contact = $('#contact').offset();

console.log($('header').offset());
console.log(landing);
console.log(projects);
console.log(skills);
console.log(contact);


$(window).scroll(function () {
    let screenPosition = $(document).scrollTop();

    if (screenPosition < landing.top) {
        $('a').removeClass('selected');
    } else if (screenPosition < about.top) {
        $('a').removeClass('selected');
        $('.about-nav').addClass('selected');
    } else if (screenPosition < projects.top) {
        $('a').removeClass('selected');
        $('.projects-nav').addClass('selected');
    } else if (screenPosition < skills.top) {
        $('a').removeClass('selected');
        $('.skills-nav').addClass('selected');
    } else if (screenPosition < contact.top) {
        $('a').removeClass('selected');
        $('.contact-nav').addClass('selected');
    }
})

$('.about-nav').click(function () {
    $('html,body').animate({
            scrollTop: (about.top - 100)
        },
        'slow');
});

$('.projects-nav').click(function () {
    $('html,body').animate({
            scrollTop: (projects.top - 100)
        },
        'slow');
});

$('.skills-nav').click(function () {
    $('html,body').animate({
            scrollTop: (skills.top - 100)
        },
        'slow');
});

$('.contact-nav').click(function () {
    $('html,body').animate({
            scrollTop: (contact.top - 100)
        },
        'slow');
});


function showMenu() {
    $('span').click(function () {
        $('.dropdown').toggleClass('active');
    })
};

function selectedSection() {
    $('nav').on('click', 'a', function () {
        $('a').removeClass('selected');
        $(this).addClass('selected');
    })
}


$(function () {
    showMenu();
    selectedSection();
})
