"use strict";function preventDefault(e){e.preventDefault()}!function(){var e=$(".menu__btn"),n=$(".menu__btn--close"),s=$(".nav__menu");$(e).on("click",(function(){s.toggleClass("show-menu"),e.addClass("display-none"),n.addClass("display-block"),$("body").addClass("body-menu-open")})),$(n).on("click",(function(){s.toggleClass("show-menu"),e.removeClass("display-none"),n.removeClass("display-block"),$("body").addClass("body-menu-open")}))}(jQuery),jQuery,$(".btn--see-all").on("click",(function(){$(this).nextAll().slideToggle("slow"),"SEE ALL"===$(this).text()?$(this).text("SEE LESS"):"SEE LESS"===$(this).text()&&$(this).text("SEE ALL")}));