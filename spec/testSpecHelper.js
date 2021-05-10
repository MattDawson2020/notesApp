//store tests as variables on a test page, at the end of each test push into test suite array, then you can run write the tests on the page
//and run them in the console 

//create separate file for matchers

//DOM AND PHIL IGNORE THE ABOVE NOTES 




// MATCHERS, these function as matchers that are put into the test hash and help determine output.

//Input vs result, input was first design, where you feed function and input in and the function calculates it, but as you cannot put a function with inputs as a parameter 
//this doesnt work with multiple inputs

// LEVEL ONE- simple tests. these matchers let you feed in individual functions/ results along with expectations to get a pass or fail message
inputMatch = (testName, inputFunction, input, expectedOutput) => {
  result = inputFunction(input)
  if(result === expectedOutput) {
      return `${testName}: Passed!` 
  } else {
      return `${testName}: Failed!` 
  }
}
// inputMatch("This is a test name", testFunction, "thing", "This is a thing")
// output "This is a test name: Passed! || This is a test name: Failed!"


//result match lets you feed in more complex functions, you save a function to a variable and feed it in
resultMatch = (testName, inputResult, expectedOutput) => {
  if(inputResult === expectedOutput) {
      return `${testName}: Passed!` 
  } else {
      return `${testName}: Failed!` 
  }
}
// result = testFunction(input1, input2, input3)
//resultMatch("This is a different test", result, `Outcome is ${input1}, ${input2} and ${input3}`)
// output "This is a different test: Passed! || This is a different test: Failed!"

inputContain = (testName, inputResult, expectedOutput) => {
  if(inputResult.includes(expectedOutput)) {
      return `${testName}: Passed!` 
  } else {
      return `${testName}: Failed!` 
  }
}

resultContain = (testName, inputResult, expectedOutput) => {
  if(inputResult.includes(expectedOutput)) {
      return `${testName}: Passed!` 
  } else {
      return `${testName}: Failed!` 
  }
}
// similar to above but check if result includes expected output

inputNotMatch = (testName, inputFunction, input, expectedOutput) => {
  result = inputFunction(input)
  if(result !== expectedOutput) {
      return `${testName}: Passed!` 
  } else {
      return `${testName}: Failed!` 
  }
}

resultNotMatch = (testName, inputResult, expectedOutput) => {
  if(inputResult !== expectedOutput) {
      return `${testName}: Passed!` 
  } else {
      return `${testName}: Failed!` 
  }
}
// these two let you check for a mismatch/ expecting to not match

let testSuite = []
// array lets you store tests and call them all at once later, name / where it is declared is somwhat irelevent


//lets you store a test as a hash, with the input and function separately, the runTest and testRunner functions unpack the hashes and run the tests
//NEEDS THE APPROPRIATE INPUT MATCHER
inputHash = (testType, testName, inputFunction, input, expectedOutput) => {
  return {test: testType, name: testName, function: inputFunction, input: input, expectation: expectedOutput}
}
// test1 = inputHash(basicMatch, "It can create a message", greetingMessage, "Phil", "Hello Phil, are you ready to party?")


//for more complicated functions, save the result to a variable and put into the hash instead of function and inputs
//NEEDS THE APPROPRIATE RESULTS MATCHER
resultHash = (testType, testName, inputResult, expectedOutput) => {
  return {test: testType, name: testName, result: inputResult, expectation: expectedOutput}
}
//message = greetingMessage("Phil")
//test2 = resultHash(complexMatch, "It can create a message", message, "Hello Phil, are you ready to party?")


// pushes test to test suite, may be redundant
addTest = (testSuite, test) =>{
  testSuite.push(test)
};

// just unpacks and displays the information in rows, you can also just console.log(test) and open the dropdown in console, but can be messy
displayTest = (test) => {
  console.log(test)
  console.log(test.test)
  console.log(test.name)
  if( test.result) {
    console.log(test.result)
  } else {
    console.log(test.function)
    console.log(test.input)
  };
  console.log(test.expectation)
};


//called on the testSuite array, just an each function that runs the runTest function on each test saved in the array
testRunner = (testSuite) => {
  testSuite.forEach(runTest);
;}
 

// works by checking if the test has a result attribute, which is only assigned on the result hash type
// once it knows which type it chooses a branch, test.test calls the test attribute (the function name), and the other attributes pass the arguments to the function
runTest = (test) => {
  if(test.result) {
    output = test.test(test.name, test.result, test.expectation)
  } else {
    output = test.test(test.name, test.function, test.input, test.expectation)
  };
  console.log(output)
};
//message = greetingMessage("Phil")
// test2 = resultHash(complexMatch, "It can create a message", message, "Hello Phil, are you ready to party?")
//runTest(test2) => "It can create a message: Passed!"


// just a simple test method used to test the testing framework, to test that it can test tests correctly... right?
greetingMessage = (name) => {
    return `Hello ${name}, are you ready to party?` 
}


// love train => create test in console, either directly using input hash, or by saved result in result hash
// => hash takes the test type (matcher from top), a name for the test (which is interpolated to results), either the result variable || function name and inputs, and the expected outcome
// => testRun(testHash) can be called directly to run the test, which will return errors in console, or a pass/ fail message
// => when tests are passing they can safely be put into the testSuite hash as a collection of all tests, you can use testRunner(testSuite) to run all tests and get messages
