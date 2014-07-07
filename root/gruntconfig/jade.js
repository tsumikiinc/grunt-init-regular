/* jade */
module.exports = {
  options: {
    pretty: true,
    data: function(dest, src) {
      var dataFile = "../src/data/data.json";

      return require(dataFile);

    }
  },
  pc: {
    expand: true,
    cwd: '<%= dir.src %>/<%= dir.pc %>/<%= dir.jade %>/',
    src: [
      '*.jade',
      '**/*.jade',
      '!base/*',
      '!includes/*'
    ],
    dest: '<%= dir.src %>/<%= dir.pc %>/<%= dir.root %>/',
    ext: '.html'
  },
  sp: {
    expand: true,
    cwd: '<%= dir.src %>/<%= dir.sp %>/<%= dir.jade %>/',
    src: [
      '*.jade',
      '**/*.jade',
      '!base/*',
      '!includes/*'
    ],
    dest: '<%= dir.src %>/<%= dir.sp %>/<%= dir.root %>/',
    ext: '.html'
  }
};
