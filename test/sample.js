
const {expect} = require('chai');

describe('sample test', () => {

  it('1+1=2', done => {
    expect(1+1).to.be.equal(2);
    done();
  });

  it('window should be exist', done => {
    expect(window.navigator.vendor).to.be.a('string');
    done();
  })

})