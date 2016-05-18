/*
 * grunt-template7-combine
 * https://github.com/luqiang/grunt-template7-combine
 *
 * Copyright (c) 2016 reacher
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    template7_combine: {
      defaults: {
        options: {
        },
        files: {
          'scripts/templates.js': ['scripts/hbs/*.hbs']
        }
      },
      tests: {
        options: {
        },
        files: {
          'tmp/templates.js': ['test/fixtures/*.hbs']
        }
      },
      // custom_options: {
      //   options: {
      //     separator: ': ',
      //     punctuation: ' !!!'
      //   },
      //   files: {
      //     'tmp/custom_options': ['test/fixtures/testing', 'test/fixtures/123']
      //   }
      // }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean:tests', 'template7_combine:tests', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['template7_combine:defaults']);

};
