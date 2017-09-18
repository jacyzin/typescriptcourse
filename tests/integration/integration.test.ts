import { app, request, expect } from './config/helpers';
import * as HTTPStatus from 'http-status';

describe('Testes de Integração', () => {

    describe('GET /api/users/all', () => {
        it('Deve retornar um json com todos os Usuários', done => {
            request(app)
            .get('/api/users/all')
            .end((error, res) => {
                expect(res.status).to.equal(HTTPStatus.OK);
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
                nome: 'Teste'
            }
            request(app)
            .post('/api/users/create')
            .send(user)
            .end((error, res) => {
                expect(res.status).to.equal(HTTPStatus.OK);
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