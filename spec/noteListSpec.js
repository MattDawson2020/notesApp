let noteListTestSuite = []

// let result = greetingMessage("Cynthia")
// let test1 = resultHash("It can create a message", result, resultMatch,  "Hello Cynthia, are you ready to party?")
// addTest(noteTestSuite, test1)

let noteList1 = new NoteList();
let noteListTest1 = resultHash("it has an array", noteList1.notes, sizeMatch, 0)
addTest(noteListTestSuite, noteListTest1)

 
let pushNote = new Note();
let pushNoteList = new NoteList();
let testingTesting = pushNoteList.storeNote(pushNote);
let pushArrayTest = resultHash("it can push into an array", pushNoteList.notes, resultContain, pushNote)
addTest(noteListTestSuite, pushArrayTest)

let showNote = new Note();
let showNote2 = new Note();
let showNote3 = new Note();
let showNoteList = new NoteList();
showNoteList.storeNote(showNote);
showNoteList.storeNote(showNote2);
showNoteList.storeNote(showNote3);
let showNoteResult = showNoteList.showNotes();
let showNoteTest = resultHash("it can show the list of previous notes", showNoteResult, resultContain, showNote, showNote2, showNote3)
addTest(noteListTestSuite, showNoteTest)

testRunner(noteListTestSuite);