describe("2. Is the vehicle from bellville?",function(){
  it("reurns true if object is true",function(){
    assert.equal(isFromBellville("CY 2345 GP"),true);
  });
  it("returns false if object is false",function(){
    assert.equal(isFromBellville("CN 2345 GP"),false);
  });
});
