"use strict";

let mushrooms=[
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
    const oldLength = mushrooms.length;
    var newMushroom=mushrooms.filter((item)=>{
            return item.type!==type;
    });
    mushrooms=newMushroom;
    return {deleted:oldLength !== mushrooms.length ,  total: mushrooms.length };
 };

// exports.add=(newType, newOtherName, newUse, newFrequency, newDosageMg)=>{
//     var newMushroom={type:newType.toLowerCase(), otherName:newOtherName, use:newUse, frequency:newFrequency, dosageMg:parseInt(newDosageMg) };
//     {added: mushrooms.push(newMushroom)}
//     return newMushroom.type + " has been added to the mushroom medicine list" +"<br>"+ mushrooms.length + " mushrooms in catalogue now";
// };

//hw4needs this below
exports.add=(newMushroom)=>{
    
	var alreadyExists = this.get(newMushroom.type);
	if (!alreadyExists) {
        mushrooms.push(newMushroom);
	};

    return {added: !alreadyExists ,  total: mushrooms.length };
    
};
    // var mType=newMushroom.type; 
    // var mON=newMushroom.otherName;
    // var mUse=newMushroom.use;
    // var mFreq=newMushroom.frequency;
    // var mDose= newMushroom.dosageMg;
//    var completeMushroom = { type: mType, otherName: mON};
    // , use: mUse , frequency: mFreq, dosageMg: mDose

exports.addMush=function(mushtype, mushothname, mushuse, mushfreq, mushdose){
		var oldLength = mushrooms.length;
		var newMush = {'type': type.toLowerCase(), 'engine': engine, 'users': 1};

		//check to make sure mushroom isn't on the list already
		var alreadyExists = mushrooms.find(function(item){
			return item.type == type;
		});

		//add and check new list length to measure success, else return false 
		if (!alreadyExists){
			var newLength = mushrooms.push(newMush);
			return newLength > oldLength;
		} else { //Mushroom has already been added.
			return false;
		}
	};