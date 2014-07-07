/* copy */
module.exports = {
  pc: {
    expand: true,
    cwd: '<%= dir.src %>/',
    src: [
      '<%= dir.pc %>/<%= dir.root %>/**/*'
    ],
    dest: '<%= dir.build %>/'
  },
  sp: {
    expand: true,
    cwd: '<%= dir.src %>/',
    src: [
      '<%= dir.sp %>/<%= dir.root %>/**/*'
    ],
    dest: '<%= dir.build %>/'
  }
};