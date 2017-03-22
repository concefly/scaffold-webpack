
const {expect} = require('chai');
const api = require('../../src/index');

describe('no-browser sample test', () => {

  describe('add', () => {
    it('1+1=2', done => {
      expect(api.add(1, 1)).to.be.equal(2);
      done();
    });
  })
  
})