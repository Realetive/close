var Mustache = require('mustache');
var Data = require("./data.js");
var ItemTemplate = require('../html/program-item.html');
var ModalTemplate = require('../html/program-modal.html');

module.exports = {
    open: function (key, closedCallback) {

        var details = Data[key];
        details.images = [];
        for (var i = 1; i <= 5; i++) {
            details.images.push({
                title: details.title,
                image: require("../program/" + key + "/img/" + i + ".jpg")
            });
        }

        $('#program-details').html(Mustache.render(ModalTemplate, details));

        for (var i in details.images) {
            var item = details.images[i];
            var html = Mustache.render(ItemTemplate, item);
            //$("#program-details .showroom").append(html);
        }

        $('#program-details .modal').modal('show');
        $('#program-details .modal').on('hidden.bs.modal', function (e) {
            closedCallback();
        });
    }
}