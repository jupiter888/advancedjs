var Mushroom = require("./models/mushroom");

// insert a new item into the database
//adding new items to db
new Mushroom({
        type: 'agaricus blazei',
        otherName: 'Prince',
        use: 'anti cancer',
        frequency: 'daily',
        dosageMg: 500
    }).save();
    
    new Mushroom({
        type: 'cordycep militaris',
        otherName: 'korean cordycep',
        use: 'anti cancer, stamina',
        frequency: 'daily',
        dosageMg: 300
    }).save();
    
//ading all items from array to db    
    new Mushroom({
        type: 'reishi',
        otherName: 'Ganoderma Lucidum',
        use: 'anticancer, antioxidant, tonic, antitumor, immunity',
        frequency: 'daily',
        dosageMg: 900
    }).save();
    
    new Mushroom({
        type: 'lions mane',
        otherName: 'Hericium  Erinaceus',
        use: 'lungs, memory, nerve regeneration, immunity',
        frequency: 'daily',
        dosageMg: 900
    }).save();
    
    new Mushroom({
        type: 'chaga',
        otherName: 'Inonotus Obliquus',
        use: 'antiCancer, antioxidant, antitumor, immunity',
        frequency: 'daily',
        dosageMg: 900
    }).save();
    
    new Mushroom({
        type: 'cordycep c',
        otherName: 'Cordycep Sinensis',
        use: 'stamina, antidiabetes, radio-protective',
        frequency: 'daily',
        dosageMg: 800
    }).save();
    
    new Mushroom({
        type: 'maitake',
        otherName: 'Grifola Frondosa',
        use: 'antimetastatic, antioxidant, immunity, blod sugar',
        frequency: 'daily',
        dosageMg: 700
    }).save();
    
    new Mushroom({
        type: 'turkey tail',
        otherName: 'Trametes Versicolor',
        use: 'antitumor, antioxidant',
        frequency: 'daily',
        dosageMg: 400
    }).save();



Mushroom.count((err, result)=>{
     if (err) {
        console.log(err);
    } else{
    console.log(result, "mushrooms in db"); 
    }
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


//when running this the first time, the amount items is shown as 0, and the items are shown as empty array.
//when i stop, and run this code again, what is printed out is the amount in the list, and all the items in the array, 
//however, this second run duplicates what is in the db. 
//