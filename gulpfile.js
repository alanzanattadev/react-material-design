var gulp = require('gulp');
var gutil = require('gulp-util');
var watchify = require('watchify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var assign = require('lodash.assign');
var react = require('gulp-react');
var reactify = require('reactify');
var uglify = require('gulp-uglify');
var babelify = require('babelify');
var babel = require('gulp-babel');

// -----------------------
//        CONFIG
// -----------------------

var paths = {
  entry: 'lib/index.js',
  bundle: 'bundle.js',
  build: './dist',
  sourcemaps: './',
  js: 'lib/**/*.?(js|jsx)',
  browser: 'dist/',
  packageJson: 'package.json',
  bowerJson: 'bower.json'
};

// -----------------------
// -----------------------
var customOpts = {
  entries: [paths.entry],
  transform: [babelify],
  extensions: [".jsx", ".js"],
  debug: true
};
var opts = assign({}, watchify.args, customOpts);
var simpleSystem = browserify(opts);
var system;

function getBuildSystem(name) {
  return function() {
    if (name == "watch" && system === undefined) {
      system = watchify(simpleSystem);
      system.on('update', function() {
        getBuildSystem("")().on('end', function () {
          browserSync.reload();
        });
      }); // on any dep update, runs the bundler
      system.on('log', gutil.log); // output build logs to terminal
    }
    else if (name == "simple")
      system = simpleSystem;
    return system.bundle()
      // log errors if they happen
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source(paths.bundle))
      // optional, remove if you don't need to buffer file contents
      .pipe(buffer())
      // optional, remove if you dont want sourcemaps
      .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
        .pipe(uglify())
      .pipe(sourcemaps.write(paths.sourcemaps)) // writes .map file
      .pipe(gulp.dest(paths.build))
  }
}

gulp.task('server-npm:build', function() {
  gulp.src(paths.packageJson)
    .pipe(gulp.dest(paths.build));
});

gulp.task('server-npm:watch', function() {
  gulp.watch(paths.packageJson, ['server-npm:build']);
});


gulp.task('browserify:watch', getBuildSystem("watch"));

gulp.task('browserify:build', getBuildSystem("simple"));

gulp.task('build', ["browserify:build", "server-npm:build"]);
gulp.task('watch:build', ['browserify:watch', "server-npm:watch"]);
gulp.task('watch', ['watch:build']);
gulp.task('default', ['build', 'watch']);
