//navbar fix
$(window).scroll(function() {
	if($(this).scrollTop() > 50) {
		$('.dc-navbar-custom').addClass('dc-navbar-fixed');
	} else {
		$('.dc-navbar-custom').removeClass('dc-navbar-fixed');
	}
});
