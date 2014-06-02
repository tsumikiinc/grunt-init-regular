/* watch */
module.exports = {
  options: {
    livereload: true,
    spawn: false
  },
  pc: {
    files: [
      '<%= dir.src %>/<%= dir.pc %>/*.html',
      '<%= dir.src %>/<%= dir.pc %>/**/*.html',
      '<%= sass.pc.cwd %>/*.scss',
      '<%= sass.pc.cwd %>/import/*.scss',
      '<%= csslint.pc.src %>',
      '<%= dir.src %>/<%= dir.pc %>/<%= dir.js %>/*.js'
    ],
    tasks: ['sass:pc', 'csslint:pc', 'jshint:pc']
  },
  sp: {
    files: [
      '<%= dir.src %>/<%= dir.sp %>/*.html',
      '<%= dir.src %>/<%= dir.sp %>/**/*.html',
      '<%= sass.sp.cwd %>/*.scss',
      '<%= sass.sp.cwd %>/import/*.scss',
      '<%= csslint.sp.src %>',
      '<%= dir.src %>/<%= dir.sp %>/<%= dir.js %>/*.js'
    ],
    tasks: ['sass:sp', 'csslint:sp', 'jshint:sp']
  }
};
