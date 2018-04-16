sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox"
], function (Controller, JSONModel, MessageBox) {
    "use strict";

    return Controller.extend('dogs.modules.main.controller.App', {

        onInit: function () {
            this.getView().setModel(new JSONModel({}), "settings");
            this.getView().setModel(new JSONModel({}), 'storage');
        }

    });
});
