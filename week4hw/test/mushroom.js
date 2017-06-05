var expect = require("chai").expect;
var mushroom = require("../lib/mushroom");

//test scripts
describe("Mushroom module", () => {
//find success   
it("Returns requested mushroom", function() {
   var result = mushroom.get("chaga");
   //to.deep.equal compares an object and its details
   expect(result).to.deep.equal({type: "chaga", otherName:"Inonotus Obliquus",use:"antiCancer, antioxidant, antitumor, immunity",frequency:"daily",dosageMg:900});
 });
 //search fail
 it("fails w/ invalid mushroom", () => {
   var result = mushroom.get("tulip");
   expect(result).to.be.undefined;
 });
//delete.fail
it("fails to delete invalid mushroom", function() {
   var result = mushroom.delete("chapa");
   //to.deep.equal compares an object and its details
   expect(result.deleted).to.be.false;
 });
//delete.success
it("deletes requested mushroom", function() {
   var result = mushroom.delete("chaga");
   //to.deep.equal compares an object and its details
   expect(result.deleted).to.be.true;
 });
//add.success
it("Adds requested mushroom", function() {
   var result = mushroom.add({type: "turkeys",otherName:"Trametes Versicolor", use:"antitumor, antioxidant",frequency:"daily",dosageMg:300});
   //to.deep.equal compares an object and its details
   expect(result.added).to.be.true;
 });
//add.fail (tries to add the same mushroom)
it("fails to add existing mushroom", function() {
   var result = mushroom.add({type: "turkeys",otherName:"Trametes Versicolor", use:"antitumor, antioxidant",frequency:"daily",dosageMg:300});
   //to.deep.equal compares an object and its details
   expect(result.added).to.be.false;
 });

 
});