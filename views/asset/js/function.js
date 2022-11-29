// #back-to-top
if ($('#back-to-top').length) {
    var scrollTrigger = 800, backToTop = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
            $('#back-to-top').addClass('show_backTop');
        } else {
            $('#back-to-top').removeClass('show_backTop');
        }
    };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) { e.preventDefault(); $('html,body').animate({ scrollTop: 0 }, 40); });
}

// slider ps host in Home page

$('.sliderHost').owlCarousel({
    loop: true,
    lazyLoadEager: 2,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 2000,
    autoplayHoverPause: true,
    stopOnHover: true,
    nav: false,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})

// slider sp new home page

$('.sliderNew').owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 2000,
    autoplayHoverPause: true,
    stopOnHover: true,
    nav: false,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})


// slider in feedback

$('.sliderFeedback').owlCarousel({
    loop: true,
    margin: 4,
    autoplay: true,
    autoplayTimeout: 8000,
    autoplaySpeed: 3000,
    stopOnHover: true,
    autoplayHoverPause: true,
    nav: false,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 4
        },
        1000: {
            items: 5
        }
    }
})

// slider in review

$('.sliderFeedback').owlCarousel({
    loop: false,
    margin: 4,
    autoplayHoverPause: true,
    nav: false,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})

// slider ps new in Home page


// close and open menu mobile
const tgmenu = document.getElementById('menu-mobile');
const toggleIc = document.getElementById('ic-open');

if (tgmenu) {
    $('#m-mobeli').click(function () {
        tgmenu.classList.toggle("active_nav");
        toggleIc.classList.toggle("fa-xmark");
    })
}

const listSubMenu = document.getElementsByClassName("open_menu_up2_mb");
for (let i = 0; i < listSubMenu.length; i++) {
    const item = listSubMenu[i];
    item.addEventListener("click", filterSubMenu);
    function filterSubMenu(){
      const listitem = document.getElementsByClassName("boxList_menu_mobile_up2");
      listitem[i].classList.toggle('show-sub-menu');
      item.classList.toggle('turn');
    }
}


// opent box search

const IconSearch = document.getElementsByClassName("iconSearch");
const ToolSearch = document.getElementById("tool_search");
const closeSearch = document.getElementById("iconClose");

for (let i = 0; i < IconSearch.length; i++) {
    const item = IconSearch[i];
    item.addEventListener("click", openSearch);
    function openSearch(){
        closeSearch.classList.toggle("fa-magnifying-glass");
        closeSearch.classList.toggle("fa-xmark");
        ToolSearch.classList.toggle("open_search");
    }
}


// btn uo size and donw size
$('input.input-qty').each(function() {
    var $this = $(this),
      qty = $this.parent().find('.is-form'),
      min = Number($this.attr('min')),
      max = Number($this.attr('max'))
    if (min == 0) {
      var d = 0
    } else d = min
    $(qty).on('click', function() {
      if ($(this).hasClass('minus')) {
        if (d > min) d += -1
      } else if ($(this).hasClass('plus')) {
        var x = Number($this.val()) + 1
        if (x <= max) d += 1
      }
      $this.attr('value', d).val(d)
    })
  })