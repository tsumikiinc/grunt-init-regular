/* jshint */
module.exports = {
  options: {
    jshintrc: '.jshintrc'
  },
  {% if (addMobileSite === 'true') { %}
  pc: {
    files: {
      src: '<%= dir.src %>/<%= dir.pc %>/<%= dir.root %>/<%= dir.js %>/*.js'
    }
  },
  sp: {
    files: {
      src: '<%= dir.src %>/<%= dir.sp %>/<%= dir.root %>/<%= dir.js %>/*.js'
    }
  }
  {% } else { %}
  lint: {
    files: {
      src: '<%= dir.src %>/<%= dir.root %>/<%= dir.js %>/*.js'
    }
  }
  {% } %}
};
