const request = require('supertest');
const app = require('../HolaMundo');
describe('GET /', () => {
    it('responde con Mi Primer Commit!', done => {
        request(app)
            .get('/')
            .expect('Mi Primer Commit!', done);
    });
});