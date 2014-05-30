/* styleguide */
module.exports = {
  options: {
    name: '<%= pkg.name %>'
  },
  pc: {
    options: {
    },
    files: {
      'ignore/docs/styledocco': '<%= sass.pc.cwd %>'
    }
  }
};