var mongoose = require('mongoose');

// Book Schema
var playerSchema = mongoose.Schema({
	id:{
		type: String,
		//required: true,
		//primarykey: true
	},
	esbid:{
		type: String
	},
	gsisPlayerId:{
		type: String
	},
	name:{
		type: String,
		//required: true
	},
	position:{
		type: String,
		//required: true
	},
	teamAbbr:{
		type: String,
		//required: true
	},
	stats:{
	type : Array,
	items : { 
	type : 	[ 
					{ type : Object, properties : { statId : { type : String }}},
					{ type : Object, properties : { statVal : { type : String } } }
				]
				}
	
	},
	seasonPts:{
		type: Number,
		//required: true
	},
	seasonProjectedPts:{
		type: Number,
		//required: true
	},
	weekPts:{
		type: Number,
		//required: true
	},
	weekProjectedPts:{
		type: Number,
		//required: true
	}
});

var Player = module.exports = mongoose.model('Player', playerSchema);

// Get Players
module.exports.getPlayers = function(callback, limit){
	Player.find(callback).limit(limit);
}

// Get Player
module.exports.getPlayerById = function(id, callback){
	Player.findById(id, callback);
}

// Add Player
module.exports.addPlayer = function(player, callback){
	Player.create(player, callback);
}

module.exports.addPlayers = function(players, callback){
	Player.insertMany(players, callback);
}

// Update Player
module.exports.updatePlayer = function(id, player, options, callback){
	var query = {_id: id};
	var update = {
		teamAbbr: player.teamAbbr,
		stats: player.stats,
		seasonPts: player.seasonPts,
		seasonProjectedPts: player.seasonProjectedPts,
		weekPts: player.weekPts,
		weekProjectedPts: player.weekProjectedPts
	}
	Player.findOneAndUpdate(query, update, options, callback);
}

// Delete Player
/*module.exports.removeSquad = function(id, callback){
	var query = {_id: id};
	Squad.remove(query, callback);
}*/