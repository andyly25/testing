//Goal: using yargs module

var argv = require('yargs') //auto looks in node_modules folder
	.usage('Usage: node $0 --l=[num] --h=[num]')
	.demand(['l', 'h'])
	.argv; //property supplied to the application
	//anything supplied in command line will be used in node application

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

//how you use your command line parameters
solveRect(argv.l,argv.h);