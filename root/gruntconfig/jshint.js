/* jshint */
module.exports = {
  options: {
    jshintrc: '.jshintrc'
  },
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
};
