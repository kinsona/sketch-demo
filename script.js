$(document).ready(function(){
	makeDiv(16);
	
	$('.clearButton').click(function(){
		clear();
	});
});

function makeDiv(input) {
	for(i=0;i<input;i++) {
		$('.container').append('<div class="box">')
	};
	$('.box').hover(function(){
		r = Math.floor(Math.random()*256);
		g = Math.floor(Math.random()*256);
		b = Math.floor(Math.random()*256);
		$(this).css({"background-color":"rgb("+r+","+g+","+b+")"});
	});
};

function clear() {
	$('.box').remove();
	newSize = prompt("How many blocks per side in the new grid?");
	makeDiv(newSize*newSize);
	$('.box').css({"background-color":"#B0FFFF"});
	$('.box').width(400/newSize + "px");
	$('.box').height(400/newSize + "px");
}

