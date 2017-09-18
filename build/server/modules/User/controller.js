"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var service_1 = require("./service");
var errorHandler_1 = require("../../api/responses/errorHandler");
var successHandler_1 = require("../../api/responses/successHandler");
var dbErrorHandler_1 = require("../../config/dbErrorHandler");
var _ = require("lodash");
var UserControler = /** @class */ (function () {
    function UserControler() {
        this.UserService = new service_1.default();
    }
    UserControler.prototype.getAll = function (req, res) {
        this.UserService
            .getAll()
            .then(_.partial(successHandler_1.onSuccess, res))
            .catch(_.partial(errorHandler_1.onError, res, 'Erro ao buscar todos os usuários'));
    };
    UserControler.prototype.createUser = function (req, res) {
        this.UserService
            .create(req.body)
            .then(_.partial(successHandler_1.onSuccess, res))
            .catch(_.partial(dbErrorHandler_1.dbErrorHandler, res))
            .catch(_.partial(errorHandler_1.onError, res, 'Erro ao inserir novo usuário'));
    };
    UserControler.prototype.getById = function (req, res) {
        var userId = parseInt(req.params.id);
        this.UserService
            .getById(userId)
            .then(_.partial(successHandler_1.onSuccess, res))
            .catch(_.partial(errorHandler_1.onError, res, 'Usuário não encontrado'));
    };
    UserControler.prototype.updateUser = function (req, res) {
        var userId = parseInt(req.params.id);
        var props = req.body;
        this.UserService
            .update(userId, props)
            .then(_.partial(successHandler_1.onSuccess, res))
            .catch(_.partial(errorHandler_1.onError, res, 'Falha ao atualizar usuário'));
    };
    UserControler.prototype.deleteUser = function (req, res) {
        var userId = parseInt(req.params.id);
        this.UserService
            .delete(userId)
            .then(_.partial(successHandler_1.onSuccess, res))
            .catch(_.partial(errorHandler_1.onError, res, 'Falha ao excluir usuário'));
    };
    return UserControler;
}());
exports.default = UserControler;
