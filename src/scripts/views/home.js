var tplHome = require('../templates/home.string');

SPA.defineView('home', {
  html: tplHome,
  plugins: ['delegated'],

  init: {
    mySwiper: null
  },
  bindEvents: {
    'show': function () {
      this.mySwiper = new Swiper('#home-swiper', {
        loop: false,
        pagination: '.swiper-pagination'
      });
    }
  }

});
