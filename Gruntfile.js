module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {                            //
                options: {                       // Target options
                    style: 'expanded'
                },
                files: {                         // Dictionary of files
                    'css/styles.css': 'scss/styles.scss'       // 'destination': 'source'
                }
            }
        },
        concat: {
            javascript: {
                files: {
                    'js/main.js': ['js/libs/*.js','js/modules/*.js','js/*.js', '!js/main.js', '!js/main.min.js'],
                }
            },
            css: {
                files: {
                    'css/styles.css': ['css/*.css']
                }
            },
            scss: {
                files: {
                    'scss/styles.css': ['css/*.css', 'scss/**/*.scss']
                }
            }
        },
        uglify:{
            javascript: {
                files:{
                    'js/main.min.js': ['js/main.js']
                }
            }
        },
        watch: {
            javascript: {
                files: ['js/*.js', 'js/**/*.js', '!js/main.js', '!js/main.min.js'],
                tasks: ['concat:javascript', 'uglify:javascript']
            },
            css: {
                files: ['scss/*.scss', 'scss/**/*.scss'],
                tasks: ['sass']
            }
        }
    });

    // Load the plugins tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['watch']);

};
