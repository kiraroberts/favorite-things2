$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var colorInput = $("input#color").val();
    var personInput = $("input#person").val();
    var animalInput = $("input#animal").val();
    var songInput = $("input#song").val();

    var favorites = [colorInput, personInput, animalInput, songInput];

  $("#story").show();
  $("#display").text(favorites);

  var arr2 = [];
  arr2.push(favorites[0], favorites[1], favorites[2], favorites[3]);
  $(".color").text(arr2[0]);
  $(".person").text(arr2[1]);
  $(".animal").text(arr2[2]);
  $(".song").text(arr2[3]);


    event.preventDefault();
  });
});
