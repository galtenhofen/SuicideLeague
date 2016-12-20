var mongoose = require('mongoose');

// Genre Schema
var teamSchema = mongoose.Schema({
	teamAbbr:{
		type: String,
		required: true,
		primarykey:true
	},
	fullName:{
		type: String		
	},
	mascot:{
		type: String
	}
});

var Team = module.exports = mongoose.model('Team', teamSchema);

// Get Teams
module.exports.getTeams = function(callback, limit){
	Team.find(callback).limit(limit);
}

// Add Genre
module.exports.addTeam = function(team, callback){
	Team.create(team, callback);
}

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