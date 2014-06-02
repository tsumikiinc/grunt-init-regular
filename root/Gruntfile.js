module.exports = function(grunt) {

  var configDir = 'gruntconfig',
      fs = require('fs'),
      path = require('path'),
      packageJson = grunt.file.readJSON('package.json');

  fs.readdirSync(configDir).forEach(function(filePath) {
    var fileName, modulePath, stats;

    modulePath = path.join(__dirname, configDir, filePath);
    stats = fs.statSync(modulePath);
    fileName = filePath.split('.')[0];
    if (stats.isFile() && filePath.charAt(0) !== '.' && filePath.charAt(0) !== '_') {
      return grunt.config.set(fileName, require(modulePath));
    }
  });

  Object.keys(packageJson.devDependencies).slice(1).forEach(grunt.loadNpmTasks);



  // registerTask
  grunt.registerTask('default', ['connect', 'watch']);

  grunt.registerTask('live', 'Live reloading.', function(target) {
    if (target === 'pc' || target === 'sp') {
      grunt.task.run('connect:live' + target);
      grunt.task.run('watch:' + target);
    } else {
      console.log('引数を指定してください\nexample -> grunt live:pc or grunt live:sp');
      return;
    }
  });

  grunt.registerTask('demo', 'Build directory demo.', function(target) {
    if (target === 'pc' || target === 'sp') {
      grunt.task.run('connect:demo' + target);
    } else {
      console.log('引数を指定してください\nexample -> grunt demo:pc or grunt demo:sp');
      return;
    }
  });

  grunt.registerTask('build', 'Build.', function(target) {
    if (target === 'pc' || target === 'sp') {
      grunt.task.run('clean:buildDir' + target);
      grunt.task.run('sass:' + target);
      grunt.task.run('validation:' + target);
      grunt.task.run('csslint:' + target);
      grunt.task.run('cssmin:' + target);
      grunt.task.run('jshint:' + target);
      grunt.task.run('uglify:' + target);
      grunt.task.run('imagemin:' + target);
      grunt.task.run('copy:build' + target);
      // grunt.task.run('styleguide:' + target);
    } else {
      console.log('引数を指定してください\nexample -> grunt build:pc or grunt build:sp');
      return;
    }
  });

  grunt.registerTask('testup', 'Test upload.', function(target) {
    if (target === 'pc' || target === 'sp') {
      grunt.task.run('ftp-deploy:test' + target);
    } else {
      console.log('引数を指定してください\nexample -> grunt testup:pc or grunt testup:sp');
      return;
    }
  });

  grunt.registerTask('deploy', 'Deploy.', function(target) {
    if (target === 'pc' || target === 'sp') {
      grunt.task.run('ftp-deploy:deploy' + target);
    } else {
      console.log('引数を指定してください\nexample -> grunt deploy:pc or grunt deploy:sp');
      return;
    }
  });
};