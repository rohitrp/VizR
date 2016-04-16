var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var lib = require('bower-files')({
  "overrides": {
    "bootstrap": {
      "main": [
        "less/bootstrap.less",
        "dist/css/bootstrap.css",
        "dist/js/bootstrap.js"
      ]
    }
  }
});

var utilities = require('gulp-util');
var bulidProduction = utilities.env.production;
var del = require('del');

var shell = require('gulp-shell');


//////////////// TYPESCRIPT /////////////////

// clean task
gulp.task('tsClean', function () {
  return del(['app/**/*.js', 'app/**/*.js.map']);
});

// clean and compile
gulp.task('ts', ['tsClean'], shell.task([
  'tsc'
]));


/////////////// BOWER ///////////////////////
gulp.task('jsBowerClean', function () {
  return del(['./build/js/vendor.min.js']);
});

gulp.task('jsBower', ['jsBowerClean'], function () {
  return gulp.src(lib.ext('js').files)
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});

gulp.task('cssBowerClean', function () {
  return del(['./build/css/vendor.css']);
});

gulp.task('cssBower', ['cssBowerClean'], function () {
  return gulp.src(lib.ext('css').files)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('bower', ['jsBower', 'cssBower']);


//////////////// SERVER /////////////////////

gulp.task('serve', function () {
  gulp.watch(['app/*.ts'], ['ts']);
});


/////////////// BUILD //////////////////////

gulp.task('build', ['ts'], function () {
  gulp.start('bower');
});
