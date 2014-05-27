/*!
 * grunt-init-regular
 *
 * Copyright (c) 2014 Tsumiki inc.
 */

'use strict';

// Basic template description.
exports.description = 'Create a new project';

// Template-specific notes to be displayed before question prompts.
exports.notes = '_Project name_ MUST be camelCase or hyphen-connected.';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm ' +
  'install_. After that, you may execute project tasks with _grunt server_, ' +
  '_grunt test_ or _grunt build_.';
// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({type: 'site'}, [
    // Prompt for these values.
    init.prompt('name'),
    init.prompt('title'),
    init.prompt('description', 'Some descriptions.'),
    init.prompt('version', '0.0.1'),
    init.prompt('licenses', 'MIT'),
    init.prompt('author_name', 'sato'),
    init.prompt('author_email', 'sato@tsumikiinc.com'),
    init.prompt('author_url', 'http://www.tsumikiinc.com')
  ], function(err, props) {
      // A few additional properties.
      props.appName = props.name.replace(/(\-[a-z])/g,
        function ($1) {
          return $1.toUpperCase().replace('-', '');
        });
      props.keywords = [];

      // Files to copy (and process).
      var files = init.filesToCopy(props);

      // Add properly-named license files.
      init.addLicenseFiles(files, props.licenses);

      // Actually copy (and process) files.
      init.copyAndProcess(files, props);

      // Generate package.json file, used by npm and grunt.
      init.writePackageJSON('package.json', {
        name: 'regular',
        version: '0.1.0',
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
          "grunt-contrib-htmlmin": "^0.2.0",
          "grunt-ftp-deploy": "^0.1.2",
          "grunt-processhtml": "^0.3.3",
          "grunt-contrib-csslint": "^0.2.0"
        }
      });

    // All done!
    done();
  });

};
