var Place = function(placeName,placeLocation,yearVisited) {
  this.placeName = placeName;
  this.placeLocation = placeLocation;
  this.yearVisited = yearVisited;
}

Place.prototype.locDate = function(){
  return this.placeName + " " + this.yearVisited;
}
