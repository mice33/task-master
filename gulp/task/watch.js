var gulp = require('gulp');
var config = require('config').gulp;
var livereload = require('gulp-livereload');
var watch = require('gulp-watch');

gulp.task('watch', ['less', 'stylus', 'watchify', 'image', 'jade'], function () {
  livereload.listen({
    start: true
  });

  watch(config.src.css + '/**/*.less', function () {
    gulp.start('less');
  }).on('change', livereload.changed);

  watch(config.src.css + '/**/*.styl', function () {
    gulp.start('stylus')
  }).on('change', livereload.changed);

  watch(config.src.js + '/**/*.js', function () {
    gulp.start('watchify')
  }).on('change', livereload.changed);

  watch(config.src.img + '/**/*.+(png|gif|jpg|eot|woff|ttf|svg|ico)', function () {
    gulp.start('image')
  });

  watch(config.src.view + '/**/*.jade', function () {
    gulp.start('jade')
  });
});
