/**
 * gulp
 * $ npm install gulp browser-sync gulp-watch gulp-plumber gulp-babel babel-preset-es2015 --save-dev
 */

// Load plugins
var gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
    watch = require('gulp-watch'),
    plumber = require('gulp-plumber'),
	babel = require('gulp-babel');

// Watch
gulp.task('watch', function () {

	gulp.watch("./src/js/**/*.js", ['transpiler']);
	gulp.watch("./index.html", ['reload']);
	gulp.watch("./js/**/*.js", ['reload']);

});

gulp.task('reload', function () {
	browserSync.reload();
});

gulp.task('transpiler', function () {
	return gulp.src('src/js/app.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('js'));
});

gulp.task('serve', ['watch'], function () {

	browserSync.init({
		notify: false,
        server: {
            baseDir: "./"
        }
	});

});

gulp.task('default', ['serve']);