var bootstrapRoot = 'node_modules/bootstrap-styl/';

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-replace');

  grunt.initConfig({
    clean: {
      dist: [ 'dist/*.html', 'dist/*.css', 'dist/*.js', 'dist/fonts', 'dist/images' ]
    },

    stylus: {
      pryv: {
        options: {
          paths: ['stylus', 'node_modules/bootstrap-styl/stylus'],
          compress: false,
          urlfunc: 'embedurl' // use embedurl('test.png') in our code to trigger Data URI embedding
        },
        files: {
          'dist/pryv.css': 'stylus/pryv.styl' // 1:1 compile
        }
      }
    },

    watch: {
      css: {
        files: 'stylus/*.styl',
        tasks: ['stylus'],
        options: {
          debounceDelay: 250
        }
      },
      html: {
        files: '*.html',
        tasks: ['replace'],
        options: {
          debounceDelay: 250
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: [
          'Android 2.3',
          'Android >= 4',
          'Chrome >= 20',
          'Firefox >= 24', // Firefox 24 is the latest ESR
          'Explorer >= 8',
          'iOS >= 6',
          'Opera >= 12',
          'Safari >= 6'
        ]
      },
      core: {
        options: {
          map: true
        },
        src: 'dist/pryv.css'
      }
    },

    cssmin: {
      pryv: {
        files: {
          'dist/pryv.min.css': ['dist/pryv.css']
        }
      }
    },

    copy: {
      bootstrapAssets: {
        files: [
          {
            expand: true,
            cwd: bootstrapRoot,
            src: 'fonts/**',
            dest: 'dist/'
          }
        ]
      },
      customAssets: {
        files: [
          {
            expand: true,
            cwd: 'assets/',
            src: '**',
            dest: 'dist/'
          }
        ]
      }
    },

    replace: {
      dist: {
        options: {
          patterns: [
            {
              match: /href="dist\//g,
              replacement: 'href="'
            },
            {
              match: /src="dist\//g,
              replacement: 'src="'
            }
          ]
        },
        files: {
          'dist/index.html': 'index.html'
        }
      }
    },

    uglify: {
      dist: {
        files: {
          'dist/bootstrap.min.js': [
            'js/transition.js',
            'js/alert.js',
            'js/button.js',
            'js/carousel.js',
            'js/collapse.js',
            'js/dropdown.js',
            'js/modal.js',
            'js/tooltip.js',
            'js/popover.js',
            'js/scrollspy.js',
            'js/tab.js',
            'js/affix.js'
          ].map(function (path) { return bootstrapRoot + path; })
        }
      }
    }
  });

  grunt.registerTask('default', [ 'clean', 'stylus', 'cssmin', 'copy', 'replace', 'uglify' ]);
};
