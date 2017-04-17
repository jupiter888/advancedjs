let festivals=[
    {season:"summer",genre:"Terror",name:"Together we are Hardcore"},
    {season:"summer",genre:"Hardcore",name:"Ground Zero"},
    {season:"summer",genre:"Hardcore",name:"QBase"}
    ]; 

//correct syntax
let books=[
    {title: "it", author:"frankenstein sherbet",pubdate:1986},
    {title: "moby dick", author:"albert hoffman",pubdate:1977},
    {title: "tao ti ching", author:"Lao Tzu",pubdate:1488}
    ];

//will return tao ti ching
console.log(books[2]);

//pass in param , title, using arrow syntax to define that function
//function  
//function get, against title, has a string and finds against the titles 
//whats happens here is another method,find, executes using another function(anonymous)
//the inner one returns a value and gets returned to the function that calls it 

//use this for exporting
// let get= (title) => {
//     return books.find((item) =>{
//         //console.log(item);
//         return item.title == title;
//     });
// }

//doesnt have something called test, so this will show an error
//this is a test portion of this code
//returns undefined at end of the info being requested in previous code
//console.log(get("test"));

//this module is going to have an export attr
// going tohave fx get, server should be able to access this 
exports.get= (title) => {
    return books.find((item) =>{
        //console.log(item);
        return item.title == title;
    });
} 