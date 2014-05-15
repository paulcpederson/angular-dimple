module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'watch': {
      source: {
        files: ['./source/**/*'],
        tasks: ['jshint', 'concat', 'uglify'],
        options: {
          nospawn: true
        }
      },
      examples: {
        files: ['./examples/js/*.js'],
        tasks: ['jshint'],
        options: {
          nospawn: true
        }
      },
      sass: {
        files: ['./examples/scss/**/*'],
        tasks: ['compass'],
        options: {
          nospawn: true
        }
      }
    },
    'compass': {
      dev: {
        options: {
          sassDir: 'examples/scss',
          cssDir: 'examples/css'
        }
      }
    },
    'jshint': {
      files: [
        './source/**/*.js',
        './examples/js/app.js',
        './examples/js/controllers.js',
        './examples/js/directives.js',
        './examples/js/filters.js',
        './examples/js/services.js'
      ]
    },
    'concat': {
      options: {
        stripBanners: true,
        banner: '/*! Angular-Dimple - <%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '*   https://github.com/geoloqi/angular-dimple\n' +
        '*   Licensed ISC */\n'
      },
      dist: {
        src: ['source/*.js'],
        dest: 'dist/angular-dimple.js'
      },
      examples: {
        src: ['source/*.js'],
        dest: 'examples/js/lib/angular-dimple.js'
      },
    },
    'uglify': {
      dist: {
        files: {
          'dist/angular-dimple.min.js': ['source/*.js']
        }
      },
      examples: {
        files: {
          'examples/js/lib/angular-dimple.min.js': ['source/*.js']
        }
      }
    },
    'connect': {
      'static': {
        options: {
          base: 'examples/',
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
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s)
  grunt.registerTask('default', [ 'connect', 'jshint', 'concat', 'uglify', 'compass', 'watch']);

};