describe('1. Testing greeting function', function(){

  it('checks if it prints hello Cobus', function(){

    assert.equal(greet('Cobus'), 'Hello, Cobus');

  });
  it('checks if it prints hello Siya', function(){

    assert.equal(greet('Siya'), 'Hello, Siya');

  });
});
