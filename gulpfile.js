'use strict';

var gulp = require('gulp');
// https://www.npmjs.com/package/gulp-sass
var sass = require('gulp-sass');
var copy = require('gulp-copy');

// https://www.npmjs.com/package/gulp-autoprefixer
// https://github.com/postcss/autoprefixer/wiki/support-list
var autoprefixer = require('gulp-autoprefixer');

// https://www.npmjs.com/package/gulp-minify-css
var minifyCss = require('gulp-minify-css');

// Directory for local version of site
// uncomment the localDir line to point
// it to any folder you wish.
// eg. 'C:/xampp/htdocs/www/public'
var localDir;
//localDir = 'C:/xampp/htdocs/css-optimising';



gulp.task('sass', function() {
  gulp.src('./dev/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({ browsers: ['last 20 versions'] }))
    .pipe(minifyCss({ compatibility: 'ie8' }))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('copy', function() {
  return gulp.src(['./dev/**/*.html'])
    .pipe(gulp.dest('./public/'));
});

gulp.task('build', ['sass', 'copy']);

gulp.task('all', ['build'], function() {
  if (localDir !== undefined) {
    return gulp.src(['./public/**'])
      .pipe(gulp.dest(localDir));
  }
});

gulp.task('default', ['build']);