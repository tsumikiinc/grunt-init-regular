/* Directory */
module.exports = {
  src: 'src',
  build: 'build',

  {% if (sitePath) { %}root: '{%= sitePath %}',{% } else { %}root: 'root',{% } %}

  {% if (addMobileSite === 'true') { %}pc: 'pc', sp: 'sp',{% } %}

  {% if (stylesheetLang === 'sass') { %}sass: 'sass',{% } else if (stylesheetLang === 'stylus') { %}stylus: 'stylus',{% } %}

  {% if (jade === 'true') { %}jade: 'jade',{% } %}

  css: 'css',
  js: 'js',
  img: 'img'
};
