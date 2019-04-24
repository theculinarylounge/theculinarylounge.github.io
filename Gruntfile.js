
module.exports = function (grunt) {


    grunt.initConfig({
        imagemin: {
            static: {
                options: {
                    optimizationLevel: 3,
                    // svgoPlugins: [{removeViewBox: false}],
                    // use: [mozjpeg()] // Example plugin usage
                },
                files: {
                    expand: true,
                    cwd: '_site/assets/img',
                    src: ['**/*.{png,jpg,gif}'],
                    // src: ['**/*.{png,jpg,gif}'],
                    dest: '_site/assets/img2',
                }
            },
            // dynamic: {
            //     files: [{
            //         expand: true,
            //         cwd: 'src/',
            //         src: ['**/*.{png,jpg,gif}'],
            //         dest: 'dist/'
            //     }]
            // }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('default', ['imagemin']);
};