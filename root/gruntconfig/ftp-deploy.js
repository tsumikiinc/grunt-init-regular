/* ftp-deploy */
module.exports = {
  testpc: {
    auth: {
      host: 'host',
      port: 21,
      authKey: 'key2'
    },
    src: '<%= dir.build %>/<%= dir.pc %>/',
    dest: '/path/',
    exclusions: ['.DS_Store']
  },
  testsp: {
    auth: {
      host: 'host',
      port: 21,
      authKey: 'key2'
    },
    src: '<%= dir.build %>/<%= dir.sp %>/',
    dest: '/path/',
    exclusions: ['.DS_Store']
  },
  deploypc: {
    auth: {
      host: 'host',
      port: 21,
      authKey: 'key1'
    },
    src: '<%= dir.build %>/<%= dir.pc %>/',
    dest: '/path/',
    exclusions: ['.DS_Store']
  },
  deploysp: {
    auth: {
      host: 'host',
      port: 21,
      authKey: 'key1'
    },
    src: '<%= dir.build %>/<%= dir.sp %>/',
    dest: '/path/',
    exclusions: ['.DS_Store']
  }
};