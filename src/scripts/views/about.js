var tplAbout = require('../templates/about.string');

SPA.defineView('about', {
  html: tplAbout,
  plugins: ['delegated']


});
