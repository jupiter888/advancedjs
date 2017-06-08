
//a promise that resolves with a formdata object
response.formData().then(function(formdata) {
  // do something with your formdata
});


// Create a test FormData object
var formData = new FormData();
formData.append('key1', 'value1');
formData.append('key2', 'value2');


// Display the key/value pairs in this object
for(var pair of formData.entries()) {
   console.log(pair[0]+ ', '+ pair[1]); 
}

//display all k/v pairs
formData.getAll('username'); // Returns ["Chris", "Bob"]


//delete
formData.delete('username');

//add
formData.append('userpic[]', myFileInput1.files[0], 'chris1.jpg');
formData.append('userpic[]', myFileInput2.files[0], 'chris2.jpg');


//set new value for key inside an existing object 
//****adds the k/v if doesnt exist
formData.set('username', 'Chris');
formData.set('userpic', myFileInput.files[0], 'chris.jpg');


//contents can be queried and retrieved:
console.log(myHeaders.has("Content-Type")); // true
console.log(myHeaders.has("Set-Cookie")); // false
myHeaders.set("Content-Type", "text/html");
myHeaders.append("X-Custom-Header", "AnotherValue");
 
console.log(myHeaders.get("Content-Length")); // 11
console.log(myHeaders.get("X-Custom-Header")); // ["ProcessThisImmediately", "AnotherValue"]
 
myHeaders.delete("X-Custom-Header");
console.log(myHeaders.get("X-Custom-Header")); // [ ]


///////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////

// A search entry field. 
// A list of items in your database. As the user types in the search entry field, this list should update to display just items matching the entry
// A control to add a new list item
// A details form for editing the selected item 
// Controls to save, update, & delete list items