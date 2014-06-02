/* html-validation */
module.exports = {
  options: {
    doctype: 'HTML5',
    charset: 'utf-8',
    path: 'ignore/html-validation/validation-status.json',
    reportpath: 'ignore/html-validation/validation-report.json'
    // reset: grunt.option('reset') || false,
    // stoponerror:false,
    // remotePath: "http://decodize.com/",
    // remoteFiles: ["html/slidemote-universal-remote-control-for-html5-presentations",
    //   "GAE/linktomob-share-your-links-quickly-and-easily-on-mobile-devices/",
    //   "html/getting-started-with-yeoman-1-dot-0-beta-on-windows/",
    //   "html/moving-from-wordpress-to-octopress/",
    //   "css/site-preloading-methods/",
    //   "html/sublime-text-2-bidirectional-language-support-plugin/"]
    // remoteFiles: "validation-files.json",
    // relaxerror: [
    //   'Bad value X-UA-Compatible for attribute http-equiv on element meta.',
    //   'Element title must not be empty.'
    // ]
  },
  pc: {
    files: {
      src: [
      '<%= dir.src %>/<%= dir.pc %>/*.html',
      '<%= dir.src %>/<%= dir.pc %>/**/*.html',
      '!ignore/*.html',
      '!test/*.html',
      '!404.html'
      ]
    }
  },
  sp: {
    files: {
      src: [
      '<%= dir.src %>/<%= dir.sp %>/*.html',
      '<%= dir.src %>/<%= dir.sp %>/**/*.html',
      '!ignore/*.html',
      '!test/*.html',
      '!404.html'
      ]
    }
  }
};