var cardsHTML;
var hand;
function drawSixCards() {
  var deckOfCardsAPI = "https://deckofcardsapi.com/api/deck/new/draw/?count=6"
  function displayCards(data) {
    hand = data;
    var cardsHTML = '<ul class="hand">';
    $.each(data.cards, function(key, value) {
      cardsHTML += '<li class="card" id="' + key + '"><img src="' + value.image + '" alt="" /></li>';
    });
    cardsHTML += '</ul>'
    $("#cards").html(cardsHTML);
  }
  $.getJSON(deckOfCardsAPI, displayCards);
};

$("#new_hand").on('click', function() {
  drawSixCards();
  console.log("Button clicked!");
});

$("#cards").on('click', '.card', function() {
  var cardNumber = $(this).attr("id");

  $(".lightbox img").attr("src", hand.cards[cardNumber].image)
  $(".lightbox h2").text(hand.cards[cardNumber].value + " of " + hand.cards[cardNumber].suit);
  $(".lightbox").removeClass("hidden");

});


$(document).ready(function(){
  drawSixCards();

  $(".lightbox").on('click', function() {
    $(".lightbox").addClass("hidden");
  });
});





// $(".test").on('click', function() {
//   console.log("card clicked");
// });
