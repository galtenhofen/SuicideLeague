var mongoose = require('mongoose');

// Genre Schema
var statSchema = mongoose.Schema({
	id:{
		type: String		
	},
	number:{
		type: Number
	}
});

var Stat = module.exports = mongoose.model('Stat', statSchema);

// Get Stats
module.exports.getStats = function(callback, limit){
	Stat.find(callback).limit(limit);
}

// Add Genre
/*module.exports.addGenre = function(genre, callback){
	Genre.create(genre, callback);
}*/

// Update Genre
/*module.exports.updateGenre = function(id, genre, options, callback){
	var query = {_id: id};
	var update = {
		name: genre.name
	}
	Genre.findOneAndUpdate(query, update, options, callback);
}*/


// Delete Genre
/*module.exports.removeGenre = function(id, callback){
	var query = {_id: id};
	Genre.remove(query, callback);
}*/