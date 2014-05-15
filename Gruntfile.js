module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'watch': {
      scripts: {
        files: ['./source/**/*'],
        tasks: ['compass','jshint'],
        options: {
          nospawn: true
        }
      }
    },
    'compass': {
      dev: {
        options: {
          sassDir: 'source/scss',
          cssDir: 'source/css'
        }
      }
    },
    'jshint': {
      files: ['./*.js']
    },
    'connect': {
      'static': {
        options: {
          base: 'source/',
          hostname: 'localhost',
          port: 8001
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task(s)
  grunt.registerTask('default', [ 'connect', 'compass', 'watch']);

};