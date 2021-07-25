var gulp = require('gulp');
var args = require('yargs').argv;
var config = require('./gulp.config')();
var del = require('del');

// var $ = require('gulp-load-plugins')();
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var util = require('gulp-util');
var print = require('gulp-print').default;
var gulpIf = require('gulp-if');
var plumber = require('gulp-plumber');

gulp.task('vet', function () {
    log('Analyse source with jshint and jscs');
    return gulp.src(config.alljs)
    .pipe(gulpIf(args.verbose, print()))
    .pipe(jscs())
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish', { verbose: true }))
    .pipe(jshint.reporter('fail'));
});

// gulp.task('styles', ['clean-styles'], function(){
//     log('Compiling Less --> Css');
//     gulp.src(config.less)
//     .pipe(plumber())
//     .pipe(less())
//     .pipe(autoprefixer({browsers:['last 2 version', '> 5%']}))
//     .pipe(gulp.dest('./.tmp/'));
// });

function errorLogger(error) {
    log('*** start of error ***');
    log(error);
    log('*** End of error ***');
    this.emit('end');
}
gulp.task('clean-styles', function (done) {
    var files = config.temp + '**/*.css';
    clean(files, done);
});

function clean(path, done) {
    log('Cleaning: ' + util.colors.blue(path));
    del(path, done);
}

function log(msg) {
    if (typeof (msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                util.log(util.colors.blue(msg[item]));
            }
        }
    } else {
        util.log(util.colors.blue(msg));
    }
}