var URL_ROOT = 'http://localhost:3000';

describe('Category API', function(){
	var server;
	var Category;

	before(function(){
		var app = express();

		//Bootstrap server, we use our two models
		models = require('./models')(wagner);
		// use app.use to include express subrouter from api.js in express app
		app.use(require('./api')(wagner));

		server = app.listen(3000);

		//make category model available in tests
		Category = models.Category;
	});

	after(function(){
		//shuts server down when done
		server.close();
	});

	beforeEach(function(done){
		//make sure categories are empty b4 each test
		Category.remove({}, function(error){
			assert.ifError(error);
			done();
		});
	});
	it('can load a category by id', function(done){
		//creates a single category
		Category.create({_id: 'Electronics'}, function(error,doc){
			assert.ifError(error);
			var url = URL_ROOT + '/category/id/Electronics';
			// make http request to localhost:3000/category/id/Electronics
			superagent.get(url, function(error,res){
				assert.ifError(error);
				var result;
				//make sure we got {_id: 'Electronics'} back
				assert.doesNotThrow(function(){
					result = JSON.parse(res.text);
				});
				assert.ok(result.category);
				assert.equal(result.category._id, "Electronics");
				done();
			});
		});
	});

	it('can load all categories that have a certain parent', function(done){
		var categories = [
			{_id: 'Electronics'},
			{_id: 'Phones', parent: 'Electronics'},
			{_id: 'Laptops', parent: 'Electronics'},
			{_id: 'Meatloaf'}
		];

		//creates 4 categories
		Category.create(categories, function(error, categories){
			var url = URL_ROOT + '/category/parent/Electronics';
			//Make an HTTP request to localhost:3000/category/parent/Electronics
			superagent.get(url, function(error,res){
				assert.ifError(error);
				var result;
				assert.doesNotThrow(function(){
					result = JSON.parse(res.text);
				});
				assert.equal(result.category.length, 2);
				//should be in ascending order by _id
				assert.equal(result.categories[0]._id,'Laptops');
				assert.equal(result.categories[1]._id, 'Phones');
				done();
			});
		});
	});
});