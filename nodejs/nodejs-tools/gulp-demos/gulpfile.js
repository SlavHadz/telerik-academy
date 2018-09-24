const gulp = require('gulp');

const mocha = require('gulp-mocha');

const stylus = require('gulp-stylus');
const babel = require('gulp-babel');
const clean = require('gulp-clean');

gulp.task('clean', () => {
    return gulp.src('./build', { read: false })
        .pipe(clean());
});

gulp.task('compile:stylus', () => {
    return gulp.src('./app/styl/**/*.styl')
        /*styl files*/
        .pipe(stylus())
        /*temporary css files */
        .pipe(gulp.dest('./build/css'));
});

gulp.task('compile:es2017', () => {
    return gulp.src('./app/es2017/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('./build/es2017'));
});

gulp.task('compile', ['clean'],
    () => {
        ['compile:es2017', 'compile:stylus']
        .forEach((task) => gulp.start(task));
    });

gulp.task('test:unit', () => {
    gulp.src('./test/unit/**/*.js')
        .pipe(mocha({
            reporter: 'nyan'
        }))
});