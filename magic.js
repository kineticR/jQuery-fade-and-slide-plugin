$(document).ready(function() {

	//defining our variables in the root of the code and updating those variables every time we scroll
	var windowHeight = $(window).height();
	var windowScrollPosTop = $(window).scrollTop();
	var windowScrollPosBot = windowHeight + windowScrollPosTop;

	// so the red extends to the bottom of the browser window
	if ($(window).height() > 510) {
		$("#top_block").css("height", $(window).height());
	};


	// this is how you make a jQuery plugin/method   $.fn.nameOfPlugin
	$.fn.revealOnScroll = function(direction) {
		return this.each(function() {

			var objectOffset = $(this).offset();
			var objectOffsetTop = objectOffset.top;

			if (!$(this).hasClass('hidden')) {
				if (direction == "right") {
					$(this).css({
						"opacity"	: 0,
						"right" 	:"400px"
					});
				} else {
					$(this).css({
						"opacity"	: 0,
						"right" 	:"-400px"
					});
				}
				$(this).addClass("hidden");
			}


			if (!$(this).hasClass("animation-complete")) {

				if (windowScrollPosBot > objectOffsetTop) {
					$(this).animate({
						"opacity"	: 1,
						"right"		: 0},
						500).addClass("animation-complete");
				}
			}

		});
	}




	$(window).scroll(function() {
		windowHeight = $(window).height();
		windowScrollPosTop = $(window).scrollTop();
		windowScrollPosBot = windowHeight + windowScrollPosTop;

		$("#first").revealOnScroll("right");
		$("#1").revealOnScroll("left");
		$("#second").revealOnScroll("left");
		$("#2").revealOnScroll("right");
		$("#third").revealOnScroll("right");
		$("#3").revealOnScroll("left");
		$("#fourth").revealOnScroll("left");
		$("#4").revealOnScroll("right");
		$("#fifth").revealOnScroll("right");
		$("#5").revealOnScroll("left");
		$("#sixth").revealOnScroll("left");
		$("#6").revealOnScroll("right");

		$(".member_description").revealOnScroll();

	});


});