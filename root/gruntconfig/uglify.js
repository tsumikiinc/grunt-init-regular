/* uglify */
module.exports = {
  options: {
    banner: '<%= banner =>',
    preserveComments: 'some',
    compress: {
      dead_code: true,
      global_defs: {
        'DEBUG': false
      }
    }
  },
  pc: {
    expand: true,
    cwd: '<%= dir.src %>/<%= dir.pc %>/<%= dir.root %>/<%= dir.js %>/',
    src: [
      '*.js',
      '!lib/*.js'
    ],
    dest: '<%= dir.build %>/<%= dir.pc %>/<%= dir.root %>/<%= dir.js %>/'
  },
  sp: {
    expand: true,
    cwd: '<%= dir.src %>/<%= dir.sp %>/<%= dir.root %>/<%= dir.js %>/',
    src: [
      '*.js',
      '!lib/*.js'
    ],
    dest: '<%= dir.build %>/<%= dir.sp %>/<%= dir.root %>/<%= dir.js %>/'
  }
};
