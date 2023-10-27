let userName: unknown;
let userInput: string;

userName = 28;
userName = "Saurav";
if (userName === "string") {
  userInput = userName;
}

function generateError(error: string, code: number): never {
  throw { message: error, code: code };
  //while(true){}
}

generateError("Resource Not Found", 404);
