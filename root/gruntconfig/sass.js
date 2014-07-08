/* sass */
module.exports = {
  options: {
    style: 'expanded',
    lineNumbers: true,
    sourcemap: true
  },
  {% if (addMobileSite === 'true') { %}
  pc: {
    expand: true,
    cwd: '<%= dir.src %>/<%= dir.pc %>/<%= dir.sass %>/',
    src: '*.scss',
    dest: '<%= dir.src %>/<%= dir.pc %>/<%= dir.root %>/<%= dir.css %>/',
    ext: '.css'
  },
  sp: {
    expand: true,
    cwd: '<%= dir.src %>/<%= dir.sp %>/<%= dir.sass %>/',
    src: '*.scss',
    dest: '<%= dir.src %>/<%= dir.sp %>/<%= dir.root %>/<%= dir.css %>/',
    ext: '.css'
  }
  {% } else { %}
  compile: {
    expand: true,
    cwd: '<%= dir.src %>/<%= dir.sass %>/',
    src: '*.scss',
    dest: '<%= dir.src %>/<%= dir.root %>/<%= dir.css %>/',
    ext: '.css'
  }
  {% } %}
};
