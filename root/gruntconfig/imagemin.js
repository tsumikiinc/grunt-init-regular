/* imagemin */
module.exports = {
  options: {
    optimizationLevel: 7
  },
  {% if (addMobileSite === 'true') { %}
  pc: {
    files: [{
      expand: true,
      cwd: '<%= dir.src %>/<%= dir.pc %>/<%= dir.root %>/<%= dir.img %>/',
      src: '**/*.{jpg,png,gif}',
      dest: '<%= dir.build %>/<%= dir.pc %>/<%= dir.root %>/<%= dir.img %>/'
    }]
  },
  sp: {
    files: [{
      expand: true,
      cwd: '<%= dir.src %>/<%= dir.sp %>/<%= dir.root %>/<%= dir.img %>/',
      src: '**/*.{jpg,png,gif}',
      dest: '<%= dir.build %>/<%= dir.sp %>/<%= dir.root %>/<%= dir.img %>/'
    }]
  }
  {% } else { %}
  build: {
    files: [{
      expand: true,
      cwd: '<%= dir.src %>/<%= dir.root %>/<%= dir.img %>/',
      src: '**/*.{jpg,png,gif}',
      dest: '<%= dir.build %>/<%= dir.root %>/<%= dir.img %>/'
    }]
  }
  {% } %}
};
