document.addEventListener("DOMContentLoaded", function() {
  const noteList = new NoteList();
  const notesAvailable = noteList.showNotes();
  // const notes = new Note("hello", "body");
  // const notes2 = new Note("hello2", "body2");
  // noteList.storeNote(notes);
  // noteList.storeNote(notes2);

  document.getElementById("submitButton").addEventListener("click", function() {
    let title = document.getElementById("titleBox").value;
    let body = document.getElementById("bodyBox").value;
    const note = new Note(title, body);
    noteList.storeNote(note);
    document.getElementById("titleBox").value = '';
    document.getElementById("bodyBox").value = '';
  });

  document.getElementById("showNotes").addEventListener('click', function() {
    console.log('clicked once')

  function myFunction(note) {
    console.log('clicked')
    let noteTitle = document.createElement('h3')
    let noteBody = document.createElement('p')
    let div = document.createElement('div');
    noteTitle.textContent = note.title
    noteBody.textContent = note.body
    div.appendChild(noteTitle)
    div.appendChild(noteBody)
    div.style['backgroundColor'] = 'yellow'

    const showNotesContainer = document.getElementById('showNotesContainer')
    showNotesContainer.appendChild(div)
  }
  console.log(notesAvailable)
  notesAvailable.forEach(myFunction)
  
  })



});
