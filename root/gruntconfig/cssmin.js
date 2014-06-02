/* cssmin */
module.exports = {
  pc: {
    expand: true,
    cwd: '<%= sass.pc.dest %>/',
    src: '*.css',
    dest: '<%= dir.build %>/<%= dir.pc %>/<%= dir.css %>/'
  },
  sp: {
    expand: true,
    cwd: '<%= sass.sp.dest %>/',
    src: '*.css',
    dest: '<%= dir.build %>/<%= dir.sp %>/<%= dir.css %>/'
  }
};