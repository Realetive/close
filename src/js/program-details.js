var Mustache = require('mustache');
var Data = require("./data.js");
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

        $('#program-details .modal').modal('show');
        $('#program-details .modal').on('hidden.bs.modal', function (e) {
            closedCallback();
        });
    }
}