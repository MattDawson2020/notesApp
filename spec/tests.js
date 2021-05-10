//store tests as variables on a test page, at the end of each test push into test suite array, then you can run write the tests on the page
//and run them in the console 

//WRAP ENTIRE TEST PAGE IN TESTSUITE ARRAY, THEN EVERYTHING IS INSIDE AND YOU CAN RUN IT 


//create separate file for matchers


basicMatch = (testName, inputFunction, input, expectedOutput) => {
  result = inputFunction(input)
  if(result === expectedOutput) {
      return `${testName}: Passed!` 
  } else {
      return `${testName}: Failed!` 
  }
}

complexMatch = (testName, inputResult, expectedOutput) => {
  if(inputResult === expectedOutput) {
      return `${testName}: Passed!` 
  } else {
      return `${testName}: Failed!` 
  }
}

basicContain = (testName, inputResult, expectedOutput) => {
  if(inputResult.includes(expectedOutput)) {
      return `${testName}: Passed!` 
  } else {
      return `${testName}: Failed!` 
  }
}

complexContain = (testName, inputResult, expectedOutput) => {
  if(inputResult.includes(expectedOutput)) {
      return `${testName}: Passed!` 
  } else {
      return `${testName}: Failed!` 
  }
}

basicNotMatch = (testName, inputFunction, input, expectedOutput) => {
  result = inputFunction(input)
  if(result !== expectedOutput) {
      return `${testName}: Passed!` 
  } else {
      return `${testName}: Failed!` 
  }
}

complexNotMatch = (testName, inputResult, expectedOutput) => {
  if(inputResult !== expectedOutput) {
      return `${testName}: Passed!` 
  } else {
      return `${testName}: Failed!` 
  }
}

let testSuite = []

storeTestHash = (testType, testName, inputFunction, input, expectedOutput) => {
  return {test: testType, name: testName, function: inputFunction, input: input, expectation: expectedOutput}
}

addTest = (testSuite, test) =>{
  testSuite.push(test)
};

displayTest = (test) => {
  console.log(test)
  console.log(test.test)
  console.log(test.name)
  console.log(test.function)
  console.log(test.input)
  console.log(test.expectation)
}

testRunner = (testSuite) => {
  testSuite.forEach(runTest);
;}
 
runTest = (test) => {
  //add internal iff block to see if test has inputs or has result, and have two different internal test runs
  result = test.test(test.name, test.function, test.input, test.expectation)
  console.log(result)
}


greetingMessage = (name) => {
    return `Hello ${name}, are you ready to party?` 
}
