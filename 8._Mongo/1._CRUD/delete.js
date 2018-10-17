const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
    const db = client.db("games");
    const favoriteGames = db.collection("favorite_games");

    const objToDelete = {"name": "Fifa"};

    favoriteGames.deleteOne(objToDelete, function(err, success) {
        console.log(success);

        client.close();
    });
});