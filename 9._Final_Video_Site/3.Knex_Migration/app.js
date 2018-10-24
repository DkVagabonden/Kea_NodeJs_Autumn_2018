// require the libraries
const Knex = require("knex");
const Model = require("objection").Model;
const knexConfig = require("./knexfile");

// use the driver and connect locally to my mysql
const knex = Knex(knexConfig.development);

// connect knex with objection and put query methods on the models
Model.knex(knex);

// convenience object.. easy access to the models
const db = {
    "knex": knex,
    "Message": require("./models/Message")
};

// db.Message.query().insert({"message": "Hi, how are you?"}).then(persistedData => {
//     console.log(persistedData);
// });

db.Message.query().select().then(foundData => {
    console.log(foundData);
})