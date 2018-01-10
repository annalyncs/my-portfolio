'use strict'

function showMenu() {
    $('span').click(function () {
        $('.dropdown').toggleClass('active');
    })
};

function selectedSection() {
    $('nav').on('click', 'a', function () {
        $(this).toggleClass('selected');
    })
}


$(function () {
    showMenu();
    selectedSection();
})
