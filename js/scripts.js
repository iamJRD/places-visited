var Place = function(placeName,placeLocation,yearVisited) {
  this.placeName = placeName;
  this.placeLocation = placeLocation;
  this.yearVisited = yearVisited;
}

Place.prototype.locDate = function(){
  return this.placeName + " " + this.yearVisited;
}


$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedPlaceName = $('input#new-place-name').val();
    var inputtedPlaceLocation = $('input#location').val();
    var inputtedYearVisited = $('input#year-visited').val();
    var newPlace = new Place(inputtedPlaceName,inputtedPlaceLocation,inputtedYearVisited);

    $('ul#places').append('<li><span class="place">' + inputtedPlaceName + '</span></li>');

    $("input#new-place-name").val("");
    $("input#location").val("");
    $("input#year-visited").val("");

    $(".place").last().click(function() {
      $("#placeInfo").show();
      $("#placeInfo h2").text(newPlace.placeName);
      $(".place-location").text(newPlace.placeLocation);
      $(".year-visited").text(newPlace.yearVisited);
    });
  });
});
