"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HTTPStatus = require("http-status");
var UserControler = /** @class */ (function () {
    function UserControler() {
    }
    UserControler.prototype.getAll = function (req, res) {
        res.status(HTTPStatus.OK).json({
            message: 'ok'
        });
    };
    UserControler.prototype.createUser = function (req, res) {
        res.status(HTTPStatus.OK).json({
            message: 'ok'
        });
    };
    UserControler.prototype.getById = function (req, res) {
        res.status(HTTPStatus.OK).json({
            message: 'ok'
        });
    };
    UserControler.prototype.updateUser = function (req, res) {
        res.status(HTTPStatus.OK).json({
            message: 'ok'
        });
    };
    UserControler.prototype.deleteUser = function (req, res) {
        res.status(HTTPStatus.OK).json({
            message: 'ok'
        });
    };
    return UserControler;
}());
exports.default = UserControler;
