// function reverseString
function reverseString(string){
  return string.split('').reverse().join('');
}

// At least one test for this function
function testReverseString(){
  let inputStr = "12345";
  let expectedOutput = "54321";
  result = reverseString(inputStr);
  if (result === expectedOutput){
    return "True";
  }else{
    return `expected to be ${expectedOutput} but i have ${result} `;
  }
}