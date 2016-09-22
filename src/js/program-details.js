var Mustache = require('mustache');
var Data = require("./data.js");
var ItemTemplate = require('../html/program-carousel-item.html');

module.exports = {
    open: function (key) {
        var modalTemplate = require('../html/program-modal.html');
        $('#program-details').html(Mustache.render(modalTemplate, {}))

        var details = Data[key];
        details.images = [];
        for (var i = 1; i <= 5; i++) {
            details.images.push({
                title: details.title,
                image: require("../program/" + key + "/img/" + i + ".jpg")
            });
        }
        details.images[0].state = "active";
        console.debug(details);
        //$("#carouselDetails .carousel-inner").html('');
        for (var i in details.images) {
            var item = Data[i];
            //var html = Mustache.render(ItemTemplate, item);
            //$("#carouselDetails .carousel-inner").append(html);
        }

        $('#program-details .modal').modal('show');
        //$('#carouselDetails').carousel({interval: 500});
    }
}