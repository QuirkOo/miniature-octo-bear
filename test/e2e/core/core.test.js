
describe('the truth', function() {
  it('should be true', function() {
    expect(2+2).toEqual(4);
  });
});

describe('homepage', function() {
  it('should have a title', function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual('OctoBear');
  });
});