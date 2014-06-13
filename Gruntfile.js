/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    uglify: {
      options: {
        banner: '/*! icase.js - v0.1.0 - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
                'Rob Crawford; Licensed MIT */\n',
      },
      dist: {
        src: 'src/icase.js',
        dest: 'dist/icase.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task.
  grunt.registerTask('default', ['uglify']);

};