var mongoose=require('mongoose');
var credentials = require("../../lib/credentials");

//remote database settings
var options={server: {socketOptions: { keepAlive: 1, connectTimeoutMS: 30000}}};

mongoose.connect(credentials.mongo.development.connectionString, options);

var conn = mongoose.connection; 
conn.on('error', console.error.bind(console, 'connection error:'));

//define mushroom model in Json key/val pairs
var mushroomSchema=mongoose.Schema({
type: String,
otherName: String,
use: String,
frequency: String,
dosageMg: Number,
});

module.exports= mongoose.model('fungus',mushroomSchema);



