var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());
app.disable('etag');

Player =require('./models/player');
Squad =require('./models/squad');
Team =require('./models/team');
Stat =require('./models/stat');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/SuicideLeague');
var db = mongoose.connection;

app.get('/', function(req, res){
	res.send('Please use /api/players or /api/squads or whatever');
});

app.get('/api/teams', function(req, res){
	Team.getTeams(function(err, teams){
		if(err){
			throw err;
		}
		res.json(teams);
	});
});

app.post('/api/teams', function(req, res){
	var team = req.body;
	Team.addTeam(team, function(err, team){
		if(err){
			throw err;
		}
		res.json(team);
	});
});


app.get('/api/players', function(req, res){
	Player.getPlayers(function(err, players){
		if(err){
			throw err;
		}
		res.json(players);
	});
});

app.get('/api/player/:_id', function(req, res){
	Player.getPlayerById(req.params._id, function(err, player){
		if(err){
			throw err;
		}
		res.json(player);
	});
});

app.post('/api/player', function(req, res){
	var player = req.body;
	Player.addPlayer(player, function(err, player){
		if(err){
			throw err;
		}
		res.json(player);
	});
});

app.post('/api/players', function(req, res){
	var players = req.body;
	Player.addPlayers(players, function(err, players){
		if(err){
			throw err;
		}
		res.json(players);
	});
});
app.put('/api/player/:_id', function(req, res){
	var id = req.params._id;
	var player = req.body;
	Player.updatePlayer(id, player, {}, function(err, player){
		if(err){
			throw err;
		}
		res.json(player);
	});
});
/*
app.delete('/api/players/:_id', function(req, res){
	var id = req.params._id;
	Genre.removeGenre(id, function(err, genre){
		if(err){
			throw err;
		}
		res.json(player);
	});
});
*/
app.get('/api/:username/squads', function(req, res){
	Squad.getSquads(function(err, squads){
		if(err){ 
			throw err;
		}
		res.json(squads);
	});
});

app.get('/api/:username/squads/:week', function(req, res){
	Squad.getSquad(req.params.username, req.params.week, function(err, squad){
		if(err){
			throw err;
		}
		res.json(squad);
	});
});

app.post('/api/:username/squads/:week', function(req, res){
	console.log('IN app.post  body: ' + req.body);
	var id = req.params.week;
	var user = req.params.username;
	var squad = req.body;
	Squad.addSquad(squad, function(err, squad){
		if(err){
			throw err;
		}
		res.json(squad);
	});
});

app.put('/api/:username/squads/:week', function(req, res){
	console.log('IN app.put  body: ' + req.body + '   week: ' +req.params.week + 'user:  ' + req.params.username );
	var id = req.params.week;
	var user = req.params.username;
	var squad = req.body;
	Squad.updateSquad(user, id, squad, {}, function(err, squad){
		if(err){
			throw err;
		}
		res.json(squad);
	});
});

app.post('/api/used', function(req, res){
	console.log('IN app.post  body: ' + req.body);
	var squad = req.body;
	Squad.addSquad(squad, function(err, squad){
		if(err){
			throw err;
		}
		res.json(squad);
	});
});

app.put('/api/used/:week', function(req, res){
	var id = req.params.week;
	var squad = req.body;
	Squad.updateSquad(id, squad, {}, function(err, squad){
		if(err){
			throw err;
		}
		res.json(squad);
	});
});
/*
app.delete('/api/books/:_id', function(req, res){
	var id = req.params._id;
	Book.removeBook(id, function(err, book){
		if(err){
			throw err;
		}
		res.json(book);
	});
});*/

app.listen(3000);
console.log('Running on port 3000...');