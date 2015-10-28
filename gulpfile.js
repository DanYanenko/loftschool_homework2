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
	gulp.src('app/markups/**/*.jade')
		.pipe(jade({
			pretty:true
		}))
		.pipe(gulp.dest('app/'));	
});

gulp.task('css', function () {
  return gulp.src('app/styles/main.scss')
  	.pipe(sass())
  	.pipe(autoprefixer('last 15 versions'))
    .pipe(gulp.dest('app/css/'));
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
		'app/css/**/*.css',
		'app/styles/*.scss',
		'app/*.html',
		'app/js/*.js',
		'app/markups/**/*.jade',
		'bower.json'	
		],['css','bower','jade']).on('change', browserSync.reload);
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



gulp.task('default', ['watch','server', ]);




