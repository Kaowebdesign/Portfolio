$( document ).ready(function() {
	$(window).scroll(function(){
		if ( $(document).scrollTop() > 550 ) {
			$('#fa-menu').css({
				'color': '#87a77b'
			});
		} else {
			$('#fa-menu').css({
				'color': '#ffffff'
			});
		}
	});
});