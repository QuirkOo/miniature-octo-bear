
module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: [ 'Gruntfile.js' ]
    }
  });

  grunt.registerTask('test', [ 'jshint' ]);

  grunt.registerTask('default', [ 'test' ]);

};