// styles
require('bootstrap/less/bootstrap.less');
require('magnific-popup/dist/magnific-popup.css');
require('../font-awesome/css/font-awesome.css');
require('../less/main.less');

// scripts
require('bootstrap/dist/js/npm');
require('magnific-popup/dist/jquery.magnific-popup.js');

var Carousel = require('../carousel');
var ProgramDetails = require('../details');

$(document).ready(function(){

    $(".nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    Carousel.initialize();
    Carousel.onDetails(ProgramDetails.open);
    //ProgramDetails.open("sverchok");
});
