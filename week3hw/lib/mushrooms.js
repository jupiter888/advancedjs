"use strict";
//not let mushrooms, var
var mushrooms=[
    {type: "reishi",otherName:"Ganoderma Lucidum", use:"anticancer, antioxidant, tonic, antitumor, immunity",frequency:"daily",dosageMg:900},
    {type: "lions mane",otherName:"Hericium  Erinaceus", use:"lungs, memory, nerve regeneration, immunity",frequency:"daily",dosageMg:900},
    {type: "chaga",otherName:"Inonotus Obliquus", use:"antiCancer, antioxidant, antitumor, immunity",frequency:"daily",dosageMg:900},
    {type: "cordyceps",otherName:"Cordyceps sinensis", use:"stamina, antidiabetes, radio-protective",frequency:"daily",dosageMg:800},
    {type: "maitake",otherName:"Grifola Frondosa", use:"antimetastatic, antioxidant, immunity",frequency:"daily",dosageMg:700},
    {type: "turkey tail",otherName:"Trametes Versicolor", use:"antitumor, antioxidant",frequency:"daily",dosageMg:300}
    ];

//get function
exports.get=(type)=>{
    return mushrooms.find((item)=>{
        return item.type==type;
    });
}; 


//delete function
exports.delete=(type)=>{
    let oldLength=mushrooms.length;
    var newMushroom=mushrooms.filter((item)=>{
            return item.type!==type;
    });
    mushrooms=newMushroom;
    return{deleted:mushrooms.length!==oldLength , totalremaining:mushrooms.length};
};

// exports.add=(newType, newOtherName, newUse, newFrequency, newDosageMg)=>{
//     var newMushroom={type:newType.toLowerCase(), otherName:newOtherName, use:newUse, frequency:newFrequency, dosageMg:parseInt(newDosageMg) };
//     mushrooms.push(newMushroom);
//     return newMushroom.type + " has been added to the mushroom medicine list" +"<br>"+ mushrooms.length + " mushrooms in catalogue now";
// };


