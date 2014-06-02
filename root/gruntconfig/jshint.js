/* jshint */
module.exports = {
  options: {
    jshintrc: '.jshintrc'
  },
  pc: {
    files: {
      src: '<%= dir.src %>/<%= dir.pc %>/<%= dir.js %>/*.js'
    }
  },
  sp: {
    files: {
      src: '<%= dir.src %>/<%= dir.sp %>/<%= dir.js %>/*.js'
    }
  }
};