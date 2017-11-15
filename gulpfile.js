var gulp = require("gulp");
var babel = require("gulp-babel");
var watch = require("gulp-watch");
var htmlreplace = require('gulp-html-replace');
var fs = require("fs");
let cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat'); 
var gulpsync = require('gulp-sync')(gulp); 

gulp.task('default',gulpsync.sync(['babel', 'minify-css', 'mydiv']),function () {  
  
});

gulp.task("babel", function () {
    return gulp.src("src/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));
});

gulp.task('watch', function() {
	return watch("src/*.js", function() {
		gulp.src("src/*.js")
        	.pipe(babel())
        	.pipe(gulp.dest("dist"));
	});
});

// gulp.task('mycss', function() {
//   gulp.src('src/index.html')
//     .pipe(htmlreplace({
//         'mycss': 'styles.css'
//     }))
//     .pipe(gulp.dest('dist'));
// });

gulp.task('mydiv', function() {
    let filePath = 'src/index.tpl';
    var readFile = '';
    try {
        fs.accessSync(filePath)
        readFile = fs.readFileSync(filePath,"utf8");
        console.log(readFile);
    } catch (err) {
        console.log(filePath + ' is not exit ')
    }
  	gulp.src('src/index.html')
    .pipe(htmlreplace({
        'mydiv': readFile,
        'mycss': 'styles.css'
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('minify-css', () => {
  return gulp.src('src/*.css')
  	.pipe(concat('styles.css')) 
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});