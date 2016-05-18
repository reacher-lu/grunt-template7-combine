/*
 * grunt-template7-combine
 * https://github.com/reacher-lu/grunt-template7-combine
 *
 * Copyright (c) 2016 reacher
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('template7_combine', 'The best Grunt plugin ever.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: ', '
    });

    var tplsClub = {};
    var ln = grunt.util.normalizelf('\n');

    // grunt.log.writeln('this',this,this.files);

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {

      var context = '';

      var filter = function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      };

      var calcHTML = function(filepath){
        var filepaths = filepath.split('/');
        var name = filepaths[filepaths.length-1];
        return 'tplsClub.' + name + ' = tpls.compile(\''+ grunt.file.read(filepath) +'\');';
      };

      context += ';define(function() {' + ln + '  ';
      context += f.src.filter(filter).map(calcHTML).join('\n  ');
      context += ln + '  return tplsClub;'+ ln +'})';

      grunt.log.writeln('context',context);


      // var compiledTemplate = tpls.compile(src);
      // var context = {
      //     firstName: 'John',
      //     lastName: 'Doe'
      // };
      // var html = compiledTemplate(context);
      // $('body').html(html);

      // Write the destination file.
      grunt.file.write(f.dest, context);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
