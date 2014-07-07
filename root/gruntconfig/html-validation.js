/* html-validation */
module.exports = {
  options: {
    reset: true,
    doctype: '{%= doctype %}',
    charset: '{%= charset %}',
    path: 'ignore/html-validation/validation-status.json',
    reportpath: 'ignore/html-validation/validation-report.json',
    relaxerror: ['Bad value X-UA-Compatible for attribute http-equiv on element meta.'],
    failHard: true
  },
  pc: {
    src: [
      '<%= dir.src %>/<%= dir.pc %>/<%= dir.root %>/**/*.html',
      '<%= dir.src %>/<%= dir.pc %>/<%= dir.root %>/*.html'
    ]

  },
  sp: {
    src: [
      '<%= dir.src %>/<%= dir.pc %>/<%= dir.root %>/**/*.html',
      '<%= dir.src %>/<%= dir.pc %>/<%= dir.root %>/*.html'
    ]
  }
};
