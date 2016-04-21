module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            sass: {
                files: [
                    "src/**/*.scss"

                ],
                tasks: ['sass']
            },
            gruntf: {
                files: [
                    "Gruntfile.js"
                ],
                tasks: ['concat']
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'dist/css/main.css': 'src/scss/app.scss'
                }
            }
        },
        concat: {
            options: {
                separator: ';',
            },

            dist: {
                src: [
                    'bower_components/jquery/dist/jquery.min.js',
                    'bower_components/angular/angular.min.js',
                    'bower_components/angular-ui-router/release/angular-ui-router.js',
                    'bower_components/underscore/underscore-min.js'
                ],
                dest: 'dist/js/built.js',
            },

        },
        open: {
            dev: {
                path: 'http://localhost:9000/www/index.html'
            }
        },
        serve: {
            options: {
                port: 9000
            },
            tasks: ['open:dev']
        }


    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-serve');
    // grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');


    grunt.registerTask('default', ['sass', 'concat', 'open:dev','serve']);

};
