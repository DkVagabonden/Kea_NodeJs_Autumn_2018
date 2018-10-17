const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
    const db = client.db("games");
    const favoriteGames = db.collection("favorite_games");

    favoriteGames.find({"rating": {$gt: 8.2}}).sort({"rating": -1}).limit(3).toArray( function( err, foundGames ) {
		console.log( foundGames );
	});

    client.close();
});