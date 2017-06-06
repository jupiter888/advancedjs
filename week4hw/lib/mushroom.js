"use strict";

let mushrooms=[
    {type: "reishi",otherName:"Ganoderma Lucidum", use:"anticancer, antioxidant, tonic, antitumor, immunity",frequency:"daily",dosageMg:900},
    {type: "lions mane",otherName:"Hericium  Erinaceus", use:"lungs, memory, nerve regeneration, immunity",frequency:"daily",dosageMg:900},
    {type: "chaga",otherName:"Inonotus Obliquus", use:"antiCancer, antioxidant, antitumor, immunity",frequency:"daily",dosageMg:900},
    {type: "cordyceps",otherName:"Cordycep sinensis", use:"stamina, antidiabetes, radio-protective",frequency:"daily",dosageMg:800},
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
    const oldLength = mushrooms.length;
    var newMushroom=mushrooms.filter((item)=>{
            return item.type!==type;
    });
    mushrooms=newMushroom;
    return {deleted:oldLength !== mushrooms.length ,  total: mushrooms.length };
 };

//add function
exports.add = (newMushroom) => {
    var oldLength= mushrooms.length;
    if (!this.get(newMushroom.type)) { // if get() returns undefined, add new mushroom
        mushrooms.push(newMushroom);
    }

    return {added: oldLength !== mushrooms.length ,  total: mushrooms.length };
};
