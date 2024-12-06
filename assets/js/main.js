(function ($) {
  $(document).ready(function () {
    // code goes here

    // home page slider start
    var swiper = new Swiper('.home-slider', {
      effect: 'fade',
      speed: 2000,

      autoplay: {
        delay: 5000,
      },
      autoplay: true,

      loop: true,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    $('.swiper-video').on('loadeddata', function () {
      var duration = this.duration;

      var autoplayDelay = Math.round(duration * 1000);

      $(this)
        .closest('.video-slide')
        .attr('data-swiper-autoplay', autoplayDelay);

      console.log('Video Duration: ' + duration + ' seconds');
    });
    // home page slider end

    function counterUp() {
      var elementSelector = $('.count');
      elementSelector.each(function () {
        $(this).appear(function () {
          var el = this;
          var updateData = $(el).attr('data-count');
          var od = new Odometer({
            el: el,
            format: ',ddd',
            duration: 2000,
          });
          od.update(updateData);
        });
      });
    }
    counterUp();

    // header custom switch for sound start
    $('.custom-switch').each(function (i) {
      var classes = $(this).attr('class'),
        id = $(this).attr('id'),
        name = $(this).attr('name');

      $(this).wrap('<div class="custom-switch" id="' + name + '"></div>');
      $(this).after('<label for="custom-switch-' + i + '"></label>');
      $(this).attr('id', 'custom-switch-' + i);
      $(this).attr('name', name);
    });

    $('.custom-switch input').change(function () {
      var isChecked = $(this).is(':checked');

      $('.swiper-video').each(function () {
        this.muted = !isChecked;
      });
    });

    // header custom switch for sound end

    // header sticky start
    $(window).scroll(function () {
      var navbar = $('#main-header');

      if ($(window).scrollTop() >= 110) {
        navbar.addClass('sticky');
      } else {
        navbar.removeClass('sticky');
      }
    });
    // header sticky start

    $('.main-header .openButton').click(function () {
      $('#sidebar-main').removeClass('sidebar-hide');
    });

    $('#sidebar-main .sidebar-close-btn').click(function () {
      $('#sidebar-main').addClass('sidebar-hide');
    });

    function animateText(selector, delay = 0.1) {
      const $element = $(selector);
      const htmlContent = $element.html();
      $element.empty();

      let index = 0;

      htmlContent.split(/(<[^>]+>| )/g).forEach((fragment) => {
        if (fragment.startsWith('<')) {
          $element.append(fragment);
        } else if (fragment === ' ') {
          const $space = $('<span>&nbsp;</span>');
          $space.css('animation-delay', `${index * delay}s`);
          $element.append($space);
          index++;
        } else {
          fragment.split('').forEach((char) => {
            const $span = $('<span></span>').text(char);
            $span.css('animation-delay', `${index * delay}s`);
            $element.append($span);
            index++;
          });
        }
      });
    }

    // animateText('.azienda-slider-main .centerd h1', 0.2);

    var swiper = new Swiper('.leader-slider', {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 1,
      loop: true,
      autoplay: true,
      autoplay: {
        delay: 2000,
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        360: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        375: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        414: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        415: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 10,
        },

        767: {
          slidesPerView: 3,
          spaceBetween: 20,
        },

        992: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1300: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
    var swiper = new Swiper('.ohibo-slider', {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 1,
      loop: true,
      autoplay: true,
      autoplay: {
        delay: 2000,
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        360: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        375: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        414: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        415: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 10,
        },

        767: {
          slidesPerView: 3,
          spaceBetween: 20,
        },

        992: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1300: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });

    // Background image area start here
    $('[data-background]').each(function () {
      var bgImage = $(this).attr('data-background');
      if (bgImage) {
        $(this).css({
          'background-image': 'url(' + bgImage + ')',
          'background-size': 'cover',
          'background-position': 'center center',
          'background-repeat': 'no-repeat',
        });
      }
    });

    // Background image area end here

    // dynamic hover bg change start

    function setupHoverImage(parentSelector, childSelector) {
      $(parentSelector).each(function () {
        let $parent = $(this);

        let currentBackground = $parent.css('background-image');
        $parent.data('previous-bg', currentBackground);

        $parent.find(childSelector).hover(
          function () {
            let newBackground = $(this).data('bg');

            if (newBackground) {
              $parent.css('opacity', 0.4);
              setTimeout(() => {
                $parent.attr('data-background', newBackground).css({
                  'background-image': 'url(' + newBackground + ')',
                  opacity: 1,
                });
              }, 150);
            }
          },
          function () {
            let previousBackground = $parent.data('previous-bg');
            let currentChildBackground = $(this).data('bg');

            if (currentChildBackground) {
              $parent.css('opacity', 0.4);
              setTimeout(() => {
                $parent.attr('data-background', previousBackground).css({
                  'background-image': previousBackground,
                  opacity: 1,
                });
              }, 150);
            }
          }
        );
      });
    }

    // Initialize for all instances with dynamic child selectors
    setupHoverImage('.hover-image-parent', '.single-box');

    // dynamic hover bg change end
  });
})(jQuery);
