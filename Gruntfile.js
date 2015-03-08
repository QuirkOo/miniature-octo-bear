
module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    express: {
      options: {
        script: 'bin/www'
      },
      dev: {
        options: {
          node_env: 'dev',
          debug: true
        }
      },
      test: {
        options: {
          node_env: 'test',
          debug: true
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      config: {
        files: [ 'package.json' ],
        tasks: [ 'dist', 'express:dev' ],
        options: {
          spawn: false
        }
      },
      js: {
        files: [ 'Gruntfile.js', 'server.js', 'app/server/**/*.js' ],
        tasks: [ 'jshint:server', 'express:dev' ],
        options: {
          spawn: false
        }
      },
      angular: {
        files: [ 'app/client/modules/**/*.js' ],
        tasks: [ 'jshint:client', 'uglify', 'protractor' ]
      },
      sass: {
        files: [ 'app/server/scss/**/*.scss' ],
        tasks: [ 'sass' ]
      },
      css: {
        files: [ 'pubic/assets/css/*.css', 'public/assets/css/*.css.map' ]
      },
      clientViews: {
          files: [ 'app/client/modules/**/*.jade' ],
          tasks: [ 'protractor' ]
        },
      serverViews: {
        files: [ 'app/server/views/*.jade']
      },
      bower: {
        files: [ 'bower.json' ],
        tasks: [ 'wiredep' ]
      }
    },
    protractor: {
      options: {
        configFile: "test/e2e/protractor.conf.js",
        keepAlive: true
      },
      test: {}
    },
    wiredep: {
      options: {
        ignorePath: '../../public/'
      },
      dev: {
        src: [ 'app/server/views/_bower.scripts.jade', 'app/server/views/_bower.stylesheets.jade' ]
      }
    },
    jshint: {
      server: [ 'Gruntfile.js', 'server.js', 'app/server/**/*.js' ],
      client: [ 'app/client/modules/**/*.js' ]
    },
    uglify: {
      dev: {
        options: {
          beautify: true,
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
        },
        files: {
          'public/assets/js/main.js': 'app/client/modules/**/*.js'
        }
      }
    },
    sass: {
      options: {
        noCache: true
      },
      dev: {
        files: [{
          expand: true,
          cwd: 'app/scss',
          src: [ '*.scss' ],
          dest: 'public/assets/css/',
          ext: '.css'
        }],
        options: {
          sourcemap: 'auto'
        }
      }
    }
  });


  grunt.registerTask('dist', [ 'wiredep', 'sass', 'uglify' ]);

  grunt.registerTask('test', [ 'express:test', 'jshint', 'protractor', 'express:test:stop' ]);

  grunt.registerTask('dev', [ 'dist', 'test', 'express:dev', 'watch' ]);

  grunt.registerTask('default', [ 'dev' ]);

};