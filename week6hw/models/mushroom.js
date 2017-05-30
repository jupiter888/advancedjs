var mongoose=require('mongoose');
var credentials = require("../../lib/credentials");
//remote database settings
var options={server: {socketOptions: { keepAlive: 1, connectTimeoutMS: 30000} }};

mongoose.connect(credentials.mongo.development.connectionString, options);

var conn = mongoose.connection; 
conn.on('error', console.error.bind(console, 'connection error:'));

//define mushroom model in Json key/val pairs
var mushroomSchema=mongoose.Schema({
    type: String,
    otherName: String,
    use: String,
    frequency: String,
    dosageMg: Number
});

//creating dynamic methods 
//mongo remove method (delete)
mushroomSchema.methods.delete=function(mushroom_type){
    return this.model('Mushroom').remove({type: mushroom_type});
};

//mongo create method (add)
mushroomSchema.methods.create=function(mtype,motherName, muse, mfrequency, mdosageMg){ 
    return this.model('Mushroom').insert({type:mtype, otherName:motherName, use:muse, freuquency:mfrequency, dosageMg:mdosageMg});  
};

//mongo find method (get)
mushroomSchema.methods.get=function(mushroom_type){
    return this.model('Mushroom').findOne({type:mushroom_type});
};
module.exports= mongoose.model('Mushroom', mushroomSchema);



