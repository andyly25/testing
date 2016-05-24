/*
 * Gulp is a tool that enables you to watch a set of files
 * and auto re-run your test whenever file changes
 * so run your tests, wait for file change, run tests, and then report in a cycle
 * gives you fast feedback with just ctrl+s
 * note you should rename this file into gulpfile.js
 */

 var gulp = require('gulp');
 var mocha = require('gulp-mocha');

// first task takes test.js file and pipe its into mocha plugin
// and checks for any error
 gulp.task('test', function(){
 	gulp.
 		src('./test.js').
 		pipe(mocha()).
 		on('error', function(err){
 			this.emit('end');
 		});
 });

// 2nd task uses gulp.watch which watches the specified file for changes
// and executes the corresponding tasks
 gulp.task('watch', function(){
 	gulp.watch('./*.js', ['test']);
 });