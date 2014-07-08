/*!
 * grunt-init-regular
 * Copyright (c) 2014 Tsumiki inc.
 */

'use strict';

// Basic template description.
exports.description = 'Create new project template\n新規プロジェクト用Gruntテンプレート';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'プロジェクトの概要を設定します\n' +
                '適宜入力してください\n' +
                '※ _Project name_ にはキャメルケースかハイフンシンタックスを使用してください';


// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {
  var tempname = 'regular/';

  init.process({type: 'site'}, [
    init.prompt('name'),
    init.prompt('title'),
    init.prompt('description'),
    init.prompt('version', '0.1.0'),
    init.prompt('doctype', 'HTML5'),
    init.prompt('charset', 'urf-8'),
    init.prompt('siteTitle', 'サイトタイトル'),
    init.prompt('sitePath', 'root'),
    init.prompt('addMobileSite', 'false'),
    init.prompt('jade', 'true'),
    init.prompt('stylesheetLang', 'sass'),
    init.prompt('uglify', 'true'),
    init.prompt('cssmin', 'false'),
    init.prompt('imagemin', 'true'),
    init.prompt('transferProtocol', 'sftp'),
    init.prompt('template_dir', 'mytemp'),
    init.prompt('licenses', 'CC'),
    init.prompt('author_name'),
    init.prompt('author_email'),
    init.prompt('author_url', 'http://www.tsumikiinc.com')
  ], function(err, props) {
    var othertemp = init.expand(tempname + props.template_dir + '/**/*.{scss,js,coffee,sass,jade,styl}');
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

    var devDependenciesList = {
        "grunt": "^0.4.5",
        "grunt-contrib-watch": "^0.6.1",
        "grunt-contrib-connect": "^0.8.0",
        "grunt-html-validation": "^0.1.18",
        "grunt-contrib-copy": "^0.5.0",
        "grunt-contrib-jshint": "^0.10.0",
        "grunt-newer": "^0.7.0"
    };



    // CSS preprocessor
    if (props.stylesheetLang === 'sass') {

        devDependenciesList["grunt-contrib-sass"] = "^0.7.3";
        delete files['gruntconfig/stylus.js'];

    } else if (props.stylesheetLang === 'stylus') {

        devDependenciesList["grunt-contrib-stylus"] = "^0.18.0";
        delete files['gruntconfig/sass.js'];

    } else {

        delete files['gruntconfig/sass.js'];
        delete files['gruntconfig/stylus.js'];

    }



    // Jade
    if (props.jade === 'true') {
        devDependenciesList["grunt-contrib-jade"] = "^0.12.0";
    } else {
        delete files['gruntconfig/jade.js'];
    }



    // uglify
    if (props.uglify === 'true') {
        devDependenciesList["grunt-contrib-uglify"] = "^0.5.0";
    } else {
        delete files['gruntconfig/uglify.js'];
    }



    // cssmin
    if (props.cssmin === 'true') {
        devDependenciesList["grunt-contrib-cssmin"] = "^0.10.0";
    } else {
        delete files['gruntconfig/cssmin.js'];
    }



    // imagemin
    if (props.imagemin === 'true') {
        devDependenciesList["grunt-contrib-imagemin"] = "^0.7.1";
    } else {
        delete files['gruntconfig/imagemin.js'];
    }



    // Transfer Protocol
    if (props.transferProtocol === 'sftp') {

        devDependenciesList["grunt-sftp-deploy"] = "^0.1.0";
        delete files['gruntconfig/ftp-deploy.js'];
        delete files['gruntconfig/ssh.js'];

    } else if (props.transferProtocol === 'ftp') {

        devDependenciesList["grunt-ftp-deploy"] = "^0.1.3";
        delete files['gruntconfig/sftp-deploy.js'];
        delete files['gruntconfig/ssh.js'];

    } else if (props.transferProtocol === 'ssh') {

        devDependenciesList["grunt-ssh"] = "^0.11.2";
        delete files['gruntconfig/ftp-deploy.js'];
        delete files['gruntconfig/sftp-deploy.js'];

    } else {
        delete files['gruntconfig/ftp-deploy.js'];
        delete files['gruntconfig/sftp-deploy.js'];
        delete files['gruntconfig/ssh.js'];
    }



    for (i = 0, l = othertemp.length; i < l; i++) {
      k = othertemp[i].rel;
      files[ 'src/' + k.replace(tempname, '') ] = othertemp[i].abs;
    }


    init.copyAndProcess(files, props, {noProcess: skip});

    // if(props['directories']){
    //   directories = props['directories'].split(',');

    //   directories.forEach(function(directory){

    //     var html = grunt.file.read(init.srcpath('index.html'));
    //     var temp = grunt.template.process(html, {data: props, delimiters: 'init'});

    //     grunt.file.write(directory + '/index.html', temp);
    //   });
    // }



    init.writePackageJSON('package.json', {
      name: props.name,
      version: props.version,
      devDependencies: devDependenciesList
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
