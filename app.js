'use strict'

let landing = $('#landing').offset();
let about = $('#about').offset();
let projects = $('#projects').offset();
let skills = $('#skills').offset();
let contact = $('#contact').offset();


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
