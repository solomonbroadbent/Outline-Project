var gulp = require('gulp');
var babel = require('gulp-babel');
var nodemon = require('gulp-nodemon');
gulp.task('default', ['compile', 'run']);
gulp.task('compile', function() {
	gulp.src('source/private/**/*.js')
	.pipe(babel({
		"presets": ["env"]
	}))
	.pipe(gulp.dest('build/private'));
});
gulp.task('run', function() {
	nodemon({
		script: 'build/private/server.js',
		watch: 'source/**/*.*',
		tasks: ['compile']
	});
});