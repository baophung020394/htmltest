/** Init global the app variable **/
if (typeof App === "undefined") var App = {};
$(document).ready(() => {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
      $(
        ".home .header__menu.scroll-menu .header__menu--mainmenu.menu-desk"
      ).css("display", "none");
    } else {
      $(
        ".home .header__menu.scroll-menu .header__menu--mainmenu.menu-desk"
      ).css("display", "flex");
    }
  });
  // Carousel
  $(".carousel-home").owlCarousel({
    loop: true,
    responsiveClass: true,
    dots: true,
    nav: false,
    dotsEach: 1,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1024: {
        items: 1,
        margin: 0,
      },
    },
  });

  $(".carousel-information").owlCarousel({
    loop: true,
    responsiveClass: true,
    dots: true,
    nav: false,
    dotsEach: 1,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1024: {
        items: 1,
        margin: 0,
      },
    },
  });

  $(".header__menu--mainmenu .button-close").on("click", function () {
    $("body .header__menu--mid .header__menu--mainmenu").removeClass("active");
  });
  $("ul.hamburger").click(function () {
    $(this).toggleClass("active");
    $(
      "body .header__menu--mid .header__menu--mainmenu.menu-mobile"
    ).toggleClass("active");
  });

  $(document).on("scroll", onScroll);

  //smoothscroll
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $("a").each(function () {
      $(this).removeClass("active");
    });
    $(this).addClass("active");

    var target = this.hash,
      menu = target;
    $target = $(target);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top + 2,
        },
        500,
        "swing",
        function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
        }
      );
  });
});

function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $("#menu a").each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (
      refElement.position().top <= scrollPos &&
      refElement.position().top + refElement.height() > scrollPos
    ) {
      $("#menu li a").removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}
