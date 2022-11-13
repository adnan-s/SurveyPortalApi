const expect = require('chai').expect;
const assert = require('chai').assert;
const util = require('util');
const should = require('chai').should();
const supertest = require('supertest');
const app = require('../src/server');

const request = supertest(app);

describe("FAQ API:", () => {
    it("should bring a list of FAQs", (done) => {
        request.get('/faq')
        .expect(200)
        .end((err,res) => {
                expect(res.body).to.have.lengthOf(2);
                expect(res.statusCode).to.equal(200);
                done(err);
        });
    });

})
