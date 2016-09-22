// styles
require('bootstrap/less/bootstrap.less');
require('magnific-popup/dist/magnific-popup.css');
require('../font-awesome/css/font-awesome.css');
require('../less/main.less');

// scripts
require('bootstrap/dist/js/npm');
require('magnific-popup/dist/jquery.magnific-popup.js');

var Mustache = require('mustache');

$(document).ready(function(){

    $(".nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    var program = require("./data.js");
    var itemTemplate = require('../html/carousel-item.html');
    for (var i in program) {
        var item = program[i];
        var html = Mustache.render(itemTemplate, item);
        $(".carousel-inner").append(html);
    }

    $('.carousel').carousel({interval: false});

    $('.modal').modal('show');

    $('.inf').on('click', function() {
    });
});
