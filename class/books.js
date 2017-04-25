//_____________________________HOMEWORK2____________________________
"use strict";
let books=[
    {title: "Mycelium Running", author:"Paul Stamets",pubdate:2010},
    {title: "Chemical Romance", author:"Albert Hoffman",pubdate:1977},
    {title: "Tao Ti Ching", author:"Lao Tzu",pubdate:1488}
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




//notes//////////////////////////////////////////////////////////////////////////////////

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
