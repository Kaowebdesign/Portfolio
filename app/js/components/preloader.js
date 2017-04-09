$(document).ready(function() {
	var background=$('#menus');
	$('.menu-table').css({
		'display': 'flex'
	});
	background.hide();
	$(window).on('load', function () {
	    $preloader = $('.loaderArea'),
	      $loader = $preloader.find('.loader');
	    $loader.fadeOut();
	    $preloader.delay(300).fadeOut('slow');
	  });
});
