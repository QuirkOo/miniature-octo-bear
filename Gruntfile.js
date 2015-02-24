
module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    express: {
      options: {
        script: 'server.js'
      },
      default: {
        node_env: 'dev'
      }
    },
    watch: {
      js: {
        files: [ 'Gruntfile.js' ],
        tasks: [ 'jshint' ],
        options: {
          livereload: true
        }
      },
      sass: {
        files: [ 'app/assets/sass/**/*.sass' ],
        tasks: [ 'sass' ]
      },
      css: {
        files: [ 'pubic/assets/css/**/*.css' ],
        options: {
          livereload: true
        }
      },
      jade: {
        files: [ 'app/**/*.jade' ],
        options: {
          livereload: true
        }
      }
    },
    jshint: {
      all: [ 'Gruntfile.js' ]
    },
    sass: {
      options: {
        noCache: true,
        sourcemap: 'none'
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'app/assets/sass',
          src: [ '*.sass' ],
          dest: 'public/assets/css',
          ext: '.css'
        }]
      }
    }
  });

  grunt.registerTask('dist', [ 'sass' ]);

  grunt.registerTask('test', [ 'jshint' ]);

  grunt.registerTask('default', [ 'test', 'dist', 'express', 'watch' ]);

};