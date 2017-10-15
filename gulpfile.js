// https://www.browsersync.io/docs/gulp
var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// variables paths
var path = {
  src: 'SKETCHS/',
};

// func. init browser-sync server
gulp.task('initBrowserSync', function () {
  browserSync.init({

    // browserSync options
    server: {
      baseDir: path.src,
      directory: true,
    },
    port: 8080,

    //	reloadDelay: 200
    //	reloadOnRestart: false
    //	proxy: 'local.dev'
  });
});

// default gulp func.
gulp.task('default', ['initBrowserSync'], function () {

  // using manual reload
  gulp.watch(path.src + '**/*.*').on('change', browserSync.reload);
});
