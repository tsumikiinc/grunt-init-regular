/* copy */
module.exports = {
  pc: {
    expand: true,
    cwd: '<%= dir.src %>/<%= dir.pc %>/',
    src: [
      '<%= dir.js %>/lib/**',
      '*.html',
      '**/*.html'
    ],
    dest: '<%= dir.build %>/<%= dir.pc %>/'
  },
  sp: {
    expand: true,
    cwd: '<%= dir.src %>/<%= dir.sp %>/',
    src: [
      '<%= dir.js %>/lib/**',
      '*.html',
      '**/*.html'
    ],
    dest: '<%= dir.build %>/<%= dir.sp %>/'
  }
};