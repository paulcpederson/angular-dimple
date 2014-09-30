// ┌─────────────┐
// │ Gruntfile   │
// └─────────────┘
// Grunt wraps several tasks to ease development
// runs acetate, deploys the site, and tags new releases

// To draft a release, add GitHub credentials to user.js
var fs = require('fs');
var user = function(){};

if (fs.existsSync('./user.js')) {
  user = require('./user.js');
}

// Gets current version description from CHANGELOG.md
function findVersion(log) {
  var newVersion = log.split('## v')[1];
  var description = newVersion.substring(5,newVersion.length);
  return description;
}

// Javascript banner
var banner = '/*! Angular-Dimple - <%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
             '*   https://github.com/esripdx/angular-dimple\n' +
            '*   Licensed ISC */\n';
var project = 'esripdx/angular-dimple';
var repo = 'https://github.com/esripdx/angular-dimple.git';
var dist = 'angular-dimple.zip';

module.exports = function(grunt) {
  var currentVersion = 'v' + grunt.file.readJSON('package.json').version;
  var log = grunt.file.read('CHANGELOG.md');
  // var description = findVersion(log);

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    'acetate': {
      build: {
        config: 'acetate.conf.js'
      },
      watch: {
        config: 'acetate.conf.js',
        options: {
          watch: true,
          server: true
        }
      }
    },

    'watch': {
      sass: {
        files: ['docs/source/assets/css/**/*'],
        tasks: ['sass']
      },
      img: {
        files: ['docs/source/assets/img/**/*'],
        tasks: ['newer:imagemin']
      },
      js: {
        files: ['docs/source/assets/js/**/*', 'lib/**.*'],
        tasks: ['lib', 'jshint:docs', 'copy:docs']
      }
    },

    // Build site sass
    'sass': {
      expanded: {
        options: {
          style: 'expanded',
          sourcemap: 'none',
          loadPath: 'bower_components'
        },
        files: {
          'docs/build/assets/css/style.css': 'docs/source/assets/css/style.scss'
        }
      }
    },

    // Optimize images
    'imagemin': {
      doc: {
        files: [{
          expand: true,
          cwd: 'docs/source/assets/img',
          src: ['**/*.{png,jpg,svg}'],
          dest: 'docs/build/assets/img/'
        }]
      }
    },

    'jshint': {
      lib: [
        'lib/**/*.js'
      ],
      docs: [
        'docs/source/assets/js/**.js'
      ]
    },
    'concat': {
      options: {
        stripBanners: true,
        banner: banner
      },
      dist: {
        src: ['lib/*.js'],
        dest: 'dist/angular-dimple.js'
      }
    },
    'uglify': {
      dist: {
        files: {
          'dist/angular-dimple.min.js': ['lib/*.js']
        }
      }
    },
    'copy': {
      dist: {
        expand: true,
        cwd: 'dist/',
        src: ['*'],
        dest: 'docs/source/assets/js/lib/'
      },
      docs: {
        expand: true,
        cwd: 'docs/source/assets/js/',
        src: ['**/*'],
        dest: 'docs/build/assets/js/'
      },
      data: {
        expand: true,
        cwd: 'docs/source/data',
        src: ['*'],
        dest: 'docs/build/data/'
      }
    },

    // Make a zip file of the dist folder
    'compress': {
      main: {
        options: {
          archive: dist
        },
        files: [
          {
            src: ['dist/**'],
            dest: './'
          },
        ]
      }
    },
    // Bump the version on GitHub
    // 'github-release': {
    //   options: {
    //     repository: project,
    //     auth: user(),
    //     release: {
    //       tag_name: currentVersion,
    //       name: currentVersion,
    //       body: description,
    //       prerelease: true
    //     }
    //   },
    //   files: {
    //     src: [dist]
    //   }
    // },
    'gh-pages': {
      options: {
        base: 'build',
        repo: repo
      },
      src: ['**']
    }
  });

  grunt.registerTask('lib', ['jshint:lib', 'concat:dist', 'uglify:dist']);
  grunt.registerTask('deploy', ['lib', 'acetate:build', 'sass', 'newer:imagemin', 'gh-pages']);
  grunt.registerTask('release', ['lib', 'compress', 'github-release']);

  grunt.registerTask('default', ['lib', 'jshint:docs', 'copy', 'newer:imagemin', 'sass', 'acetate:watch', 'watch']);

};