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

  {% if (addMobileSite === 'true') { %}
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
  grunt.registerTask('d', 'Build directory demo.', function(target) {
    if (target === 'pc' || target === 'sp') {
      grunt.task.run('connect:demo' + target);
    } else {
      console.log('!!error example -> grunt demo:pc or grunt demo:sp');
      return;
    }
  });



  // build
  grunt.registerTask('b', 'Build.', function(target) {
    if (target === 'pc' || target === 'sp') {
      {% if (jade === 'true') { %}grunt.task.run('jade:' + target);{% } %}
      {% if (stylesheetLang === 'sass') { %}grunt.task.run('sass:' + target);{% } else if (stylesheetLang === 'stylus') { %}grunt.task.run('stylus:' + target);{% } %}
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



  // Test up.
  grunt.registerTask('testup', 'Test upload.', function(target) {
    if (target === 'pc' || target === 'sp') {
      {% if (transferProtocol === 'ftp') { %}grunt.task.run('ftp-deploy:test' + target);{% } else if (transferProtocol === 'sftp') { %}grunt.task.run('sftp-deploy:test' + target);{% }  else if (transferProtocol === 'ssh') { %}grunt.task.run('sftp:test' + target);{% } %}
    } else {
      console.log('引数を指定してください\nexample -> grunt testup:pc or grunt testup:sp');
      return;
    }
  });



  // Publish
  grunt.registerTask('publish', 'Publish.', function(target) {
    if (target === 'pc' || target === 'sp') {
      {% if (transferProtocol === 'ftp') { %}grunt.task.run('ftp-deploy:publish' + target);{% } else if (transferProtocol === 'sftp') { %}grunt.task.run('sftp-deploy:publish' + target);{% }  else if (transferProtocol === 'ssh') { %}grunt.task.run('sftp:publish' + target);{% } %}
    } else {
      console.log('引数を指定してください\nexample -> grunt publish:pc or grunt publish:sp');
      return;
    }
  });
  {% } else { %}
  // Live reload
  grunt.registerTask('l', 'Live reloading.', function() {
    grunt.task.run('connect:live');
    grunt.task.run('watch:live');
  });



  // htmlバリデーション
  grunt.registerTask('v', 'html validation', function() {
    grunt.task.run('validation:validate');
  });



  // build/ directory preview
  grunt.registerTask('d', 'Build directory demo.', function() {
    grunt.task.run('connect:demo');
  });



  // build
  grunt.registerTask('b', 'Build.', function() {
    {% if (jade === 'true') { %}grunt.task.run('jade:compile');{% } %}
    {% if (stylesheetLang === 'sass') { %}grunt.task.run('sass:compile');{% } else if (stylesheetLang === 'stylus') { %}grunt.task.run('stylus:compile');{% } %}
    grunt.task.run('copy:build');
    {% if (cssmin === 'true') { %}grunt.task.run('cssmin:min');{% } %}
    grunt.task.run('jshint:lint');
    {% if (uglify === 'true') { %}grunt.task.run('uglify:min');{% } %}
    {% if (imagemin === 'true') { %}grunt.task.run('imagemin:min');{% } %}
  });



  // Test up.
  grunt.registerTask('testup', 'Test upload.', function() {
    {% if (transferProtocol === 'ftp') { %}grunt.task.run('ftp-deploy:test');{% } else if (transferProtocol === 'sftp') { %}grunt.task.run('sftp-deploy:test');{% }  else if (transferProtocol === 'ssh') { %}grunt.task.run('sftp:test');{% } %}
  });



  // Publish
  grunt.registerTask('publish', 'Publish.', function() {
    {% if (transferProtocol === 'ftp') { %}grunt.task.run('ftp-deploy:publish');{% } else if (transferProtocol === 'sftp') { %}grunt.task.run('sftp-deploy:publish');{% }  else if (transferProtocol === 'ssh') { %}grunt.task.run('sftp:publish');{% } %}
  });
  {% } %}
};
