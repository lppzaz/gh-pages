describe("11.Checks reg number",function(){

  it("identifies area of plate is CY",function(){
      assert.equal(fromWhere('CY'), 'Bellville');
  });

  it("identifies area of plate is from CJ",function(){
    assert.equal(fromWhere('CJ'), 'Paarl');
  });

  it("identifies area of plate is from CA",function(){
  assert.equal(fromWhere('CA'), 'Cape Town');
  });

  it("identifies area of plate is from some other place",function(){
  assert.equal(fromWhere('CB'), 'Some other place!');
  });

});
