let noteListTestSuite = []

// let result = greetingMessage("Cynthia")
// let test1 = resultHash("It can create a message", result, resultMatch,  "Hello Cynthia, are you ready to party?")
// addTest(noteTestSuite, test1)

let noteList1 = new NoteList();
let noteListTest1 = resultHash("it has an array", noteList1.notes, resultMatch, [])
addTest(noteListTestSuite, noteListTest1)

 
let pushNote = new Note();
let pushNoteList = new NoteList();
pushNoteList.storeNote(pushNote)
let pushArrayTest = resultHash("it can push into an array", pushNoteList.notes, resultMatch, [pushNote])
addTest(noteListTestSuite, pushArrayTest)

testRunner(noteTestSuite);