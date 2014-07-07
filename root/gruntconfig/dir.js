/* Directory */
module.exports = {
  src: 'src',
  build: 'build',
  {% if (sitePath) { %}root: '{%= sitePath %}',{% } else { %}root: 'root',{% } %}

  pc: 'pc',
  sp: 'sp',
  
  sass: 'sass',
  stylus: 'stylus',
  jade: 'jade',
  css: 'css',
  js: 'js',
  img: 'img'
};
