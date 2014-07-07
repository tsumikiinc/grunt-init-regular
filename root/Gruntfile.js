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



  // registerTask ----------------------

  // Live reload
  grunt.registerTask('l', 'Live reloading.', function(target) {
    if (target === 'pc' || target === 'sp') {
      grunt.task.run('connect:live' + target);
      grunt.task.run('watch:' + target);
    } else {
      console.log('引数を指定してください\nexample -> grunt live:pc or grunt live:sp');
      return;
    }
  });



  // htmlバリデーション
  grunt.registerTask('v', 'html validation', function(target) {
    if (target === 'pc' || target === 'sp') {
      grunt.task.run('validation:' + target);
    } else {
      console.log('!!error example -> grunt v:pc or grunt v:sp');
      return;
    }
  });



  // build/ directory preview
  grunt.registerTask('demo', 'Build directory demo.', function(target) {
    if (target === 'pc' || target === 'sp') {
      grunt.task.run('connect:demo' + target);
    } else {
      console.log('!!error example -> grunt demo:pc or grunt demo:sp');
      return;
    }
  });



  // build
  grunt.registerTask('build', 'Build.', function(target) {
    if (target === 'pc' || target === 'sp') {
      {% if (jade === 'true') { %}grunt.task.run('jade:' + target);{% } %}
      {% if (cssExpressiveLanguage === 'sass') { %}grunt.task.run('sass:' + target);{% } else if (cssExpressiveLanguage === 'stylus') { %}grunt.task.run('stylus:' + target);{% } %}
      grunt.task.run('copy:' + target);
      {% if (cssmin === 'true') { %}grunt.task.run('cssmin:' + target);{% } %}
      grunt.task.run('jshint:' + target);
      {% if (uglify === 'true') { %}grunt.task.run('uglify:' + target);{% } %}
      {% if (imagemin === 'true') { %}grunt.task.run('imagemin:' + target);{% } %}
    } else {
      console.log('引数を指定してください\nexample -> grunt build:pc or grunt build:sp');
      return;
    }
  });



  grunt.registerTask('testup', 'Test upload.', function(target) {
    if (target === 'pc' || target === 'sp') {
      {% if (transferProtocol === 'ftp') { %}grunt.task.run('ftp-deploy:test' + target);{% } else if (transferProtocol === 'sftp') { %}grunt.task.run('sftp-deploy:test' + target);{% }  else if (transferProtocol === 'ssh') { %}grunt.task.run('ssh:test' + target);{% } %}
    } else {
      console.log('引数を指定してください\nexample -> grunt testup:pc or grunt testup:sp');
      return;
    }
  });



  grunt.registerTask('deploy', 'Deploy.', function(target) {
    if (target === 'pc' || target === 'sp') {
      {% if (transferProtocol === 'ftp') { %}grunt.task.run('ftp-deploy:deploy' + target);{% } else if (transferProtocol === 'sftp') { %}grunt.task.run('sftp-deploy:deploy' + target);{% }  else if (transferProtocol === 'ssh') { %}grunt.task.run('ssh:deploy' + target);{% } %}
    } else {
      console.log('引数を指定してください\nexample -> grunt deploy:pc or grunt deploy:sp');
      return;
    }
  });
};
