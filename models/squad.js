var mongoose = require('mongoose');

// Squad Schema
var squadSchema = mongoose.Schema({
	id:{
		type: String,
		required: true,
		primarykey:true
	},
	user:{
		type: String,
		required: true
	},
	week:{
		type: Number
	},
	QB:{
		type : Object, 
		properties : { 
						id:{
			type: String,
			required: true,
			primarykey: true
		},
		esbid:{
			type: String,
			required: true
		},
		gsisPlayerId:{
			type: String,
			required: true
		},
		name:{
			type: String,
			required: true
		},
		position:{
			type: String,
			required: true
		},
		teamAbbr:{
			type: String,
			required: true
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
			required: true
		},
		seasonProjectedPts:{
			type: Number,
			required: true
		},
		weekPts:{
			type: Number,
			required: true
		},
		weekProjectedPts:{
			type: Number,
			required: true
		}
					 }
	},
	RB1:{
		type : Object, 
		properties : { 
						id:{
			type: String,
			required: true,
			primarykey: true
		},
		esbid:{
			type: String,
			required: true
		},
		gsisPlayerId:{
			type: String,
			required: true
		},
		name:{
			type: String,
			required: true
		},
		position:{
			type: String,
			required: true
		},
		teamAbbr:{
			type: String,
			required: true
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
			required: true
		},
		seasonProjectedPts:{
			type: Number,
			required: true
		},
		weekPts:{
			type: Number,
			required: true
		},
		weekProjectedPts:{
			type: Number,
			required: true
		}
					 }
	},
	RB2:{
		type : Object, 
		properties : { 
						id:{
			type: String,
			required: true,
			primarykey: true
		},
		esbid:{
			type: String,
			required: true
		},
		gsisPlayerId:{
			type: String,
			required: true
		},
		name:{
			type: String,
			required: true
		},
		position:{
			type: String,
			required: true
		},
		teamAbbr:{
			type: String,
			required: true
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
			required: true
		},
		seasonProjectedPts:{
			type: Number,
			required: true
		},
		weekPts:{
			type: Number,
			required: true
		},
		weekProjectedPts:{
			type: Number,
			required: true
		}
					 }
	},
	WR1:{
		type : Object, 
		properties : { 
						id:{
			type: String,
			required: true,
			primarykey: true
		},
		esbid:{
			type: String,
			required: true
		},
		gsisPlayerId:{
			type: String,
			required: true
		},
		name:{
			type: String,
			required: true
		},
		position:{
			type: String,
			required: true
		},
		teamAbbr:{
			type: String,
			required: true
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
			required: true
		},
		seasonProjectedPts:{
			type: Number,
			required: true
		},
		weekPts:{
			type: Number,
			required: true
		},
		weekProjectedPts:{
			type: Number,
			required: true
		}
					 }
	},
	WR2:{
		type : Object, 
		properties : { 
						id:{
			type: String,
			required: true,
			primarykey: true
		},
		esbid:{
			type: String,
			required: true
		},
		gsisPlayerId:{
			type: String,
			required: true
		},
		name:{
			type: String,
			required: true
		},
		position:{
			type: String,
			required: true
		},
		teamAbbr:{
			type: String,
			required: true
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
			required: true
		},
		seasonProjectedPts:{
			type: Number,
			required: true
		},
		weekPts:{
			type: Number,
			required: true
		},
		weekProjectedPts:{
			type: Number,
			required: true
		}
					 }
	},
	WR3:{
		type : Object, 
		properties : { 
						id:{
			type: String,
			required: true,
			primarykey: true
		},
		esbid:{
			type: String,
			required: true
		},
		gsisPlayerId:{
			type: String,
			required: true
		},
		name:{
			type: String,
			required: true
		},
		position:{
			type: String,
			required: true
		},
		teamAbbr:{
			type: String,
			required: true
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
			required: true
		},
		seasonProjectedPts:{
			type: Number,
			required: true
		},
		weekPts:{
			type: Number,
			required: true
		},
		weekProjectedPts:{
			type: Number,
			required: true
		}
					 }
	},
	TE:{
		type : Object, 
		properties : { 
						id:{
			type: String,
			required: true,
			primarykey: true
		},
		esbid:{
			type: String,
			required: true
		},
		gsisPlayerId:{
			type: String,
			required: true
		},
		name:{
			type: String,
			required: true
		},
		position:{
			type: String,
			required: true
		},
		teamAbbr:{
			type: String,
			required: true
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
			required: true
		},
		seasonProjectedPts:{
			type: Number,
			required: true
		},
		weekPts:{
			type: Number,
			required: true
		},
		weekProjectedPts:{
			type: Number,
			required: true
		}
					 }
		},
	FLX:{
		type : Object, 
		properties : { 
						id:{
			type: String,
			required: true,
			primarykey: true
		},
		esbid:{
			type: String,
			required: true
		},
		gsisPlayerId:{
			type: String,
			required: true
		},
		name:{
			type: String,
			required: true
		},
		position:{
			type: String,
			required: true
		},
		teamAbbr:{
			type: String,
			required: true
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
			required: true
		},
		seasonProjectedPts:{
			type: Number,
			required: true
		},
		weekPts:{
			type: Number,
			required: true
		},
		weekProjectedPts:{
			type: Number,
			required: true
		}
					 }
	},
	DEF:{
		type : Object, 
		properties : { 
						id:{
			type: String,
			required: true,
			primarykey: true
		},
		esbid:{
			type: String,
			required: true
		},
		gsisPlayerId:{
			type: String,
			required: true
		},
		name:{
			type: String,
			required: true
		},
		position:{
			type: String,
			required: true
		},
		teamAbbr:{
			type: String,
			required: true
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
			required: true
		},
		seasonProjectedPts:{
			type: Number,
			required: true
		},
		weekPts:{
			type: Number,
			required: true
		},
		weekProjectedPts:{
			type: Number,
			required: true
		}
					 }
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

var Squad = module.exports = mongoose.model('Squad', squadSchema);

// Get Squads
module.exports.getSquads = function(callback, limit){
	Squad.find(callback).limit(limit);
}

// Get Squad
module.exports.getSquad = function(user, week, callback){
	Squad.findOne({"week":week, "user":user}, callback);
}

// Add Squad
module.exports.addSquad = function(squad, callback){
	Squad.create(squad, callback);
}

// Update Squad
module.exports.updateSquad = function(user, id, squad, options, callback){
	var query = {week: id, user:user};
	var update = {
		QB: squad.QB,
		RB1: squad.RB1,
		RB2: squad.RB2,
		WR1: squad.WR1,
		WR2: squad.WR2,
		WR3: squad.WR3,
		TE: squad.TE,
		FLX: squad.FLX,
		DEF: squad.DEF
	}
	Squad.findOneAndUpdate(query, update, options, callback);
}

// Delete Squad
module.exports.removeSquad = function(id, callback){
	var query = {_id: id};
	Squad.remove(query, callback);
}