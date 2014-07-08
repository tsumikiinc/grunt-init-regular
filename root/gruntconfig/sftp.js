/* ssh */
module.exports = {
  {% if (addMobileSite === 'true') { %}
  options: {
    path: '<%= secret.path %>',
    host: '<%= secret.host %>',
    username: '<%= secret.username %>',
    password: '<%= secret.password %>',
    port: '<%= secret.port %>',
    showProgress: true,
    createDirectories: true,
    srcBasePath: '<%= dir.build %>/<%= dir.pc %>/<%= dir.root %>/'
  },
  testpc: {
    all: {
      files: {
        './': ['<%= dir.build %>/<%= dir.pc %>/<%= dir.root %>/**']
      }
    },
    iot: {
      files: {
        './': ['<%= dir.build %>/<%= dir.pc %>/<%= dir.root %>/**', '!<%= dir.build %>/<%= dir.pc %>/<%= dir.root %>/<%= dir.img %>/**']
      }
    },
    img: {
      files: {
        './': ['<%= dir.build %>/<%= dir.pc %>/<%= dir.root %>/<%= dir.img %>/**']
      }
    }
  },
  testsp: {
    all: {
      files: {
        './': ['<%= dir.build %>/<%= dir.sp %>/<%= dir.root %>/**']
      }
    },
    iot: {
      files: {
        './': ['<%= dir.build %>/<%= dir.sp %>/<%= dir.root %>/**', '!<%= dir.build %>/<%= dir.sp %>/<%= dir.root %>/<%= dir.img %>/**']
      }
    },
    img: {
      files: {
        './': ['<%= dir.build %>/<%= dir.sp %>/<%= dir.root %>/<%= dir.img %>/**']
      }
    }
  }
  {% } else { %}
  options: {
    path: '<%= secret.path %>',
    host: '<%= secret.host %>',
    username: '<%= secret.username %>',
    password: '<%= secret.password %>',
    port: '<%= secret.port %>',
    showProgress: true,
    createDirectories: true,
    srcBasePath: '<%= dir.build %>/<%= dir.root %>/'
  },
  test: {
    all: {
      files: {
        './': ['<%= dir.build %>/<%= dir.root %>/**']
      }
    },
    iot: {
      files: {
        './': ['<%= dir.build %>/<%= dir.root %>/**', '!<%= dir.build %>/<%= dir.root %>/<%= dir.img %>/**']
      }
    },
    img: {
      files: {
        './': ['<%= dir.build %>/<%= dir.root %>/<%= dir.img %>/**']
      }
    }
  }
  {% } %}
};
