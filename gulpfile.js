var gulp = require("gulp");
var babel = require("gulp-babel");
var watch = require("gulp-watch");
var htmlreplace = require('gulp-html-replace');
var fs = require("fs");
let cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat'); 
var gulpsync = require('gulp-sync')(gulp); 

gulp.task('default',gulpsync.sync(['babel', 'minify-css', 'mytpl']),function () {  
  
});

//监听文件是否修改
gulp.task('watch', () => {
    gulp.watch('src/*.*', ['default'])
});

gulp.task("babel", function () {
    return gulp.src(["src/People.js", "src/index.js"])
    	.pipe(concat('index.js')) 
        .pipe(babel())
        .pipe(gulp.dest("dist"));
});


var staticize = {
	getFileContent : function(tplPathName){
		let filePath = tplPathName;
	    var readFile = '';
	    try {
	        fs.accessSync(filePath)
	        readFile = fs.readFileSync(filePath,"utf8");
	        return readFile;
	    } catch (err) {
	        console.log(filePath + ' is not exit ');
	        return '';
	    }
	}
};

gulp.task('mytpl', function() {
	var data = {
		'mytpl1': staticize.getFileContent('src/index1.tpl'),
		'mytpl2': staticize.getFileContent('src/index2.tpl'),
		'mytpl3': staticize.getFileContent('src/index3.tpl'),
		'mytpl4': staticize.getFileContent('src/index4.tpl'),
		'mytpl5': staticize.getFileContent('src/index5.tpl'),
		'mytpl6': staticize.getFileContent('src/index6.tpl'),
		'mycss': 'styles.css'
	}
  	gulp.src('src/index.html')
    .pipe(htmlreplace(data))
    .pipe(gulp.dest('dist'));
});

gulp.task('minify-css', () => {
  return gulp.src('src/*.css')
  	.pipe(concat('styles.css')) 
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});