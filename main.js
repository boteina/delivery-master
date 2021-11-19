$('.menu-toggle').click(function(){
    $(".nav").toggleClass("mobile-nav");
    $(this).toggleClass("is-active");
 });


function getSelectValue() {
	// body...
	var selectedValue = document.getElementById("btnWilaya").value;
	console.log(selectedValue);
}