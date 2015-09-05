module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                //    reporter: require('jshint-stylish')
            },
            // target: ['file.js'],
            all: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js']
        },
        less: {
            // options: {
            //     paths: ['src/css/test']
            // },
            // // target name
            //  files: {
            //   "test.css": "test.less"
            // }


            options: {

                paths: ["src/css/test"]
            },
            files: {
                expand: true,
                cwd: "src/css/test",
                src: ["**/*.less"],
                dest: "build/css/test",
                ext: ".css"
            }



        },
        copy: {
            main: {
                expand: true,
                cwd: 'src/',
                src: ['**'],
                dest: 'build/'
            }


        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            // build: {
            //     src: 'src/<%= pkg.name %>.js',
            //     dest: 'build/<%= pkg.name %>.min.js'
            // }

            buildall: { //任务三：按原文件结构压缩js文件夹内所有JS文件
                files: [{
                    expand: true,
                    cwd: 'src/js', //js目录下
                    src: '**/*.js', //所有js文件
                    dest: 'build/js' //输出到此目录下
                }]
            }

        },
        connect: {
            server: {
                options: {
                    port: 9000,
                    base: 'src',
                    keepalive: true,
                    open: {
                        target: 'http://localhost:9000'
                    }
                }
            }
        }
    });

    // 加载包含 "uglify" 任务的插件。
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // 默认被执行的任务列表。
    grunt.registerTask('default', ['less', 'connect']);
    //  grunt.registerTask('default', ['uglify','copy']);
    //grunt.registerTask('default', ['uglify', 'jshint']);

};