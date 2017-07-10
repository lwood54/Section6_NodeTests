const request = require('supertest');
const expect = require('expect');

var app = require('./server.js').app;

// Server
describe('Server', () => {
    describe('get home route', () => {
        it('should return hello world response', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found.'
                    });
                })
                .end(done);
        });
    });

    describe('get /users route', () => {
        it('should return a user Logan Wood, age 35', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Logan',
                        age: 35
                    });
                })
                .end(done);
        });
    });
});
