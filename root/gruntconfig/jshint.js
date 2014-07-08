/* jshint */
module.exports = {
  options: {
    jshintrc: '.jshintrc'
  },
  {% if (addMobileSite === 'true') { %}
  pc: {
    src: '<%= dir.src %>/<%= dir.pc %>/<%= dir.root %>/<%= dir.js %>/*.js'
  },
  sp: {
    src: '<%= dir.src %>/<%= dir.sp %>/<%= dir.root %>/<%= dir.js %>/*.js'
  }
  {% } else { %}
  lint: {
    src: '<%= dir.src %>/<%= dir.root %>/<%= dir.js %>/*.js'
  }
  {% } %}
};
