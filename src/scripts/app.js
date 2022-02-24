(function () {
	$(".btn--see-all").on("click", function () {
		$(this).nextAll().slideToggle("slow");

		if ($(this).text() === "SEE ALL") {
			$(this).text("SEE LESS");
		} else if ($(this).text() === "SEE LESS") {
			$(this).text("SEE ALL");
		}
	});
})(jQuery);

(function () {
	const menuBtn = $(".menu__btn");
	const menu = menuBtn.siblings(".menu__box");

	$(menuBtn).on("click", function () {
		menu.toggleClass("menu__box--show");
	});
})(jQuery);
