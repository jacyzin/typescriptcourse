import { app, request, expect } from './config/helpers';

describe('Testes de Integração', () => {
    describe('GET /api/users/all', () => {
        it('Deve retornar um json com todos os Usuários', done => {
            request(app)
            .get('/api/users/all')
            .end((error, res) => {
                expect(res.status).to.equal(200);
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
                expect(res.status).to.equal(200);
            })
        });
    });
});

describe('Testes de Integração', () => {
    describe('POST /api/users/new', () => {
        it('Deve adicionar um novo Usuário', done => {
            const user = {
                nome: 'Teste'
            }
            request(app)
            .post('/api/users/new')
            .send(user)
            .end((error, res) => {
                expect(res.status).to.equal(200);
            })
        });
    });
});

describe('Testes de Integração', () => {
    describe('PUT /api/users/:id/edit', () => {
        it('Deve atualizar um Usuário', done => {
            const user = {
                nome: 'TesteUpdate'
            }
            request(app)
            .put(`/api/users/${1}/edit`)
            .send(user)
            .end((error, res) => {
                expect(res.status).to.equal(200);
            })
        });
    });
});

describe('Testes de Integração', () => {
    describe('DELETE /api/users/:id', () => {
        it('Deve deletar um usuário', done => {
            request(app)
            .put(`/api/users/${1}`)
            .end((error, res) => {
                expect(res.status).to.equal(200);
            })
        });
    });
});