var mySwiper = new Swiper('.swiper-1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

  })

  var mySwiper = new Swiper('.swiper-2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  })

  var mySwiper = new Swiper('.swiper-3', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    disableOnInteraction: true,
    autoplay: {
        delay: 2000,
      },
  })

  var mySwiper = new Swiper('.swiper-4', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
      },
  })

  var mySwiper = new Swiper('.swiper-5', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    breakpoints: {
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 780px
        780: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 1000px
        1000: {
          slidesPerView: 4,
          spaceBetween: 30
        },
        // when window width is >= 1200px
        1200: {
            slidesPerView: 5,
            spaceBetween: 30
        },
      }
  })

  var mySwiper = new Swiper('.swiper-6', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: "flip",
  })