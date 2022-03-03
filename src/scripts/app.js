//Navigation open/close
(function() {
    const menuBtn = $(".menu__btn");
    const btnClose = $(".menu__btn--close");
    const menu = $(".nav__menu");

    $(menuBtn).on("click", function() {
        menu.toggleClass("show-menu");
        menuBtn.addClass("display-none");
        btnClose.addClass("display-block");

        //Prevent user from scrolling when menu is open
        $("body").addClass("body-menu-open");
    });

    $(btnClose).on("click", function() {
        menu.toggleClass("show-menu");
        menuBtn.removeClass("display-none");
        btnClose.removeClass("display-block");

        //Allow user to scroll when menu is closed again
        $("body").addClass("body-menu-open");
    });
})(jQuery);

//Gallery open/close
(function() {
    $(".btn--see-all").on("click", function() {
        $(this).nextAll().slideToggle("slow");

        if ($(this).text() === "SEE ALL") {
            $(this).text("SEE LESS");
        } else if ($(this).text() === "SEE LESS") {
            $(this).text("SEE ALL");
        }
    });
})(jQuery);

// Disable/enable scroll functions for mobile menu
function preventDefault(e) {
    e.preventDefault();
}