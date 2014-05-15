module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'watch': {
      scripts: {
        files: ['./app/**/*'],
        tasks: ['compass','jshint'],
        options: {
          nospawn: true
        }
      }
    },
    'compass': {
      dev: {
        options: {
          sassDir: 'app/scss',
          cssDir: 'app/css'
        }
      }
    },
    'jshint': {
      files: ['./*.js']
    },
    'connect': {
      'static': {
        options: {
          base: 'app/',
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