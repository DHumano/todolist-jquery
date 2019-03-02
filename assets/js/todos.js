$("ul").on("click","li",function(){
	$(this).toggleClass('completed');
	
	// if ($(this).css("color")==="rgb(128, 128, 128)") {
	// 	$(this).css({
	// 	color:"black",
	// 	textDecoration:"none"
	// });
	// }

	// else{
	// $(this).css({
	// 	color:"gray",
	// 	textDecoration:"line-through"
	// });
	// }
});


$("ul").on("click","span",function(e){
$(this).parent().fadeOut(500,function(){ //e.target si lo uso, solo borra el tachito
	$(this).remove();
});
e.stopPropagation();


});

$("input[type='text']").keypress(function(e){
	if (e.which===13) {

	var todoText=$(this).val();
	$(this).val("");
	$("ul").append("<li> <span><i class='far fa-trash-alt'></i></span> "+todoText+"</li>")

}


});

$(".fa-plus").on("click",function(){
$("input[type='text']").fadeToggle(300);

});