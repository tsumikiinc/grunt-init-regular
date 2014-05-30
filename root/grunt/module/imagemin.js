/* imagemin */
module.exports = {
  options: {
    optimizationLevel: 7
  },
  pc: {
    files: [{
      expand: true,
      cwd: '<%= dir.src %>/<%= dir.pc %>/<%= dir.img %>/',
      src: '**/*.{jpg,png,gif}',
      dest: '<%= dir.build %>/<%= dir.pc %>/<%= dir.img %>/'
    }]
  },
  sp: {
    files: [{
      expand: true,
      cwd: '<%= dir.src %>/<%= dir.sp %>/<%= dir.img %>/',
      src: '**/*.{jpg,png,gif}',
      dest: '<%= dir.build %>/<%= dir.sp %>/<%= dir.img %>/'
    }]
  }
};