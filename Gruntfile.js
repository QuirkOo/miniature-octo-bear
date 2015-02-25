
module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    express: {
      options: {
        script: 'server.js'
      },
      dev: {
        options: {
          node_env: 'dev'
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      js: {
        files: [ 'Gruntfile.js', 'server.js' ],
        tasks: [ 'jshint', 'express' ],
        options: {
          spawn: false
        }
      },
      sass: {
        files: [ 'app/scss/**/*.scss' ],
        tasks: [ 'sass' ]
      },
      css: {
        files: [ 'pubic/assets/css/*.css' ]
      },
      jade: {
        files: [ 'app/views/*.jade' ]
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
        src: [ 'app/views/_scripts.jade', 'app/views/_stylesheets.jade' ],
        exclude: [ 'public/lib/foundation/css']
      }
    },
    jshint: {
      all: [ 'Gruntfile.js', 'server.js' ]
    },
    sass: {
      options: {
        noCache: true
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