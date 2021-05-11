let noteTestSuite = []


// let result = greetingMessage("Cynthia")
// let test1 = resultHash("It can create a message", result, resultMatch,  "Hello Cynthia, are you ready to party?")
// addTest(noteTestSuite, test1)

let note1 = new Note("Hello User", "Welcome to our notes app")
let noteTest1 = resultHash("A note has a title", note1.title, resultMatch, "Hello User")
let noteTest2 = resultHash("A note has a body", note1.body, resultMatch, "Welcome to our notes app")
addTest(noteTestSuite, noteTest1)
addTest(noteTestSuite, noteTest2)


testRunner(noteTestSuite);









