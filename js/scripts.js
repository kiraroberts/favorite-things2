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
  $(".color").text("Your favorite color is " + arr2[0] + ".");
  $(".person").text("Your favorite person is " + arr2[1] + ".");
  $(".animal").text("Your favorite animal is " + arr2[2] + ".");
  $(".song").text("Your favorite song is " + arr2[3] + ".");


    event.preventDefault();
  });
});
