const gulp = require('gulp');
const source = require('vinyl-source-stream');
const browserify = require('browserify');
const babel = require('babelify');

gulp.task('default', ['copy'], function() {
    return gulp.watch('src/**/*js', function() {
	return browserify('src').transform(babel).bundle().pipe(source('bundle.js')).pipe(gulp.dest('dist'));
    })
})

gulp.task('copy', function() {
    return gulp.src('public/index.html').pipe(gulp.dest('dist'));
})
