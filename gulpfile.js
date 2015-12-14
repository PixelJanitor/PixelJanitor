// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    sass   = require('gulp-sass'),
    jade = require('gulp-jade'),
    concat = require('gulp-concat'),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer'),
    csslint = require('gulp-csslint'),
    addsrc = require('gulp-add-src'),
    // sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    ghPages = require('gulp-gh-pages');

// define the default task and add the watch task to it
gulp.task('default', ['jade', 'sass', 'scripts', 'fonts', 'images', 'watch']);

gulp.task('jade', function() {
  gulp.src('source/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('public/'));
});

// buld css
gulp.task('sass', function() {
  del('public/stylesheets');
  return gulp.src('source/scss/*.scss')
    // .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: require('node-bourbon').includePaths
    }))
    // .pipe(sourcemaps.write())
    .pipe(csslint())
    .pipe(csslint.reporter())
    .pipe(addsrc('source/vendor/stylesheets/*.css'))
    .pipe(concat('styles.css'))
    .pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
    .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('scripts', function() {
  del('public/javascript');
  return gulp.src('source/javascript/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(uglify())
    .pipe(gulp.dest('public/javascript'));
});

gulp.task('fonts', function() {
  return gulp.src('source/fonts/**/*')
    .pipe(gulp.dest('public/fonts'));
});

gulp.task('images', function() {
  return gulp.src('source/images/**/*')
    .pipe(gulp.dest('public/images'));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
  gulp.watch('source/*.jade', ['jade']);
  gulp.watch('source/scss/**/*.scss', ['sass']);
  gulp.watch('source/javascript/**/*.js', ['scripts']);
});

gulp.task('deploy', function() {
  return gulp.src(['./public/**/*', 'source/fonts/**/*','source/CNAME'])
    .pipe(ghPages({
      message: 'deploy'
    }));
});
