var request = require('request');


describe('get requests', () => {
  it('check if a listing is received in desired format', (done) => {
    request('http://localhost:3000/api/listings/2', function (error, response, body) {
      if (error) {
        done(error);
      } else {
        var expectedObj = {'id': 2, 'name': 'Fatimafurt'};
        expect(body).toBe(JSON.stringify(expectedObj));
        done();
      }
    });
  });
});
