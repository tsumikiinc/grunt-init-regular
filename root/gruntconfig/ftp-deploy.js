/* ftp-deploy */
module.exports = {
  {% if (addMobileSite === 'true') { %}
  testpc: {
    auth: {
      host: 'host',
      port: 21,
      authKey: 'key2'
    },
    src: '<%= dir.build %>/<%= dir.pc %>/<%= dir.root %>/',
    dest: '/path/',
    exclusions: ['.DS_Store']
  },
  testsp: {
    auth: {
      host: 'host',
      port: 21,
      authKey: 'key2'
    },
    src: '<%= dir.build %>/<%= dir.sp %>/<%= dir.root %>/',
    dest: '/path/',
    exclusions: ['.DS_Store']
  },
  publishpc: {
    auth: {
      host: 'host',
      port: 21,
      authKey: 'key1'
    },
    src: '<%= dir.build %>/<%= dir.pc %>/<%= dir.root %>/',
    dest: '/path/',
    exclusions: ['.DS_Store']
  },
  publishsp: {
    auth: {
      host: 'host',
      port: 21,
      authKey: 'key1'
    },
    src: '<%= dir.build %>/<%= dir.sp %>/<%= dir.root %>/',
    dest: '/path/',
    exclusions: ['.DS_Store']
  }
  {% } else { %}
  test: {
    auth: {
      host: 'host',
      port: 21,
      authKey: 'key2'
    },
    src: '<%= dir.build %>/<%= dir.root %>/',
    dest: '/path/',
    exclusions: ['.DS_Store']
  },
  publish: {
    auth: {
      host: 'host',
      port: 21,
      authKey: 'key1'
    },
    src: '<%= dir.build %>/<%= dir.root %>/',
    dest: '/path/',
    exclusions: ['.DS_Store']
  }
  {% } %}
};
