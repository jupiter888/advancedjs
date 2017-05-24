var mongoose=require('mongoose');

var mushroomSchema=mongoose.Schema({
name: String
otherName: String
use: Number
frequency: String
dosageMg: Number
});

mushroomSchema.methods.getSeasonalStatus =function(){
    return name + ' are dosed at' + dosageMg + 'milligrams';
};
module.exports=mongoose.model('Fungus',mushroomSchema);
var Fungus= module.exports;

//rename as mushrooms.
//create model directory on root
//put this inside


// remote db connection settings. For security, connectionString should be in a separate file not committed to git
// var connectionString = "mongodb://<USER>:<PASSWORD>@ds015962.mlab.com:15962/<DB_NAME>";
// var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } } };
// mongoose.connect(connectionString, options);

// local db connection settings 
// var ip = process.env.ip || '127.0.0.1';
// mongoose.connect('mongodb://' +ip+ '/<DB_NAME>');

var conn = mongoose.connection; 
conn.on('error', console.error.bind(console, 'connection error:'));

/////
// https://scalegrid.io/blog/getting-started-with-mongodb-and-mongoose/

// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/myTestDB');
 
// var db = mongoose.connection;
 
// db.on('error', function (err) {
// console.log('connection error', err);
// });
// db.once('open', function () {
// console.log('connected.');
// });

// var Schema = mongoose.Schema;
// var userSchema = new Schema({
// name : String,
// age : Number,
// DOB : Date,
// isAlive : Boolean
// });


