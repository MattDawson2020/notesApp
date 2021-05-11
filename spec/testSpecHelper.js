//create separate file for matchers

resultMatch = (testName, inputResult, expectedOutput) => {
  if(inputResult === expectedOutput) {
    return `${testName}: Passed!` 
  } else {
    throw new Error(`${testName}: Failed! \nExpected output [${expectedOutput}] \nActual output [${inputResult}]`)
  }
}

resultContain = (testName, inputResult, expectedOutput) => {
  if(inputResult.includes(expectedOutput)) {
    return `${testName}: Passed!` 
  } else {
    throw new Error(`${testName}: Failed! \nExpected output [${expectedOutput}] \nActual output [${inputResult}]`)  }
}

resultNotMatch = (testName, inputResult, expectedOutput) => {
  if(inputResult !== expectedOutput) {
    return `${testName}: Passed!` 
  } else {
    throw new Error(`${testName}: Failed! \nExpected output to not be [${expectedOutput}] \nActual output [${inputResult}]`) 
  }
}

let testSuite = []


resultHash = (testName, inputResult, testType, expectedOutput) => {
  return {test: testType, name: testName, result: inputResult, expectation: expectedOutput}
}

addTest = (testSuite, test) =>{
  testSuite.push(test)
};


displayTest = (test) => {
  console.log(test)
  console.log(test.test)
  console.log(test.name)
  console.log(test.result)
  console.log(test.expectation)
};


testRunner = (testSuite) => {
  testSuite.forEach(runTest);
;}
 

runTest = (test) => {
  output = test.test(test.name, test.result, test.expectation)
  console.log(output)
};


greetingMessage = (name) => {
    return `Hello ${name}, are you ready to party?` 
}

