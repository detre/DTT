"use strict";
(function($) {
	$('.dream-default').click(function() {
		$('.edit-dream-modal-overlay').addClass('toggled');
		$('.edit-dream-modal').addClass('toggled');
	});
	$('.exit-dream-holder').click(function() {
		$('.edit-dream-modal-overlay').addClass('toggled');
		$('.edit-dream-modal').addClass('toggled');
	});
	$('.edit-dream-exit').click(function() {
		$('.edit-dream-modal').removeClass('toggled');
		$('.edit-dream-modal-overlay').removeClass('toggled');
	});
	$('.edit-dream-modal-footer button').click(function() {
		$('.edit-dream-modal').removeClass('toggled');
		$('.edit-dream-modal-overlay').removeClass('toggled');
	});
})(jQuery);
