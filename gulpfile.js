// https://www.browsersync.io/docs/gulp

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

var reload = browserSync.reload;


// variables paths
var path = {
	src: 'SKETCHS/'
};

// function to init browser-sync server
gulp.task('init-browser-sync', function () {
	browserSync.init({
		server: {
			baseDir: path.src,
			directory: true
		},
		port: 8080,
		//reloadDelay: 200
		//reloadOnRestart: false
		//proxy: 'local.dev'
	});
});

// function to watch


gulp.task('default', ['init-browser-sync'], function () {

	// watch function
	// gulp.watch(path.src + '**/*.*').on('change', browserSync.reload);

	// using manual reload
	gulp.watch(path.src + '**/*.*').on('change', reload);
});

//
