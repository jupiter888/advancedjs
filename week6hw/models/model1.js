var mongoose=require('mongoose');

// var fungiSchema=mongoose.Schema({
// name: String
// inSeason: Boolean
// cost: Number
// });


var mushroomSchema=mongoose.Schema({
name: String
otherName: Boolean
use: Number
frequency: String
dosageMg: Number
});

mushroomSchema.methods.getSeasonalStatus =function(){
    return name + ' are dosed at' + dosageMg + 'milligrams';
};
var Fungus=mongoose.model('Fungus',mushroomSchema);
module.exports= Fungus;

//rename as mushroms.
//create model directory on root
//put this inside
