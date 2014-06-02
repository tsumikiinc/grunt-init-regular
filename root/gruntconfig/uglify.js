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
    mangle: true,
    cwd: '<%= dir.src %>/<%= dir.pc %>/<%= dir.js %>/',
    src: ['*.js', '!lib/*.js'],
    dest: '<%= dir.build %>/<%= dir.pc %>/<%= dir.js %>/'
  },
  sp: {
    expand: true,
    mangle: true,
    cwd: '<%= dir.src %>/<%= dir.sp %>/<%= dir.js %>/',
    src: ['*.js', '!lib/*.js'],
    dest: '<%= dir.build %>/<%= dir.sp %>/<%= dir.js %>/'
  }
};