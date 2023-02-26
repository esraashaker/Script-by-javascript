const { expect } = require("chai");
const checkName = require("./name");
describe("login",function(){
    test("should return user of contian @",function(){
        const expectedResult ="user";
       const actualResult =checkName("esr@aa");
       expect(actualResult).equal(expectedResult);
       
           });
           test("should return user of contian .",function(){
            const expectedResult ="user";
           const actualResult =checkName("esr.aa");
           expect(actualResult).equal(expectedResult);
           
               });
               test("should return correct name",function(){
                const expectedResult ="esraa";
               const actualResult =checkName("esraa");
               expect(actualResult).equal(expectedResult);
               
                   });
});
   
