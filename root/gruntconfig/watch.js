/* watch */
module.exports = {
  options: {
    livereload: true,
    spawn: false
  },
  {% if (addMobileSite === 'true') { %}
  pc: {
    files: [
      {% if (jade === 'true') { %}
      '<%= jade.pc.cwd %>/*.jade',
      '<%= jade.pc.cwd %>/**/*.jade',
      '!<%= jade.pc.cwd %>/base/*',
      '!<%= jade.pc.cwd %>/includes/*',
      {% } else { %} 
      '<%= dir.src %>/<%= dir.pc %>/<%= dir.root %>/*.html',
      '<%= dir.src %>/<%= dir.pc %>/<%= dir.root %>/**/*.html',
      {% } %}

      {% if (stylesheetLang === 'sass') { %}
      '<%= sass.pc.cwd %>/*.scss',
      '<%= sass.pc.cwd %>/import/*.scss',
      {% } else if (stylesheetLang === 'stylus') { %}
      '<%= stylus.pc.cwd %>/*.scss',
      '<%= stylus.pc.cwd %>/import/*.scss',
      {% } else { %}
      '<%= dir.src %>/<%= dir.pc %>/<%= dir.root %>/<%= dir.css %>/*.css',
      '<%= dir.src %>/<%= dir.pc %>/<%= dir.root %>/<%= dir.css %>/**/*.css',
      {% } %}

      '<%= dir.src %>/<%= dir.pc %>/<%= dir.root %>/<%= dir.js %>/*.js'
    ],
    tasks: [
      {% if (stylesheetLang === 'sass') { %}
      'newer:sass:pc',
      {% } else if (stylesheetLang === 'stylus') { %}
      'newer:stylus:pc',
      {% } %}

      {% if (jade === 'true') { %}
      'newer:jade:pc',
      {% } %}

      'newer:jshint:pc'
    ]
  },
  sp: {
    files: [
      {% if (jade === 'true') { %}
      '<%= jade.sp.cwd %>/*.jade',
      '<%= jade.sp.cwd %>/**/*.jade',
      '!<%= jade.sp.cwd %>/base/*',
      '!<%= jade.sp.cwd %>/includes/*',
      {% } else { %} 
      '<%= dir.src %>/<%= dir.sp %>/<%= dir.root %>/*.html',
      '<%= dir.src %>/<%= dir.sp %>/<%= dir.root %>/**/*.html',
      {% } %}

      {% if (stylesheetLang === 'sass') { %}
      '<%= sass.sp.cwd %>/*.scss',
      '<%= sass.sp.cwd %>/import/*.scss',
      {% } else if (stylesheetLang === 'stylus') { %}
      '<%= stylus.sp.cwd %>/*.scss',
      '<%= stylus.sp.cwd %>/import/*.scss',
      {% } else { %}
      '<%= dir.src %>/<%= dir.sp %>/<%= dir.root %>/<%= dir.css %>/*.css',
      '<%= dir.src %>/<%= dir.sp %>/<%= dir.root %>/<%= dir.css %>/**/*.css',
      {% } %}

      '<%= dir.src %>/<%= dir.sp %>/<%= dir.root %>/<%= dir.js %>/*.js'
    ],
    tasks: [
      {% if (stylesheetLang === 'sass') { %}
      'newer:sass:sp',
      {% } else if (stylesheetLang === 'stylus') { %}
      'newer:stylus:sp',
      {% } %}

      {% if (jade === 'true') { %}
      'newer:jade:sp',
      {% } %}

      'newer:jshint:sp'
    ]
  }
  {% } else { %}
  live: {
    files: [
      {% if (jade === 'true') { %}
      '<%= jade.compile.cwd %>/*.jade',
      '<%= jade.compile.cwd %>/**/*.jade',
      '!<%= jade.compile.cwd %>/base/*',
      '!<%= jade.compile.cwd %>/includes/*',
      {% } else { %} 
      '<%= dir.src %>/<%= dir.root %>/*.html',
      '<%= dir.src %>/<%= dir.root %>/**/*.html',
      {% } %}

      {% if (stylesheetLang === 'sass') { %}
      '<%= sass.compile.cwd %>/*.scss',
      '<%= sass.compile.cwd %>/import/*.scss',
      {% } else if (stylesheetLang === 'stylus') { %}
      '<%= stylus.compile.cwd %>/*.scss',
      '<%= stylus.compile.cwd %>/import/*.scss',
      {% } else { %}
      '<%= dir.src %>/<%= dir.root %>/<%= dir.css %>/*.css',
      '<%= dir.src %>/<%= dir.root %>/<%= dir.css %>/**/*.css',
      {% } %}

      '<%= dir.src %>/<%= dir.root %>/<%= dir.js %>/*.js'
    ],
    tasks: [
      {% if (stylesheetLang === 'sass') { %}
      'newer:sass:compile',
      {% } else if (stylesheetLang === 'stylus') { %}
      'newer:stylus:compile',
      {% } %}

      {% if (jade === 'true') { %}
      'newer:jade:compile',
      {% } %}

      'newer:jshint:lint'
    ]
  }
  {% } %}
};
