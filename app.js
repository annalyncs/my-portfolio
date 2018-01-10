'use strict'

function showMenu() {
    $('.dropdown-nav').click(function () {
        $('.dropdown').toggle();
    })
};

function hideMenu() {
    $('li').on('click', function () {
        $('.dropdown').hide();
    })
};

$(function () {
    showMenu();
    hideMenu();
})
