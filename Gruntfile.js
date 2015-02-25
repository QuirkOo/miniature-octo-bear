
module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    express: {
      options: {
        script: 'server.js'
      },
      dev: {
        node_env: 'dev'
      }
    },
    watch: {
      options: {
        livereload: true
      },
      js: {
        files: [ 'Gruntfile.js', 'server.js' ],
        tasks: [ 'jshint' ]
      },
      sass: {
        files: [ 'app/scss/**/*.scss' ],
        tasks: [ 'sass' ]
      },
      css: {
        files: [ 'pubic/assets/css/*.css' ]
      },
      jade: {
        files: [ 'app/**/*.jade' ]
      },
      bower: {
        files: [ 'bower.json' ],
        tasks: [ 'wiredep' ]
      }
    },
    wiredep: {
      options: {
        ignorePath: '../../public/'
      },
      dev: {
        src: [ 'app/views/_scripts.jade', 'app/views/_stylesheets.jade' ]
      }
    },
    jshint: {
      all: [ 'Gruntfile.js', 'server.js' ]
    },
    sass: {
      options: {
        noCache: true,
        sourcemap: 'none'
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'app/scss',
          src: [ '*.scss' ],
          dest: 'public/modules/core/css',
          ext: '.css'
        }]
      }
    }
  });

  grunt.registerTask('dist', [ 'wiredep', 'sass' ]);

  grunt.registerTask('test', [ 'jshint' ]);

  grunt.registerTask('dev', [ 'test', 'dist', 'express', 'watch' ]);

  grunt.registerTask('default', [ 'dev' ]);

};