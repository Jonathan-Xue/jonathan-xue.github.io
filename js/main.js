(function($) {

	"use strict";

	$(function() {

		var $window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$banner = $('#banner');

		// Disable animations/transitions until the page has loaded.
		$body.addClass('preload');
		$window.on('load', function() {
			$body.removeClass('preload');
		});

		// Header
		if ($banner.length > 0 &&
			$header.hasClass('alt')) {

			$window.on('resize', function() {
				$window.trigger('scroll');
			});

			$banner.scrollex({
				bottom: $header.outerHeight(),
				terminate: function() {
					$header.removeClass('alt');
				},
				enter: function() {
					$header.addClass('alt');
				},
				leave: function() {
					$header.removeClass('alt');
				}
			});
		}

		// Smooth Scrolling
		$('a[href*="#"]')
			.not('[href="#"]')
			.not('[href="#0"]')
			.click(function(event) {
				if (
					location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
					location.hostname == this.hostname
				) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
					if (target.length) {
						event.preventDefault();
						$('html, body').animate({
							scrollTop: target.offset().top
						}, 1000, function() {
							var $target = $(target);
							$target.focus();
							/*if ($target.is(":focus")) {
								return false;
							} else {
								$target.attr('tabindex', '-1');
								$target.focus();
							};*/
						});
					}
				}
			});
	});
})(jQuery);