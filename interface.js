document.addEventListener("DOMContentLoaded", function() {
  const noteList = new NoteList();
  const notesAvailable = noteList.showNotes();

  document.getElementById("submitButton").addEventListener("click", function() {
    const title = document.getElementById("titleBox").value;
    const body = document.getElementById("bodyBox").value;
    const note = new Note(title, body);
    noteList.storeNote(note);
  });



});
