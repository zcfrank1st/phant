/*global module:false*/
module.exports = function (grunt) {
  'use strict';
  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    watch: {
      coffee: {
        files: ['*.coffee'],
        tasks: ['clean', 'coffee']
      }
    },
    clean: {
      build: ['build/*.js'],
      release: []
    },
    coffee: {
      compile: {
        files: {
          'build/target.js': ['*.coffee']
        }
      }
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/*.js']
      }
    }
  });

  // These plugins provide necessary tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-mocha-test');

  // Default task.
  grunt.registerTask('test', ['mochaTest']);
  grunt.registerTask('default', ['test', 'clean', 'coffee']);

};
