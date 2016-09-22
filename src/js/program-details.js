var Mustache = require('mustache');
var Data = require("./data.js");
var ItemTemplate = require('../html/program-carousel-item.html');

module.exports = {
    initialize: function () {
        var modalTemplate = require('../html/program-modal.html');
        $('#program-details').html(Mustache.render(modalTemplate, {}))

        $('#program-details .modal').modal('show');
        $('#carouselDetails').carousel({interval: 500});

        $('.inf').on('click', function() {
            $('#program-details .modal').modal('show');
            $('#carouselDetails').carousel({interval: 500});
        });
    }
}