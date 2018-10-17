const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
    const db = client.db("games");
    var favoriteGames = db.collection("favorite_games");

    favoriteGames.insertOne({"name": "Fifa"});
    client.close();
});