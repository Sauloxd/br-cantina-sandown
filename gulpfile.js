var gulp 	  = require('gulp');
var uglify 	= require('gulp-uglify');
var concat  = require('gulp-concat');
var jade    = require('gulp-jade');
var stylus  = require('gulp-stylus');
var browserSync = require('browser-sync');

gulp.task('compile', function() {
    //get index.html
  gulp.src('src/app/index.html')
    .pipe(gulp.dest('dist/html'));
  //get angular-ui-router
  gulp.src('bower_components/angular-ui-router/release/angular-ui-router.js')
    .pipe(gulp.dest('dist/js'));
     //compile JavaScripts
  gulp.src('src/assets/js/*.js')
   .pipe(concat('all.min.js'))
   .pipe(uglify())
   .pipe(gulp.dest('dist/js'));
      //compile JADEs
  gulp.src('src/app/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('dist/html'));

  gulp.src('src/assets/css/index.styl')
    .pipe(stylus())
    .pipe(gulp.dest('dist/css'));
});



//http://www.smashingmagazine.com/2014/06/building-with-gulp/


//watch modified fies

gulp.task('watch', function(){
  gulp.watch('src/assets/js/*.js', ['compile']);
  gulp.watch('src/app/*.jade', ['compile']);

});