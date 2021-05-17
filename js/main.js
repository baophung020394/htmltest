/** Init global the app variable **/
if (typeof App === "undefined") var App = {};
$(document).ready(() => {
  $(window).scroll(function () {
    var footerTop = $(".footer").height();
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

    if ($(document).width() < 767) {
      console.log("cc");
      if ($(window).scrollTop() > 4500) {
        $("#menu").addClass("hidden");
      } else {
        $("#menu").removeClass("hidden");
      }
    } else if ($(document).width() < 1023) {
      if ($(window).scrollTop() > 2500) {
        $("#menu").addClass("hidden");
      } else {
        $("#menu").removeClass("hidden");
      }
    } else {
      if ($(window).scrollTop() > 3700) {
        $("#menu").addClass("hidden");
      } else {
        $("#menu").removeClass("hidden");
      }
    }
  });

  if ($(document).width() < 767) {
    console.log("cc");
    if ($(window).scrollTop() > 4500) {
      $("#menu").addClass("hidden");
    } else {
      $("#menu").removeClass("hidden");
    }
  } else if ($(document).width() < 1023) {
    if ($(window).scrollTop() > 2500) {
      $("#menu").addClass("hidden");
    } else {
      $("#menu").removeClass("hidden");
    }
  } else {
    if ($(window).scrollTop() > 3700) {
      $("#menu").addClass("hidden");
    } else {
      $("#menu").removeClass("hidden");
    }
  }
  $("#home-beer .beer .beer__container .bg-beer .img-main").removeClass(
    "animation-lacbia"
  );
  $("#home-beer .beer .beer__container .bg-beer").mouseover(function () {
    $(this).find(".img-main").removeClass("animation-lacbia");
    $("#home-beer .beer .beer__container .bg-beer .img-main").removeClass(
      "animation-lacbia"
    );
  });
  $("#home-beer .beer .beer__container .bg-beer").mouseleave(function () {
    $(this).find(".img-main").addClass("animation-lacbia");
  });
  // Carousel
  $(".carousel-home").owlCarousel({
    loop: true,
    responsiveClass: true,
    dots: true,
    nav: false,
    dotsEach: 1,
    autoplayTimeout: 5000,
    autoplay: true,
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
    autoplayTimeout: 5000,
    autoplay: true,
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
  // $('a[href^="#"]').on("click", function (e) {
  //   e.preventDefault();
  //   $(document).off("scroll");

  //   $("a").each(function () {
  //     $(this).removeClass("active");
  //   });
  //   $(this).addClass("active");

  //   var target = this.hash,
  //     menu = target;
  //   $target = $(target);
  //   $("html, body")
  //     .stop()
  //     .animate(
  //       {
  //         scrollTop: $target.offset().top + 2,
  //       },
  //       500,
  //       "swing",
  //       function () {
  //         window.location.hash = target;
  //         $(document).on("scroll", onScroll);
  //       }
  //     );
  // });

  // $(window).on("load", function () {
  //   setTimeout(function(){ $("#subscribe").modal("show"); }, 3000);
  //   setTimeout(function(){ $("#form-18").modal("show"); }, 3000);

  // });
  $("#subscribe .btn-close").on("click", function () {
    $("#subscribe").modal("hide");
  });
  $("#form-18 .btn-close").on("click", function () {
    $("#form-18").modal("hide");
  });
  $("#form-18 .group-button .btn-yes").on("click", function () {
    $("#form-18").modal("hide");
  });
  $("#form-18 .group-button .btn-no").on("click", function () {
    $("#form-18").modal("hide");
  });

  // Menu mobile Click
  $("header .header__menu--mid .header__menu--mainmenu.menu-mobile li.header__menu--item a.dropdown").on("click", function (e) {
    $(this).find('~.submenu').slideToggle(250);
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
