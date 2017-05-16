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

//add and check new list length to measure success, else return false 
// exports.add=(newType, newOtherName, newUse, newFrequency, newDosageMg)=>{
//     var newMushroom={type:newType.toLowerCase(), otherName:newOtherName, use:newUse, frequency:newFrequency, dosageMg:parseInt(newDosageMg) };
//     {added: mushrooms.push(newMushroom)}
//     return newMushroom.type + " has been added to the mushroom medicine list" +"<br>"+ mushrooms.length + " mushrooms in catalogue now";
// };


//hw4needs this below
exports.add=(newMushroom)=>{
    var mushroomlen= mushrooms.length;
    var mType=newMushroom.type; 
    var mON=newMushroom.otherName;
    var mUse=newMushroom.use;
    var mFreq=newMushroom.frequency;
    var mDose= newMushroom.dosageMg;
    var completeMushroom = { type: mType, otherName: mON, use: mUse , frequency: mFreq, dosageMg: mDose};
    mushrooms.push(completeMushroom);
    var added =(mushrooms.length==mushroomlen) ? "" : "added";
		
// 	});
    return {"action": added,  total: mushrooms.length };
	};

	








// 	if (!alreadyExists) {
//         mushrooms.push(completeMushroom);
//         return {added: !alreadyExists ,  total: mushrooms.length };
// 	}else{
//     return item.type == type;
// 	}    
// };

// 	//check to make sure mushroom isn't on the list already
// 	var alreadyExists = mushrooms.find(function(item){
		
// 	});










// 	//add and check new list length to measure success, else return false 
// 	if (!alreadyExists){
// 	var newLength = mushrooms.push(newMush);
// 		return newLength > oldLength;
// 	} else { //Mushroom has already been added.
// 		return false;
// 	    }
// 	};