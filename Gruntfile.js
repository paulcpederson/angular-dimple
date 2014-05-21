module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'watch': {
      source: {
        files: ['./source/**/*'],
        tasks: ['concat', 'uglify', 'jshint'],
        options: {
          nospawn: true
        }
      },
      examples: {
        files: ['./site/js/*.js'],
        tasks: ['jshint'],
        options: {
          nospawn: true
        }
      },
      sass: {
        files: ['./site/scss/**/*'],
        tasks: ['compass'],
        options: {
          nospawn: true
        }
      },
      docs: {
        files: ['docs/**'],
        tasks: ['md2html'],
        options: {
          nospawn: true
        }
      }
    },
    'compass': {
      dev: {
        options: {
          sassDir: 'site/scss',
          cssDir: 'site/css'
        }
      }
    },
    'jshint': {
      files: [
        './source/**/*.js',
        './site/js/*.js'
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
        dest: 'site/js/lib/angular-dimple.js'
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
          'site/js/lib/angular-dimple.min.js': ['source/*.js']
        }
      }
    },
    'connect': {
      'static': {
        options: {
          base: 'site/',
          hostname: 'localhost',
          port: 8001
        }
      }
    },
    'md2html': {
      api: {
        options: {
          layout: 'docs/layout.html'
        },
        files: [{ src: 'docs/doc.md', dest: 'site/documentation/index.html'}]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-md2html');

  // Default task(s)
  grunt.registerTask('default', [ 'connect', 'jshint', 'concat', 'uglify', 'md2html', 'compass', 'watch']);

};