require("./styles.less");

var Mustache = require('mustache');
var Data = require("../js/data.js");
var CarouselTemplate = require('./carousel.html');
var ItemTemplate = require('./carousel-item.html');

module.exports = {
    initialize: function () {
        $("#carouselProgram").html(Mustache.render(CarouselTemplate, {}));

        for (var i in Data) {
            var item = Data[i];
            item.key = i;
            $("#carouselProgram .carousel-inner").append(Mustache.render(ItemTemplate, item));
        }

        $('#carouselProgram').carousel({interval: false});
    },
    pause: function () {
        $('#carouselProgram').carousel('pause');
    },
    resume: function () {
        $('#carouselProgram').carousel('cycle');
    },
    onDetails: function(callback) {
        var that = this;

        $('.inf').on('click', function() {
            var title = $(".carousel-inner .item.active").attr('data-title');
            callback(title, that.resume);
            that.pause();
        });
    }
}