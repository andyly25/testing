//Callbacks/error handling example

module.exports = function(x,y,callback){
	//try and catch is a way to find errors
	try{
		if(x<0||y<0){
			throw new Error("The dimensions should be greater than zero: l = "+x+" and h = "+ y);
		}
		else
			callback(null, {
				perimeter: function(){
					return(2*(x+y));
				},
				area: function(){
					return(x*y);
				}
			});
	}
	//catches the error if found from the if statement above
	catch(error){
		callback(error,null);
	}
}