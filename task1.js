// A function stringLength(string)
function stringLength(string){
  return string.length;
}

// Test for this function
function testStringLength(){
  const testString = "Marie-Grace";
  const expectedLength = 11;
  const actualLength = stringLength(testString);
  if( expectedLength === actualLength){
    return "Test passed!"
  }else{
    return `Expected ${expectedLength} but have ${actualLength}`;
  }
}

// expand the function to check if the string is at least 1 character long and not longer than 10 characters
function stringLength(string){
  const length = string.length;
  if(length === 0){
    throw new Error("String must contain at least 1 character")
  }
  if(length > 10){
    throw new Error("String cannot be longer than 10 characters")
  }
  return length;
}

// Test the new functionality
function testStringLengthWithEmptyString() {
  try {
    const testString = "";
    stringLength(testString);
    return "Test failed! Expected an error, but no error was thrown.";
  } catch (error) {
    return "Test passed!";
  }
}

function testStringLengthWithLongString() {
  try {
    const testString = "This is a very long string.";
    stringLength(testString);
    return "Test failed! Expected an error, but no error was thrown.";
  } catch (error) {
    return "Test passed!";
  }
}

testStringLength();
testStringLengthWithEmptyString();
testStringLengthWithLongString();