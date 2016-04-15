var gulp = require('gulp');
var gutil = require('gulp-util');
var babel = require('gulp-babel');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var concat = require('gulp-concat');
var webpack = require('webpack');
var webpackServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.js');


// -----------------------
//        CONFIG
// -----------------------

var paths = {
  build: './dist',
  js: 'lib/**/*.?(js|jsx)',
  packageJson: 'package.json',
  style: 'tests/real/*.?(scss|css)',
  css: 'style.css',
  testBuild: 'www/'
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

gulp.task('webpack:build', function(callback) {
  webpack(webpackConfig, function(err, stats) {
    if(err)
      throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({}));
    callback();
  });
});

gulp.task('webpack:serve', function() {
  var compiler = webpack(webpackConfig);
  var server = new webpackServer(compiler, {
    contentBase: "www/",
    historyApiFallback: true,
  });
  server.listen(7080, 'localhost', function(err) {
    if (err)
      throw new gutil.PluginError("webpack-dev-server", err);
    gutil.log("[webpack-dev-server]", "http://localhost:7080/webpack-dev-server/");
  });
});

gulp.task('sass', function() {
  gulp
    .src(paths.style)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat(paths.css))
    .pipe(minifyCss())
    .pipe(gulp.dest(paths.testBuild));
});

gulp.task('sass:watch', ['sass'], function() {
  gulp.watch(paths.style, function() {
    gulp
      .src(paths.style)
      .pipe(sass().on('error', sass.logError))
      .pipe(concat(paths.css))
      .pipe(minifyCss())
      .pipe(gulp.dest(paths.testBuild))
  });
});

gulp.task('test-real:build', function() {
  gulp.src('tests/real/index.html')
    .pipe(gulp.dest('www/'));
});

gulp.task('test-build:watch', ['sass:watch'], function() {
  gulp.watch('tests/real/index.html', ['test-real:build']);
});

gulp.task('build', ["components:build", "npm:build", "sass", "test-real:build", "webpack:build"]);
gulp.task('watch:build', ['components:watch', "npm:watch"]);
gulp.task('watch:webpack', ['webpack:serve']);
gulp.task('watch', ['watch:build', 'watch:webpack', 'test-build:watch']);
gulp.task('default', ['build', 'watch']);
