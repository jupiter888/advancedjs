"use strict";
let books=[
    {title: "it", author:"frankenstein sherbet",pubdate:1986},
    {title: "moby dick", author:"albert hoffman",pubdate:1977},
    {title: "tao ti ching", author:"Lao Tzu",pubdate:1488}
    ];
    
//get function
exports.get=(title) => {
    return books.find((item) =>{
        return item.title == title;
    });
} 

//delete function
exports.delete=(title)=>{
        var index= books.findIndex(function(element){
            return element.title.toLowerCase()==title;
        });
        if(index===-1){
            var msg2="Does not exist";
            return msg2;
        }else{
        var removed=books.splice(index,1);
         console.dir(removed);
        return removed[0].title + " has been removed, " + "<br>" + books.length + " books remaining";
        }
}

//add function
exports.add=(newTitle, newAuthor, newPubdate)=>{
        var newBook={title:newTitle.toLowerCase(), author:newAuthor, pubdate:parseInt(newPubdate)};
        books.push(newBook);
        return newBook.title + " has been added to the library" +"<br>"+ books.length + " books in library now";
};






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
