/* connect */
module.exports = {
  options: {
    port: 9008
  },
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
};
