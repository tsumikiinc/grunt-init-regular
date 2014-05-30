/* csslint */
module.exports = {
  options: {
    csslintrc: '.csslintrc'
  },
  pc: {
    src: '<%= sass.pc.dest %>/*.css'
  },
  sp: {
    src: '<%= sass.sp.dest %>/*.css'
  }
};