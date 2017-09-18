"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./config/helpers");
var HTTPStatus = require("http-status");
describe('Testes de Integração', function () {
    'use strict';
    var config = require('../../server/config/env/config');
    var model = require('../../server/models');
    var id;
    var userTest = {
        id: 100,
        name: 'Henry',
        email: 'jacyzin@live.com',
        password: 'teste'
    };
    var userDefault = {
        id: 1,
        name: 'Walquiria',
        email: 'walquiria@asgard.net',
        password: 'Od1n'
    };
    beforeEach(function (done) {
        model.User.destroy({
            where: {}
        })
            .then(function () {
            return model.User.create(userDefault);
        });
    });
    describe('GET /api/users/all', function () {
        it('Deve retornar um json com todos os Usuários', function (done) {
            helpers_1.request(helpers_1.app)
                .get('/api/users/all')
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HTTPStatus.OK);
                helpers_1.expect(res.body.payload).to.be.an('array');
                helpers_1.expect(res.body.payload[0].name).to.be.equal(userDefault.name);
                helpers_1.expect(res.body.payload[0].email).to.be.equal(userDefault.email);
                done(error);
            });
        });
    });
});
describe('Testes de Integração', function () {
    describe('GET /api/users/:id', function () {
        it('Deve retornar um Json com apenas um Usuário', function (done) {
            helpers_1.request(helpers_1.app)
                .get("/api/users/" + 1)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HTTPStatus.OK);
                done(error);
            });
        });
    });
});
describe('Testes de Integração', function () {
    describe('POST /api/users/create', function () {
        it('Deve adicionar um novo Usuário', function (done) {
            var user = {
                id: 2,
                name: 'Teste',
                email: 'usuario@email.com',
                password: 'novouser'
            };
            helpers_1.request(helpers_1.app)
                .post('/api/users/create')
                .send(user)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HTTPStatus.OK);
                helpers_1.expect(res.body.payload.id).to.be.eql(user.id);
                helpers_1.expect(res.body.payload.name).to.be.eql(user.name);
                helpers_1.expect(res.body.payload.email).to.be.eql(user.email);
                done(error);
            });
        });
    });
});
describe('Testes de Integração', function () {
    describe('PUT /api/users/:id/update', function () {
        it('Deve atualizar um Usuário', function (done) {
            var user = {
                nome: 'TesteUpdate'
            };
            helpers_1.request(helpers_1.app)
                .put("/api/users/" + 1 + "/update")
                .send(user)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HTTPStatus.OK);
                done(error);
            });
        });
    });
});
describe('Testes de Integração', function () {
    describe('DELETE /api/users/:id/destroy', function () {
        it('Deve deletar um usuário', function (done) {
            helpers_1.request(helpers_1.app)
                .delete("/api/users/" + 1 + "/destroy")
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HTTPStatus.OK);
                done(error);
            });
        });
    });
});
