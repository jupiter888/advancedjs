// eslint practice file

var names = ["chaga", "reishi","lions mane","turkey tail"];
var newArray = names.map( function(item) {
 return item.toUpperCase();
}); 
console.log(newArray);