module.exports = function(grunt) {
	'use strict';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		dir: {// directory list
			src: 'src',
			build: 'build',

			pc: 'root',
			sp: 'root/sp',

			sass: 'sass',
			css: 'css',
			js: 'js',
			img: 'img'
		},

		rename: {
		},
		clean: {
			buildDirpc: {
				src: [
					'<%= dir.build %>/<%= dir.pc %>/**',
					'!<%= dir.build %>/<%= dir.sp %>/'
				]
			},
			buildDirsp: {
				src: '<%= dir.build %>/<%= dir.sp %>/'
			}
		},
		validation: {
			options: {
				doctype: 'HTML5',
				charset: 'utf-8',
				path: 'ignore/html-validation/validation-status.json',
				reportpath: 'ignore/html-validation/validation-report.json'
				// reset: grunt.option('reset') || false,
				// stoponerror:false,
				// remotePath: "http://decodize.com/",
				// remoteFiles: ["html/slidemote-universal-remote-control-for-html5-presentations",
				// 	"GAE/linktomob-share-your-links-quickly-and-easily-on-mobile-devices/",
				// 	"html/getting-started-with-yeoman-1-dot-0-beta-on-windows/",
				// 	"html/moving-from-wordpress-to-octopress/",
				// 	"css/site-preloading-methods/",
				// 	"html/sublime-text-2-bidirectional-language-support-plugin/"]
				// remoteFiles: "validation-files.json",
				// relaxerror: [
				// 	'Bad value X-UA-Compatible for attribute http-equiv on element meta.',
				// 	'Element title must not be empty.'
				// ]
			},
			files: {
				src: [
					'<%= dir.src %>/<%= dir.pc %>/*.html',
					'<%= dir.src %>/<%= dir.sp %>/*.html',
					'<%= dir.src %>/<%= dir.pc %>/**/*.html',
					'<%= dir.src %>/<%= dir.sp %>/**/*.html',
					'!ignore/*.html',
					'!test/*.html',
					'!404.html'
				]
			}
		},
		sass: {
			options: {
				style: 'expanded',
				lineNumbers: true,
				sourcemap: true
			},
			pc: {
				expand: true,
				cwd: '<%= dir.src %>/<%= dir.pc %>/<%= dir.sass %>/',
				src: '*.scss',
				dest: '<%= dir.src %>/<%= dir.pc %>/<%= dir.css %>/',
				ext: '.css'
			},
			sp: {
				expand: true,
				cwd: '<%= dir.src %>/<%= dir.sp %>/<%= dir.sass %>/',
				src: '*.scss',
				dest: '<%= dir.src %>/<%= dir.sp %>/<%= dir.css %>/',
				ext: '.css'
			}
		},
		cssmin: {
			pc: {
				expand: true,
				cwd: '<%= sass.pc.dest %>/',
				src: '*.css',
				dest: '<%= dir.build %>/<%= dir.pc %>/<%= dir.css %>/'
			},
			sp: {
				expand: true,
				cwd: '<%= sass.sp.dest %>/',
				src: '*.css',
				dest: '<%= dir.build %>/<%= dir.sp %>/<%= dir.css %>/'
			}
		},
		csslint: {
			options: {
				csslintrc: '.csslintrc'
			},
			lintpc: {
				src: '<%= sass.pc.dest %>/*.css'
			},
			lintsp: {
				src: '<%= sass.sp.dest %>/*.css'
			}
		},
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			pc: {
				files: {
					src: '<%= dir.src %>/<%= dir.pc %>/<%= dir.js %>/*.js'
				}
			},
			sp: {
				files: {
					src: '<%= dir.src %>/<%= dir.sp %>/<%= dir.js %>/*.js'
				}
			}
		},
		uglify: {
			init: {
				options: {
					preserveComments: 'some'
				},
				expand: true,
				mangle: true,
				cwd: '<%= dir.src %>/<%= dir.js %>/',
				src: '**/*.js',
				dest: '<%= dir.src %>/<%= dir.js %>/'
			},
			pc: {
				options: {
					preserveComments: 'some'
				},
				expand: true,
				mangle: true,
				cwd: '<%= dir.src %>/<%= dir.pc %>/<%= dir.js %>/',
				src: ['*.js', '!lib/*.js', '!top.js'],
				dest: '<%= dir.build %>/<%= dir.pc %>/<%= dir.js %>/'
			},
			sp: {
				options: {
					preserveComments: 'some'
				},
				expand: true,
				mangle: true,
				cwd: '<%= dir.src %>/<%= dir.sp %>/<%= dir.js %>/',
				src: ['*.js', '!lib/*.js', '!top.js'],
				dest: '<%= dir.build %>/<%= dir.sp %>/<%= dir.js %>/'
			}
		},
		styleguide: {
			options: {
				name: '<%= pkg.name %>'
			},
			pc: {
				options: {
				},
				files: {
					'ignore/docs/styledocco': '<%= sass.pc.cwd %>'
				}
			}
		},
		imagemin: {
			options: {
				optimizationLevel: 7
			},
			pc: {
				files: [{
					expand: true,
					cwd: '<%= dir.src %>/<%= dir.pc %>/<%= dir.img %>/',
					src: '**/*.{jpg,png,gif}',
					dest: '<%= dir.build %>/<%= dir.pc %>/<%= dir.img %>/'
				}]
			},
			sp: {
				files: [{
					expand: true,
					cwd: '<%= dir.src %>/<%= dir.sp %>/<%= dir.img %>/',
					src: '**/*.{jpg,png,gif}',
					dest: '<%= dir.build %>/<%= dir.sp %>/<%= dir.img %>/'
				}]
			}
		},
		copy: {
			buildpc: {
				expand: true,
				cwd: '<%= dir.src %>/<%= dir.pc %>/',
				src: [
					'<%= dir.js %>/lib/**',
					'*.html',
					'**/*.html',
					'!sp/**'
				],
				dest: '<%= dir.build %>/<%= dir.pc %>/'
			},
			buildsp: {
				expand: true,
				cwd: '<%= dir.src %>/<%= dir.sp %>/',
				src: [
					'<%= dir.js %>/lib/**',
					'*.html',
					'**/*.html'
				],
				dest: '<%= dir.build %>/<%= dir.sp %>/'
			}
		},
		// processhtml: {
		// 	build: {
		// 		options: {
		// 			commentMarker: 'process'
		// 		},
		// 		files: [{
		// 			expand: true,
		// 			cwd: '<%= dir.src %>/',
		// 			src: [],
		// 			dest: '<%= dir.build %>/'
		// 		}]
		// 	}
		// },
		connect: {
			livepc: {
				options: {
					port: 9008,
					base: '<%= dir.src %>/<%= dir.pc %>/'
				}
			},
			livesp: {
				options: {
					port: 9008,
					base: '<%= dir.src %>/<%= dir.sp %>/'
				}
			},
			demopc: {
				options: {
					port: 9008,
					keepalive: true,
					base: '<%= dir.build %>/<%= dir.pc %>/'
				}
			},
			demosp: {
				options: {
					port: 9008,
					keepalive: true,
					base: '<%= dir.build %>/<%= dir.sp %>/'
				}
			}
		},
		watch: {
			options: {
				livereload: true,
				spawn: false
			},
			pc: {
				files: [
					'<%= dir.src %>/<%= dir.pc %>/*.html',
					'<%= dir.src %>/<%= dir.pc %>/**/*.html',
					'<%= sass.pc.cwd %>/*.scss',
					'<%= sass.pc.cwd %>/import/*.scss',
					'<%= csslint.pc.src %>',
					'<%= dir.src %>/<%= dir.pc %>/<%= dir.js %>/*.js'
				],
				tasks: ['sass:pc', 'csslint:pc', 'styleguide:pc']
			},
			sp: {
				files: [
					'<%= dir.src %>/<%= dir.sp %>/*.html',
					'<%= dir.src %>/<%= dir.sp %>/**/*.html',
					'<%= sass.sp.cwd %>/*.scss',
					'<%= sass.sp.cwd %>/import/*.scss',
					'<%= csslint.sp.src %>',
					'<%= dir.src %>/<%= dir.sp %>/<%= dir.js %>/*.js'
				],
				tasks: ['sass:sp', 'csslint:sp']
			}//,
			// sass: {
			// 	files: [
			// 		'<%= dir.src %>/<%= dir.sass %>/*.scss',
			// 		'<%= dir.src %>/<%= dir.sass %>/import/*.scss'
			// 	],
			// 	tasks: ['sass']
			// },
			// css: {
			// 	files: [
			// 		'<%= dir.src %>/<%= dir.css %>/*.css'
			// 	],
			// 	tasks: ['csslint']
			// },
			// html: {
			// 	files: [
			// 		'<%= dir.src %>/*.html',
			// 		'<%= dir.src %>/**/*.html'
			// 	],
			// 	tasks: []
			// },
			// js: {
			// 	files: '<%= dir.src %>/<%= dir.js %>/*.js',
			// 	tasks: ['jshint']
			// }
		},
		'ftp-deploy': {
			testpc: {
				auth: {
					host: 'host',
					port: 21,
				authKey: 'key2'
				},
				src: '<%= dir.build %>/<%= dir.pc %>/',
				dest: '/path/',
				exclusions: ['.DS_Store']
			},
			testsp: {
				auth: {
					host: 'host',
					port: 21,
				authKey: 'key2'
				},
				src: '<%= dir.build %>/<%= dir.sp %>/',
				dest: '/path/',
				exclusions: ['.DS_Store']
			},
			uppc: {
				auth: {
					host: 'host',
					port: 21,
				authKey: 'key1'
				},
				src: '<%= dir.build %>/<%= dir.pc %>/',
				dest: '/path/',
				exclusions: ['.DS_Store']
			},
			upsp: {
				auth: {
					host: 'host',
					port: 21,
				authKey: 'key1'
				},
				src: '<%= dir.build %>/<%= dir.sp %>/',
				dest: '/path/',
				exclusions: ['.DS_Store']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-rename');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-html-validation');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	// grunt.loadNpmTasks('grunt-processhtml');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-styleguide');
	grunt.loadNpmTasks('grunt-ftp-deploy');


	grunt.registerTask('livepc', ['connect:livepc', 'watch:pc']);
	grunt.registerTask('livesp', ['connect:livesp', 'watch:sp']);
	grunt.registerTask('demopc', ['connect:demopc']);
	grunt.registerTask('demosp', ['connect:demosp']);

	grunt.registerTask('buildpc', [
		'clean:buildDirpc',
		'sass:pc',
		'validation',
		'csslint:pc',
		'cssmin:pc',
		'jshint:pc',
		'uglify:pc',
		'imagemin:pc',
		// 'processhtml:build',
		'copy:buildpc',
		'styleguide:pc'
	]);

	grunt.registerTask('buildsp', [
		'clean:buildDirsp',
		'sass:sp',
		'validation',
		'csslint:sp',
		'cssmin:sp',
		'jshint:sp',
		'uglify:sp',
		'imagemin:sp',
		// 'processhtml:build',
		'copy:buildsp'
	]);

	grunt.registerTask('testpc', ['ftp-deploy:testpc']);
	grunt.registerTask('testsp', ['ftp-deploy:testsp']);
	grunt.registerTask('uppc', ['ftp-deploy:uppc']);
	grunt.registerTask('upsp', ['ftp-deploy:upsp']);

};
