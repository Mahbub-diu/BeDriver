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
      function calculatePositions() {
        $(parentSelector).each(function () {
          let $parent = $(this);

          let currentBackground = $parent.css('background-image');
          $parent.data('previous-bg', currentBackground);

          $parent.find(childSelector).each(function () {
            let $child = $(this);
            let $pTag = $child.find('p');
            let adjustedHeight = $pTag.height();
            let pHeight = adjustedHeight + 20;
            let $h3Tag = $child.find('h3');
            let $contentBox = $child.find('.content-box');
            let paddingBottom =
              parseInt($contentBox.css('padding-bottom'), 10) || 0;
            $pTag.css('top', pHeight + paddingBottom + 'px');
            $h3Tag.css('top', pHeight + 'px');
          });
        });
      }

      calculatePositions();

      $(parentSelector).each(function () {
        let $parent = $(this);

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

      let resizeTimer;
      $(window).on('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          calculatePositions();
        }, 100);
      });
    }

    // Call the function
    setupHoverImage('.hover-image-parent', '.single-box');

    // dynamic hover bg change end
    var swiper = new Swiper('.highlight-slider', {
      slidesPerView: 5,
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
          slidesPerView: 1,
          spaceBetween: 10,
        },
        360: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        375: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        414: {
          slidesPerView: 1,
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
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1300: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      },
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

    const current_url = window.location.href;
    if (current_url.includes('azienda')) {
      animateText('.azienda-slider-main .centerd h1', 0.2);
    }
    var swiper = new Swiper('.logoslider', {
      slidesPerView: 8,
      spaceBetween: 20,
      slidesPerGroup: 1,
      loop: true,
      autoplay: true,
      autoplay: {
        delay: 2000,
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        360: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        375: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        414: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        415: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        576: {
          slidesPerView: 3,
          spaceBetween: 15,
        },

        767: {
          slidesPerView: 5,
          spaceBetween: 20,
        },

        992: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
        1300: {
          slidesPerView: 7,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 8,
          spaceBetween: 20,
        },
      },
    });
    $(document).ready(function () {
      // Countdown values
      let days = 8,
        hours = 21,
        minutes = 46,
        seconds = 50;

      function updateTimer() {
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          seconds = 59;
          minutes--;
        } else if (hours > 0) {
          seconds = 59;
          minutes = 59;
          hours--;
        } else if (days > 0) {
          seconds = 59;
          minutes = 59;
          hours = 23;
          days--;
        }

        // Update DOM with animations
        $('.count1')
          .eq(0)
          .text(days)
          .css('transform', 'scale(1.2)')
          .animate({ transform: 'scale(1)' }, 300);
        $('.count1')
          .eq(1)
          .text(hours)
          .css('transform', 'scale(1.2)')
          .animate({ transform: 'scale(1)' }, 300);
        $('.count1')
          .eq(2)
          .text(minutes)
          .css('transform', 'scale(1.2)')
          .animate({ transform: 'scale(1)' }, 300);
        $('.count1')
          .eq(3)
          .text(seconds)
          .css('transform', 'scale(1.2)')
          .animate({ transform: 'scale(1)' }, 300);
      }

      // Call updateTimer every second
      setInterval(updateTimer, 1000);
    });

    var swiper = new Swiper('.compionti-slider', {
      slidesPerView: 3,
      spaceBetween: 0,
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
          slidesPerView: 1,
          spaceBetween: 20,
        },
        360: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        375: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        414: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        415: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 20,
        },

        767: {
          slidesPerView: 2,
          spaceBetween: 2,
        },

        992: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1300: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });

    var $ul = $('.calendar-wrapper > ul');

    $ul.find('li > a').click(function (e) {
      if (!$(this).closest('li').hasClass('selected--last')) {
        e.preventDefault();
      }

      var $li = $(this).closest('li');

      if ($li.find('ul').length > 0) {
        if ($li.hasClass('selected')) {
          $li.removeClass('selected').find('li').removeClass('selected');
          $li.find('ul').slideUp(400);
          $li.find('a span').removeClass('mdi-flip-v');
        } else {
          if ($li.parents('li.selected').length == 0) {
            $ul.find('li').removeClass('selected');
            $ul.find('ul').slideUp(400);
            $ul.find('li a span').removeClass('mdi-flip-v');
          } else {
            $li.parent().find('li').removeClass('selected');
            $li.parent().find('> li ul').slideUp(400);
            $li.parent().find('> li a span').removeClass('mdi-flip-v');
          }

          $li.addClass('selected');
          $li.find('>ul').slideDown(400);
          $li.find('>a>span').addClass('mdi-flip-v');
        }
      }
    });

    $('.calendar-wrapper > ul ul').each(function (i) {
      if ($(this).find('>li>ul').length > 0) {
        var paddingLeft = $(this)
          .parent()
          .parent()
          .find('>li>a')
          .css('padding-left');
        var pIntPLeft = parseInt(paddingLeft);
        var result = pIntPLeft + 0;

        $(this).find('>li>a').css('padding-left', result);
      } else {
        var paddingLeft = $(this)
          .parent()
          .parent()
          .find('>li>a')
          .css('padding-left');
        var pIntPLeft = parseInt(paddingLeft);
        var result = pIntPLeft + 0;

        $(this)
          .find('>li>a')
          .css('padding-left', result)
          .parent()
          .addClass('selected--last');
      }
    });

    var activeLi = $('li.selected');
    if (activeLi.length) {
      opener(activeLi);
    }

    function opener(li) {
      var ul = li.closest('ul');
      if (ul.length) {
        li.addClass('selected');
        ul.addClass('open');
        li.find('>a>span').addClass('mdi-flip-v');

        if (ul.closest('li').length) {
          opener(ul.closest('li'));
        } else {
          return false;
        }
      }
    }
    var swiper = new Swiper('.season-slider', {
      slidesPerView: 2,
      grid: {
        rows: 3,
      },

      loop: true,
      autoplay: {
        delay: 3000,
      },
      spaceBetween: 15,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          // For small screens like mobile
          slidesPerView: 1,
          grid: {
            rows: 1,
          },
          spaceBetween: 10,
        },
        576: {
          slidesPerView: 1,
          grid: {
            rows: 2,
          },
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 1,
          grid: {
            rows: 2,
          },
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 1,
          grid: {
            rows: 2,
          },
        },
        1366: {
          slidesPerView: 2,
          grid: {
            rows: 2,
          },
        },
        1441: {
          slidesPerView: 2,
          grid: {
            rows: 3,
          },
          spaceBetween: 15,
        },
      },
    });
  });
})(jQuery);
