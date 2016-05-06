//Note you need under dependencies in package.json as:
//"underscore": "1.5.2"

var _ = require('underscore');
_.each([1,2,3], function(v){
  console.log(v);
});
