/*NodeJS uses file level scoping
 * default any var or fn declared in a file is not accessible outside file
 * require is a way to share code between files
 */
var fn = require('./myfile.js');

fn();

/*
 * Note that test is a directory so when you call require, it looks for an 
 * index.js in the directory to run (I assume index is like main for other languages)
 * 
 */
var otherFn = require('./test').other;
otherFn();