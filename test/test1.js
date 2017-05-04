//mochachaitest same as this 
var expect = require("chai").expect;
var book = require("../lib/mushroom");
describe("Mushroom module", () => {
it("Returns requested mushroom", function() {
   var result = mushroom.get("chaga");
   //to.deep.equal compares an object and its details
   expect(result).to.deep.equal({type: "chaga", otherName:"Inonotus Obliquus",use:"antiCancer, antioxidant, antitumor, immunity",frequency:"daily",dosageMg:900});
 });
 
 it("fails w/ invalid mushroom", () => {
   var result = mushroom.get("tulip");
   expect(result).to.be.undefined;
 });
});