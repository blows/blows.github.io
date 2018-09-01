// gulpfile.js

// gulp-packages
var gulp = require('gulp');
var del =  require('del');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

var postcss = require('gulp-postcss');
var cssnext = require('postcss-cssnext');
var nano = require('gulp-cssnano');
var atImport = require('postcss-import');
var sourcemaps = require('gulp-sourcemaps');

var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');

var livereload = require('gulp-livereload');
var inlinesource = require('gulp-inline-source');

gulp.task('clean', function () {
	return del([
		'dist/*']);
});

// styles
var processors = [
	atImport,
	cssnext({
		'browsers': ['last 2 version'],
		'features': {
			'customProperties': {
				preserve: true,
				appendVariables: true
			},
			'colorFunction': true,
			'customSelectors': true,
			'rem': false
		}
	})
];

gulp.task('styles', function(){
	return gulp.src('src/main.css')
	.pipe(sourcemaps.init())
	.pipe(postcss(processors))
	.pipe(gulp.dest('dist/'))
	.pipe(nano({discardComments: {removeAll: true}}))
	.pipe(rename({
		suffix: '.min'
	}))
	.pipe(sourcemaps.write('maps'))
	.pipe(gulp.dest('dist/'))
});

gulp.task('scripts:custom', function() {
  return gulp.src('src/*.js')
    .pipe(jshint.reporter('default'))
    .pipe(concat('script.js'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/'));
});

gulp.task('scripts:min', function() {
  return gulp.src('/*.min.js')
    .pipe(gulp.dest('dist/'))
});

// scripts
gulp.task('scripts', gulp.series('scripts:custom', 'scripts:min'));

gulp.task('watch', function() {
  gulp.watch('src/*.css', gulp.series('styles'));
  gulp.watch('src/*.js', gulp.series('scripts'));
});

// Default Task
gulp.task('default', gulp.series('clean', 'styles', 'scripts', 'watch'));
