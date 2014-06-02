/*!
 * grunt-init-regular
 * Copyright (c) 2014 Tsumiki inc.
 */

'use strict';

// Basic template description.
exports.description = 'Create new project template　新規プロジェクト用Gruntテンプレートです';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'プロジェクトの概要を設定します\n' +
                '適宜に入力してください\n' +
                '※ _Project name_ にはキャメルケースかハイフンシンタックスを使用してください';

// Template-specific notes to be displayed after question prompts.
/*
exports.after = 'You should now install project dependencies with _npm ' +
  'install_. After that, you may execute project tasks with _grunt server_, ' +
  '_grunt test_ or _grunt build_.';
*/

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {
  var tempname = 'regular/';

  init.process({type: 'site'}, [
    // Prompt for these values.
    init.prompt('name'),
    init.prompt('title'),
    init.prompt('description'),
    init.prompt('version', '0.1.0'),
    init.prompt('doctype', 'HTML5'),
    init.prompt('charset', 'urf-8'),
    init.prompt('siteTitle'),
    init.prompt('template_dir', 'mytemp')
    // init.prompt('licenses'),
    // init.prompt('author_name'),
    // init.prompt('author_email'),
    // init.prompt('author_url', 'http://www.tsumikiinc.com')
  ], function(err, props) {
    var othertemp = init.expand(tempname + props.template_dir + '/**/*.{scss,js,coffee,sass,jade}');
    var skip = [
      '*.png',
      '*.jpg',
      '*.gif',
      '*.ico'
    ];
    var i, l, k;

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // exec
    var exec = require('child_process').exec;
    // var path = require('path');
    // var targetPath = path.resolve('.');


    for (i = 0, l = othertemp.length; i < l; i++) {
      k = othertemp[i].rel;
      files[ 'src/' + k.replace(tempname, '') ] = othertemp[i].abs;
    }

    // Add properly-named license files.
    // init.addLicenseFiles(files, props.licenses);

    // Actually copy (and process) files.

    init.copyAndProcess(files, props, {noProcess: skip});

    // if(props['directories']){
    //   directories = props['directories'].split(',');

    //   directories.forEach(function(directory){

    //     var html = grunt.file.read(init.srcpath('index.html'));
    //     var temp = grunt.template.process(html, {data: props, delimiters: 'init'});

    //     grunt.file.write(directory + '/index.html', temp);
    //   });
    // }

    // Generate package.json file, used by npm and grunt.

    init.writePackageJSON('package.json', {
      name: props.name,
      version: props.version,
      devDependencies: {
        "grunt": "^0.4.5",
        "grunt-contrib-watch": "^0.6.1",
        "grunt-contrib-sass": "^0.7.3",
        "grunt-contrib-cssmin": "^0.9.0",
        "grunt-contrib-connect": "^0.7.1",
        "grunt-html-validation": "^0.1.15",
        "grunt-contrib-copy": "^0.5.0",
        "grunt-contrib-imagemin": "^0.7.0",
        "grunt-contrib-uglify": "^0.4.0",
        "grunt-contrib-jshint": "^0.10.0",
        "grunt-contrib-clean": "^0.5.0",
        "grunt-bower-task": "^0.3.4",
        "grunt-mkdir": "^0.1.1",
        "grunt-contrib-rename": "0.0.3",
        "grunt-styleguide": "0.2.15",
        "grunt-contrib-htmlmin": "^0.2.0",
        "grunt-ftp-deploy": "^0.1.2",
        "grunt-sftp-deploy": "^0.0.11",
        "grunt-processhtml": "^0.3.3",
        "grunt-php": "^0.3.3",
        "grunt-contrib-csslint": "^0.2.0"
      }
    });


    // Task ↓ --------------------------
    // console.log('Now npm installing. Please wait...');
    // exec('npm install', function(err, stdout, stderr) {
    //   if (stdout) {
    //     console.log('stdout: ' + stdout);
    //   }
    //   if (stderr) {
    //     console.log('stderr: ' + stderr);
    //   }
    //   if (err !== null) {
    //     console.log('Error: ' + err);
    //   }
    //   done();
    // });
    done();// 終了
  });
};
