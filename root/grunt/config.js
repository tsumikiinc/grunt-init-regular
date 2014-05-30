/* config.js */
module.exports = {
  dir: require('./module/dir'),

  'html-validation': require('./module/html-validation'),
  clean: require('./module/clean'),
  csslint: require('./module/csslint'),
  connect: require('./module/connect'),
  cssmin: require('./module/cssmin'),
  watch: require('./module/watch'),
  jshint: require('./module/jshint'),
  sass: require('./module/sass'),
  copy: require('./module/copy'),
  imagemin: require('./module/imagemin'),
  uglify: require('./module/uglify'),
  styleguide: require('./module/styleguide'),
  'ftp-deploy': require('./module/ftp-deploy')
};
