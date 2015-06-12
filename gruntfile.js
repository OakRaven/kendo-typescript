module.exports = function (grunt) {
  grunt.initConfig({

    clean: {
      prod: ['dist/', 'tmp/'],
      dev: ['dist/js/', 'dist/app/**/*', 'tmp/']
    },

    less: {
      build: {
        src: 'assets/less/*',
        dest: 'build/css/app.css'
      }
    },

    includes: {
      default: {
        cwd: '',
        src: 'site/index.html',
        dest: 'tmp/index.tmp.html',
        options: {
          flatten: true,
          includePath: ''
        }
      }
    },

    includeSource: {
      options: {
        basePath: 'dist',
        baseUrl: ''
      },
      default: {
        files: {
          'dist/index.html': 'tmp/index.tmp.html'
        }
      }
    },

    copy: {
      dev: {
        files: [
          { expand: true, cwd: 'tmp/', src: ['app/**/*'], dest: 'dist/' },
          { expand: true, cwd: 'site/', src: ['js/**/*', 'css/**/*'], dest: 'dist/' }
        ],
      },
      prod: {
        files: [
          { expand: true, cwd: 'site/', src: ['js/ven**/*.js', 'js/**/*.js.map'], dest: 'dist/' },
          { expand: true, cwd: 'site/', src: ['js/**/*.js'], dest: 'dist/' }
        ],
      }
    },

    serve: {
      path: 'dist',
      options: {
        port: 9000
      }
    },

    ts: {
      default: {
        src: 'site/app/**/*.ts',
        dest: 'tmp/app'
      }
    },

    cachebreaker: {
      prod: {
        options: {
          match: ['app.min.js'],
          replacement: 'md5',
          src: {
            path: 'dist/js/app.min.js'
          }
        },
        files: {
          src: ['dist/index.html']
        }
      }
    },

    concat: {
      options: {
        sourceMap: true
      },
      dist: {
        src: ['tmp/app/**/*.js'],
        dest: 'tmp/js/app.all.js'
      }
    },

    uglify: {
      options: {
        sourceMap: true,
        sourceMapIncludeSources: true,
        sourceMapIn: '<%= concat.dist.dest %>.map'
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'dist/js/app.min.js'
      }
    },

    watch: {
      typescript: {
        files: ['site/**/*.ts'],
        tasks: ['ts', 'includes', 'copy:dev', 'includeSource']
      },
      html: {
        files: ['site/**/*.html'],
        tasks: ['includes', 'copy:dev', 'includeSource']
      }
    }

  });

  // Load plugins used by this task gruntfile
  grunt.loadNpmTasks('grunt-includes');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-include-source');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-serve');
  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks('grunt-cache-breaker');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Task definitions
  grunt.registerTask('build-prod', ['clean:prod', 'ts', 'less', 'concat', 'uglify', 'includes', 'copy:prod', 'includeSource', 'cachebreaker:prod']);
  grunt.registerTask('build-dev', ['clean:dev', 'ts', 'less', 'includes', 'copy:dev', 'includeSource']);
  grunt.registerTask('default', ['build-dev']); goto
};