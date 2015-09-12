var gulp = require('gulp');
var gutil = require('gulp-util');
var babel = require('gulp-babel');

// -----------------------
//        CONFIG
// -----------------------

var paths = {
  build: './dist',
  js: 'lib/**/*.?(js|jsx)',
  packageJson: 'package.json',
};

gulp.task('components:build', function() {
  gulp.src(paths.js)
    .pipe(babel())
    .pipe(gulp.dest(paths.build));
});

gulp.task('components:watch', function() {
  gulp.watch(paths.js, ['components:build']);
});

gulp.task('npm:build', function() {
  gulp.src(paths.packageJson)
    .pipe(gulp.dest(paths.build));
});

gulp.task('npm:watch', function() {
  gulp.watch(paths.packageJson, ['npm:build']);
});

gulp.task('build', ["components:build", "npm:build"]);
gulp.task('watch:build', ['components:watch', "npm:watch"]);
gulp.task('watch', ['watch:build']);
gulp.task('default', ['build', 'watch']);
