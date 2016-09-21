// styles
require('bootstrap/less/bootstrap.less');
require('../font-awesome/css/font-awesome.css');
require('../less/main.less');

// scripts
require('bootstrap/dist/js/npm');

$('.carousel').carousel({interval: 2000})

$(document).ready(function(){

    $(".nav").on("click","a", function (event) {

        event.preventDefault();

        var id  = $(this).attr('href'),

            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 1500);

    });

});
