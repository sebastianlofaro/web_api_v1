var cardsHTML;
var hand;
function drawSixCards() {
  var deckOfCardsAPI = "https://deckofcardsapi.com/api/deck/new/draw/?count=6"
  function displayCards(data) {
    hand = data;
    var cardsHTML = '<ul class="hand">';
    $.each(data.cards, function(key, value) {
      cardsHTML += '<li class="card"><a href="#" id=""><img src="' + value.image + '" alt="" /></a></li>';
    });
    cardsHTML += '</ul>'
    $("#cards").html(cardsHTML);
  }
  $.getJSON(deckOfCardsAPI, displayCards);
};

$(document).ready(function(){
  drawSixCards();
  
  $(".card").on('click', function() {
    console.log("card clicked");
  });

  $("#new_hand").on('click', function() {
    drawSixCards();
    console.log("Button clicked!");
  });
});



// $(".test").on('click', function() {
//   console.log("card clicked");
// });
