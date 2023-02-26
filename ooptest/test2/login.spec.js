const { expect } = require("chai");
const checkName = require("./login");

describe("login", function(){
test("should return user of contian @",function(){
let expectedResult="should enter valid name";
let acualResult=checkName("esr@aa");
expect(acualResult ).equal(expectedResult);
});

});