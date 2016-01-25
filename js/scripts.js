var Place = function(placeName,placeLocation,yearVisited,imageLocation) {
  this.placeName = placeName;
  this.placeLocation = placeLocation;
  this.yearVisited = yearVisited;
  this.imageLocation = imageLocation;
}


// DID NOT USE
// Place.prototype.locDate = function(){
//   return this.placeName + " " + this.yearVisited;
// }


$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedPlaceName = $('input#new-place-name').val();
    var inputtedPlaceLocation = $('input#location').val();
    var inputtedYearVisited = $('input#year-visited').val();
    var inputtedImageLocation = $('input#image').val();
    var newPlace = new Place(inputtedPlaceName,inputtedPlaceLocation,inputtedYearVisited,inputtedImageLocation);

    $('ul#places').append('<li><span class="place">' + inputtedPlaceName + '</span></li>');

    $("input#new-place-name").val("");
    $("input#location").val("");
    $("input#year-visited").val("");
    $("input#image").val("");

    $(".place").last().click(function() {
      // $(".imageURL").empty();  //didn't work with append. used '.html' instead
      $("#placeInfo").show();
      $("#placeInfo h2").text(newPlace.placeName);
      $(".place-location").text(newPlace.placeLocation);
      $(".year-visited").text(newPlace.yearVisited);
      $(".imageURL").html("<img src=" + newPlace.imageLocation + " width=100% >" );

    });
  });
});
