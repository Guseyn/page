module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  require('grunt-browserify')(grunt);
  require('grunt-contrib-uglify-es')(grunt);

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
          cwd: '<%= config.staticJs %>',
          src: ['**/*.js'],
          dest: '<%= config.outStaticJs %>',
          ext: '.js'
        }]
      }
    },
    browserify: {
      dist: {
        files: {
          '<%= config.bundle %>': ['<%= config.outStaticJs %>/**/*.js']
        }
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          '<%= config.minBundle %>': ['<%= config.bundle %>']
        }
      }
    }
  });

  // Default task(s).
  grunt.registerTask('default', ['babel', 'browserify', 'uglify']);

};
