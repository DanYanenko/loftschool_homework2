var 
	gulp = require('gulp'),
	minifyCss = require('gulp-minify-css'),
	concatCss = require('gulp-concat-css'),
	rename = require('gulp-rename'),
	notify = require('gulp-notify'),
	autoprefixer = require('gulp-autoprefixer'),
	browserSync = require('browser-sync'),
	sass = require('gulp-sass'),
	wiredep = require('wiredep').stream,
	useref = require('gulp-useref'),
	gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    jade = require('gulp-jade'),
    del = require('del'),
    gutil = require('gulp-util');
 
gulp.task('jade',function(){
	gulp.src('app/markups/index.jade')
		.pipe(jade({
			pretty:true
		}))
		.pipe(gulp.dest('app/'));	
});

gulp.task('watchJade', function(){
	gulp.watch([
		'app/markups/index.jade'
		], ['jade']);
});

gulp.task('css', function () {
  return gulp.src('app/styles/**/*.scss')
  	.pipe(sass())
  	.pipe(autoprefixer('Firefox > 20'))
    .pipe(gulp.dest('app/css/'));
});

gulp.task('watchCss', function(){
	gulp.watch([
		'app/styles/**/*.scss'
		], ['css']);
});

gulp.task('minCss', function(){
return gulp.src('app/css/main.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('app/css/'));
});


gulp.task('server', function(){
	browserSync({
		port:9000,
		server: {
			baseDir:'./app'
		}
	});
});
gulp.task('bower', function () {
  gulp.src('app/index.html')
    .pipe(wiredep({
     
      optional: 'configuration',
      goes: 'here'
    }))
    .pipe(gulp.dest('./app/'));

});


gulp.task('watch', function(){
	gulp.watch([
		'app/js/*.js',
		'app/css/**/*.css',
		'app/*.html'
		]).on('change', browserSync.reload);
});



gulp.task('html', function () {

	del(['dist/**/**'], function(err, paths){
		console.log('Deleted files/folders:\n', path.join('\n'));
	});
	
    var assets = useref.assets();


 
    return gulp.src('app/index.html')
        .pipe(assets)
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['server','watch']);




