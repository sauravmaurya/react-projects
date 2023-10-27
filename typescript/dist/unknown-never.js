"use strict";
let userName;
let userInput;
userName = 28;
userName = "Saurav";
if (userName === "string") {
    userInput = userName;
}
function generateError(error, code) {
    throw { message: error, code: code };
    //while(true){}
}
generateError("Resource Not Found", 404);
