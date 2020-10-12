jQuery(function ($) {
	'use strict';

    // Start Menu JS
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 50) {
			$('.main-nav').addClass('menu-shrink');
		} else {
			$('.main-nav').removeClass('menu-shrink');
		}
    });	
    
	// Mean Menu JS
	// jQuery('.mean-menu').meanmenu({
    //     meanScreenWidth: "991"
	// });	

	// $.ajax({
	// 	url:'../../pages/commonPages/header.html',
	// 	success: function(result){
	// 		$('#customHeader').html(result);
	// 	}
	// });


}(jQuery));







