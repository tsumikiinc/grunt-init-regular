/* connect */
module.exports = {
  options: {
    port: 9008
  },
  {% if (addMobileSite === 'true') { %}
  livepc: {
    options: {
      base: '<%= dir.src %>/<%= dir.pc %>/'
    }
  },
  livesp: {
    options: {
      base: '<%= dir.src %>/<%= dir.sp %>/'
    }
  },
  demopc: {
    options: {
      keepalive: true,
      base: '<%= dir.build %>/<%= dir.pc %>/'
    }
  },
  demosp: {
    options: {
      keepalive: true,
      base: '<%= dir.build %>/<%= dir.sp %>/'
    }
  }
  {% } else { %}
  live: {
    options: {
      base: '<%= dir.src %>/'
    }
  },
  demo: {
    options: {
      keepalive: true,
      base: '<%= dir.build %>/'
    }
  }
  {% } %}
};
