// Assignment code here
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const specialChar = "!@#$%^&*-+()_=<>?/\{},.;:"
const numberChar = "0123456789"
var passLength;
var upperCaseCheck;
var lowerCheck;
var numberCheck;
var specialCheck;

  function defineLenght(){
    passLength = prompt ("Choose How many characters you would like between 8-128 numbers,symbols and letters!")
  


  if (passLength < 8){
  alert("Password needs to be between 8-128 characters!");
  defineLenght();
  
  }
  else if (passLength > 128){
    alert ("Password needs to be between 8-128 characters!")
    defineLenght();
  }
else if (isNaN(passLength)){
  alert ("Please use numbers to define how many characters between 8-128!")
  defineLenght();
}
else {
  alert("Follow the next steps for the password!")

}
  return passLength;  
  };

function numbCheck(){
numberCheck = prompt("Would you like to include numbers in the password?");
  

  if (numberCheck === null || numberCheck === ""){
    alert("Please answer with a yes or no, Y/N");
   numbCheck(); 
  }
else if (numberCheck === "yes" || numberCheck === "y"){
  numberCheck = true;
  return numbCheck;
}
else if (numberCheck === "no" || numberCheck === "n"){
  numberCheck = false
  return numbCheck;
}
else{
  alert("Please answer with a yes or no, Y/N")
  numbCheck();

}
return numbCheck;
}


function specCheck (){
  specialCheck = prompt("Would you like to include special characters in the password?");
    
  
    if (specialCheck === null || specialCheck === ""){
      alert("Please answer with a yes or no, Y/N");
      specCheck(); 
    }
  else if (specialCheck === "yes" || specialCheck === "y"){
    specialCheck = true;
    return specialCheck;
  }
  else if (specialCheck === "no" || specialCheck === "n"){
    specialCheck = false
    return specialCheck;
  }
  else{
    alert("Please answer with a yes or no, Y/N")
    specCheck();
  
  }
  return specialCheck;
  }



  function upperCC (){
    upperCaseCheck = prompt ("Would you like to include some uppercases?")
    
    if (upperCaseCheck === null || upperCaseCheck === ""){
      alert("Please answer with yes or no, or y/n")
      upperCC();

    }
    else if (upperCaseCheck === "yes" || upperCaseCheck === "y"){
    upperCaseCheck = true;
    return upperCaseCheck;
  }
  else if (upperCaseCheck === "no" || upperCaseCheck === "n"){
  upperCaseCheck = false; 
  return upperCheck

  }else {
    alert("Please answer Yes or No or with a Y/N")
    upperCC();

  }
  return upperCaseCheck;
  }



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){

  defineLenght();
  console.log(passLength);
  specCheck();
  console.log(specialCheck);
  numbCheck();
  console.log(numberCheck);
  upperCC();
  console.log(upperCaseCheck);

var password = "";
var characters = lowerCase;

if (specialCheck && numberCheck && upperCaseCheck) {
  lowerCase + upperCase + numberChar + specialChar;
}else if (upperCaseCheck && specialCheck){
  lowerCase + upperCase + specialChar;
}else if (specialCheck && numberCheck){
  lowerCase + specialChar + numberChar;
}else if (upperCaseCheck && numbercheck){
  lowerCase + numberChar + upperCase;
}else if (numberCheck){
  numberChar + lowerCase ;
}else if (specialCheck){
  lowerCase + specialChar;

}else if (upperCaseCheck){
  lowerCase + upperCase;
}else{
  characters === lowerCase;
} 



  for (let i = 0; i < length; i++) {

    password = characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
};






 


// Write password to the #password input


  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
 
};

console.log(password);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
