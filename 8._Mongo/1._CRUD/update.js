const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
    const db = client.db("games");
    const favoriteGames = db.collection("favorite_games");

    var originalData = {"name": "International Karate"};
	var newData = {$set: {"password": "T1"}};

	// add new field
	favoriteGames.update(originalData, newData, function( err, data ) {
		console.log(data);

		client.close();
	});


});