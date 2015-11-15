
'use strict';

var gulp = require('gulp');

// https://www.npmjs.com/package/gulp-sass
var sass = require('gulp-sass');
var copy = require('gulp-copy');

// https://www.npmjs.com/package/gulp-minify-css
var minifyCss = require('gulp-minify-css');

// Directory for local version of site
// eg. 'C:/xampp/htdocs/gulp-test'
var localDir = 'C:/xampp/htdocs/gulp-test';


gulp.task('sass', function() {
  gulp.src('./dev/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('copy', function() {
  gulp.src(['./dev/**/*.html'])
    .pipe(gulp.dest('./public/'));
});

gulp.task('copy-to-local', function() {
  console.log('COPY TO LOCAL');
  // Copy folder to local directory
  if (localDir !== undefined) {
    gulp.src(['./public/**'])
      .pipe(gulp.dest(localDir));
  }
});

gulp.task('build', ['sass', 'copy'], function() {
  console.log('build completed');
});

gulp.task('full', ['sass', 'copy', 'copy-to-local'], function() {
  console.log('build completed');
});