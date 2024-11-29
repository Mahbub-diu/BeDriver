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
  });
})(jQuery);
