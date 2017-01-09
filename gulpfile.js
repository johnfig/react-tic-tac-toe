var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var livereload = require('gulp-livereload');

gulp.task('build', function () {
  return browserify({entries: './js/app.js.jsx', extensions: ['.jsx'], debug: true})
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'))
    .pipe(livereload());

});

gulp.task('watch', ['build'], function () {
  livereload.listen();
  gulp.watch('*/*.js.jsx', ['build']);
});

gulp.task('default', ['watch']);
