'use strict'

function showMenu() {
    $('span').click(function () {
        $('.dropdown').toggleClass('active');
    })
};


$(function () {
    showMenu();
})
