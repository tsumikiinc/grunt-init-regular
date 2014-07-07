/* cssmin */
module.exports = {
  pc: {
    expand: true,
    cwd: '<%= dir.src %>/<%= dir.pc %>/<%= dir.root %>/<%= dir.css %>/',
    src: [
      '*.css',
      '**/*.css'
    ],
    dest: '<%= dir.build %>/<%= dir.pc %>/<%= dir.root %>/<%= dir.css %>/'
  },
  sp: {
    expand: true,
    cwd: '<%= dir.src %>/<%= dir.sp %>/<%= dir.root %>/<%= dir.css %>/',
    src: [
      '*.css',
      '**/*.css'
    ],
    dest: '<%= dir.build %>/<%= dir.sp %>/<%= dir.root %>/<%= dir.css %>/'
  }
};
