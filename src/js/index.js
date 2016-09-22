// styles
require('bootstrap/less/bootstrap.less');
require('magnific-popup/dist/magnific-popup.css');
require('../font-awesome/css/font-awesome.css');
require('../less/main.less');

// scripts
require('bootstrap/dist/js/npm');
require('magnific-popup/dist/jquery.magnific-popup.js');

var ProgramDetails = require('./program-details');
var Mustache = require('mustache');

$(document).ready(function(){

    $(".nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    var Data = require("./data.js");
    var ItemTemplate = require('../html/carousel-item.html');
    for (var i in Data) {
        var item = Data[i];
        item.key = i;
        var html = Mustache.render(ItemTemplate, item);
        $("#carouselProgram .carousel-inner").append(html);
    }

    $('#carouselProgram').carousel({interval: 500});

    $('.inf').on('click', function() {
        var title = $(this).attr('data-title');
        ProgramDetails.open(title);
    });
});
