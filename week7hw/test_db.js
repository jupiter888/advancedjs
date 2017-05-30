var Mushroom = require("./models/mushroom");

// insert a new document into the database
//adding new items to db
new Mushroom({
        type: 'agaricus blazei',
        otherName: 'Prince',
        use: 'anti cancer',
        frequency: 'daily',
        dosageMg: 500
    }).save((err) => {
        console.log(err);
    });
    
    new Mushroom({
        type: 'cordycep militaris',
        otherName: 'korean cordycep',
        use: 'anti cancer, stamina',
        frequency: 'daily',
        dosageMg: 300
    }).save();

Mushroom.count((err, result)=>{
    console.log(result);
});

// find all documents 
Mushroom.find((err, result) => {
    // output error if one occurred
    if (err) {
        console.log(err);
    } else {
        // otherwise output the array of documents
        console.log(result);
    }
});
