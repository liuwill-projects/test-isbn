var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
const reporters = require('jasmine-reporters');

gulp.task('default', function () {
    return gulp.src('spec/*[sS]pec.js')
        .pipe(jasmine(/*{
            reporter: new reporters.JUnitXmlReporter()
        }*/));
});

gulp.task('test_xml', function () {
    return gulp.src('spec/*[sS]pec.js')
        .pipe(jasmine({
         reporter: new reporters.JUnitXmlReporter()
         }));
});