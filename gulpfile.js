var gulp = require('gulp'),
    babelify = require('babelify'),
    browserify = require('browserify')
    source = require('vinyl-source-stream');

var appDir = './src/client/app';
var buildDir = './src/client/public';

gulp.task('build', function () {

    return browserify({
        entries: appDir + '/app.jsx',
        debug: true
    }).transform(babelify, { presets: ['es2015', 'react'] })
        .bundle()
        .pipe(source('script.js'))
        .pipe(gulp.dest(buildDir + "/js"))
});


