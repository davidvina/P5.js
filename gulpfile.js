var gulp		= require('gulp');
var browserSync	= require('browser-sync').create();

// Static server
// gulp.task('browser-sync', function () {
// 	browserSync.init({
// 		server: {
// 			baseDir: '01_objects/'
// 		}
// 	});
// });

gulp.task('watch', function() {
	return gulp.src("01_objects/*.scss")
		.pipe(browserSync.stream());
});
gulp.task('default', ['watch'], function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "01_objects/index.html"
        }
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch("01_objects/*.*", ['watch']);
});
 //
