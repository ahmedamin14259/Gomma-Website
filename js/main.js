$(document).ready(function(){
	var par_width = $('.jumbotron-fluid .container .lead').width();
	var head_width = $('.jumbotron-fluid .container h1').width();
	var win_width = $(window).width();
	$(par_width).width(win_width);
});