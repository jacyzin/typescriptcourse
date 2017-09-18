"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var controller_1 = require("./controller");
var UserCtrl;
var UserRoutes = /** @class */ (function () {
    function UserRoutes() {
        UserCtrl = new controller_1.default();
    }
    UserRoutes.prototype.index = function (req, res) {
        return UserCtrl.getAll(req, res);
    };
    UserRoutes.prototype.create = function (req, res) {
        return UserCtrl.createUser(req, res);
    };
    UserRoutes.prototype.findOne = function (req, res) {
        return UserCtrl.getById(req, res);
    };
    UserRoutes.prototype.update = function (req, res) {
        return UserCtrl.updateUser(req, res);
    };
    UserRoutes.prototype.destroy = function (req, res) {
        return UserCtrl.deleteUser(req, res);
    };
    return UserRoutes;
}());
exports.default = UserRoutes;
