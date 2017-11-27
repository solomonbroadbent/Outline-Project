var gulp = require('gulp');
var babel = require('gulp-babel');
gulp.task('default', function() {
	gulp.src('source/private/server.js')
	.pipe(babel({
		"presets": ["env"]
	}))
	.pipe(gulp.dest('build/private/server.js'));
});