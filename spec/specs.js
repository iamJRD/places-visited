describe("Place", function(){
  it("creates a new place with inputted properties", function() {
    var testPlace = new Place("Eiffel Tower","Paris","2015");
    expect(testPlace.placeName).to.equal("Eiffel Tower")
    expect(testPlace.placeLocation).to.equal("Paris")
    expect(testPlace.yearVisited).to.equal("2015")
  });

  it("creates a method that concats the place name and year visited", function(){
    var testPlace = new Place("Empire State Building","","2011");
    expect(testPlace.locDate()).to.equal("Empire State Building 2011");
  });
});
