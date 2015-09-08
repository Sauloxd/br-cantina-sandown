var gulp 	  = require('gulp');
var uglify 	= require('gulp-uglify');
var concat  = require('gulp-concat');
var jade    = require('gulp-jade');

gulp.task('scripts', function(){
	gulp.src('src/assets/js/*.js')
	 .pipe(concat('all.min.js'))
	 .pipe(uglify())
	 .pipe(gulp.dest('dist/js'));
  gulp.src('src/app/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('dist/html'));
});