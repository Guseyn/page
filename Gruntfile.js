// Thanks to:
// https://github.com/babel/grunt-babel/issues/5,
// https://stackoverflow.com/questions/29293083/grunt-with-babel-and-browserify

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  require('grunt-browserify')(grunt);

  // Project configuration.
  grunt.initConfig({
    config: grunt.file.readJSON('config.json'),
    babel: {
      options: {
        sourceMap: false,
        presets: ['@babel/preset-env']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.pageStaticJsFilesDirectory %>',
          src: ['**/*.es6.js'],
          dest: '<%= config.pageOutStaticJsFilesDirectory %>',
          ext: '.js'
        }]
      }
    },
    browserify: {
      dist: {
        files: {
          '<%= config.pageBundle %>': ['<%= config.pageOutStaticJsFilesDirectory %>/**/*.js']
        }
      }
    }
  });

  // Default task(s).
  grunt.registerTask('default', ['babel', 'browserify']);

};
