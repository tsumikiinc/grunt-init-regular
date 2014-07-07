/* stylus */
module.exports = {
  options: {
    compress: true,
    import: [
      'nib/*'
    ]
  },
  pc: {
    expand: true,
    cwd: '<%= dir.src %>/<%= dir.pc %>/<%= dir.stylus %>/',
    src: [
      '*.styl',
      '**/*.styl',
      '!import/*.styl'
    ],
    dest: '<%= dir.src %>/<%= dir.pc %>/<%= dir.root %>/<%= dir.css %>/',
    ext: '.css'
  },
  sp: {
    expand: true,
    cwd: '<%= dir.src %>/<%= dir.pc %>/<%= dir.stylus %>/',
    src: [
      '*.styl',
      '**/*.styl',
      '!import/*.styl'
    ],
    dest: '<%= dir.src %>/<%= dir.sp %>/<%= dir.root %>/<%= dir.css %>/',
    ext: '.css'
  }
};
