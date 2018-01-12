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
    } else {
        $('a').addClass('selected');
    }
})

function scrollPageTo(myTarget, topPadding) {
    if (topPadding == undefined) {
        topPadding = 0;
    }
    var moveTo = $(myTarget).offset().top - topPadding;
    $('html, body').stop().animate({
        scrollTop: moveTo
    }, 'slow');
}

$('.about-nav').click(function () {
    scrollPageTo('#about', 100)
});

$('.projects-nav').click(function () {
    scrollPageTo('#projects', 100)
});

$('.skills-nav').click(function () {
    scrollPageTo('#skills', 100)
});

$('.contact-nav').click(function () {
    scrollPageTo('#contact', 100)
});

$('div#landing p').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
    $(this).removeClass('animated slideInDown');
    $(this).addClass('animated fadeOut');
    $(this).removeClass('animated fadeOut').addClass('animated fadeIn').html("I'm a full-stack web developer.")
})

$('.dropdown').on('click', 'li', function () {
    $('.dropdown').addClass('active');
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
