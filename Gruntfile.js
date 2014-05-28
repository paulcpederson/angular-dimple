module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'gh-pages': {
      options: {
        base: 'site'
      },
      src: '**/*'
    },
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
        files: ['documentation/**'],
        tasks: ['markdown'],
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
        '*   https://github.com/esripdx/angular-dimple\n' +
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
    'markdown': {
      all: {
        files: [
          {
            expand: true,
            src: 'documentation/index.md',
            dest: 'site/',
            ext: '.html'
          }
        ],
        options: {
          template: 'documentation/layout.html',
          markdownOptions: {
            gfm: true,
            highlight: 'manual'
          }
        }
      },
      partials: {
        files: [
          {
            expand: true,
            src: 'documentation/partials/*.md',
            dest: 'site/',
            ext: '.html'
          }
        ],
        options: {
          template: 'documentation/blank.html',
          markdownOptions: {
            gfm: true,
            highlight: 'manual'
          }
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
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-markdown');

  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('build', ['test', 'concat', 'uglify', 'markdown', 'compass']);
  grunt.registerTask('develop', ['connect', 'build', 'watch']);
  grunt.registerTask('deploy', ['build', 'gh-pages']);
  grunt.registerTask('default', ['develop']);

};
