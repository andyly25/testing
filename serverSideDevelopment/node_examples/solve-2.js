//Goal: learn about basics of node modules and how to use withing JS application

var rect = require('./rectangle-2')

function solveRect(l, h){
	console.log("Solving for rectangle with l = "+l+" and h = "+h);

	rect(l,h, function(err,rectangle){
		if(err){
			console.log(err);
		}
		else{
			console.log("The area of the rectangle with length "+l+
			" and height "+h+" is "+ rectangle.area(l,h));
			console.log("The perimeter of the rectangle with length "+l+
			" and height "+h+" is "+ rectangle.perimeter(l,h));
		}
	});
};

solveRect(2,4);
solveRect(5,3);
solveRect(-2,3);