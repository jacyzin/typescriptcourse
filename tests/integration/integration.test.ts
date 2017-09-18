import { app, request, expect } from './config/helpers';
import * as HTTPStatus from 'http-status';

describe('Testes de Integração', () => {

    'use strict';
    const config = require('../../server/config/env/config');
    const model = require('../../server/models');

    let id;

    const userTest = {
        id:100,
        name: 'Henry',
        email: 'jacyzin@live.com',
        password: 'teste'
    };

    const userDefault = {
        id:1,
        name: 'Walquiria',
        email: 'walquiria@asgard.net',
        password: 'Od1n'
    };

    beforeEach((done) => {
        model.User.destroy({
            where: {}
        })
        .then(() => {
            return model.User.create(userDefault);
        })
    });


    describe('GET /api/users/all', () => {
        it('Deve retornar um json com todos os Usuários', done => {
            request(app)
            .get('/api/users/all')
            .end((error, res) => {
                expect(res.status).to.equal(HTTPStatus.OK);
                expect(res.body.payload).to.be.an('array');
                expect(res.body.payload[0].name).to.be.equal(userDefault.name);
                expect(res.body.payload[0].email).to.be.equal(userDefault.email);
                done(error);
            })
        });
    });
});

describe('Testes de Integração', () => {
    describe('GET /api/users/:id', () => {
        it('Deve retornar um Json com apenas um Usuário', done => {
            request(app)
            .get(`/api/users/${1}`)
            .end((error, res) => {
                expect(res.status).to.equal(HTTPStatus.OK);
                done(error);
            })
        });
    });
});

describe('Testes de Integração', () => {
    describe('POST /api/users/create', () => {
        it('Deve adicionar um novo Usuário', done => {
            const user = {
                id: 2,
                name: 'Teste',
                email: 'usuario@email.com',
                password: 'novouser'
            }
            request(app)
            .post('/api/users/create')
            .send(user)
            .end((error, res) => {
                expect(res.status).to.equal(HTTPStatus.OK);
                expect(res.body.payload.id).to.be.eql(user.id);
                expect(res.body.payload.name).to.be.eql(user.name);
                expect(res.body.payload.email).to.be.eql(user.email);
                done(error);
            })
        });
    });
});

describe('Testes de Integração', () => {
    describe('PUT /api/users/:id/update', () => {
        it('Deve atualizar um Usuário', done => {
            const user = {
                nome: 'TesteUpdate'
            }
            request(app)
            .put(`/api/users/${1}/update`)
            .send(user)
            .end((error, res) => {
                expect(res.status).to.equal(HTTPStatus.OK);
                done(error);
            })
        });
    });
});

describe('Testes de Integração', () => {
    describe('DELETE /api/users/:id/destroy', () => {
        it('Deve deletar um usuário', done => {
            request(app)
            .delete(`/api/users/${1}/destroy`)
            .end((error, res) => {
                expect(res.status).to.equal(HTTPStatus.OK);
                done(error);
            })
        });
    });
});