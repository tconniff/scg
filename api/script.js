$(document).ready(function(){

function showCard(evt){
	$id = $(this).attr("id");
	$(this).siblings("img").attr("src","../cards/" + $id + ".png");
	$(this).siblings("img").toggleClass("is-visible");
}

$(".cards-list > div").on("mouseover mouseout", showCard);

});