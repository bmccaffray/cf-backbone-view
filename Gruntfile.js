module.exports = function(grunt){
	//require('matchdep').filterdev('grunt-*').foreach(grunt.loadnpmtasks)
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-mocha');

	grunt.initConfig({
		clean: {
			dev: {
				src: ['build/']
			}
		},
		copy: {
			dev: {
				expand: true,
				cwd: 'app/',
				src: ['*.html', '*.css'],
				dest: 'build/',
				filter: 'isFile'
			}
		},
		browserify: {
			dev: {
				options: {
					transform: ['debowerify', 'hbsfy'],
					debug: true
				},
				src: ['app/js/**/*.js'],
				dest: 'build/bundle.js'
			},
			test: {
				options: {
					transform: ['debowerify', 'hbsfy'],
					debug: true
				},
				src: ['test/mocha/eq*.js'],
				dest: 'test/testbundle.js'
			}
		},
		mocha: {
			backbonetest: {
				src:['test/test.html'],
				options: {
					run: true
				}
			}
		}
	});

	grunt.registerTask('build:dev', ['clean:dev', 'browserify:dev', 'copy:dev']);
	grunt.registerTask('build:test', ['browserify:test', 'mocha:backbonetest']);
}