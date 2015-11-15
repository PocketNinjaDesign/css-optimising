
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var copy = require('gulp-copy');

// https://www.npmjs.com/package/gulp-sass
gulp.task('sass', function() {
  gulp.src('./dev/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('copy', function() {
  gulp.src(['./dev/**/*.html'])
    .pipe(gulp.dest('./public/'));
});

gulp.task('build', ['sass', 'copy'], function() {
  console.log('build completed');
});