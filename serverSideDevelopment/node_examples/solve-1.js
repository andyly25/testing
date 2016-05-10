//Goal: learn about basics of node modules and how to use withing JS application

var rect = require('./rectangle-1')

function solveRect(l, h){
	console.log("Solving for rectangle with l = "+l+" and h = "+h);
	if (l<0 || h<0){
		console.log("rectangle dimensions should not be 0 or less: l ="+l+" h = "+h);
	}
	else{
		console.log("The area of the rectangle with length "+l+
			" and height "+h+" is "+ rect.area(l,h));
		console.log("The perimeter of the rectangle with length "+l+
			" and height "+h+" is "+ rect.perimeter(l,h));
	}
}

solveRect(2,4);
solveRect(5,3);
solveRect(-2,3);