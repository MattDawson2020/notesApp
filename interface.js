document.addEventListener("DOMContentLoaded", function() {
  const noteList = new NoteList();
  const notesAvailable = noteList.showNotes();
  const showNotesContainer = document.getElementById('showNotesContainer')
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

  document.getElementById("submitButton").addEventListener("click", function() {
    let noteTitle = document.createElement('h3')
    let noteBody = document.createElement('p')
    let div = document.createElement('div');

    function hideFunction(note) {
      noteTitle.textContent = note.title
      noteBody.textContent = note.body
      div.appendChild(noteTitle)
      div.appendChild(noteBody)
      div.style['backgroundColor'] = 'yellow'
  
      showNotesContainer.classList.add("not-visible")
      showNotesContainer.appendChild(div)
    }
    notesAvailable.forEach(hideFunction)
  });

  document.getElementById("showNotes").addEventListener('click', function() {
    showNotesContainer.classList.remove("not-visible")
  })



});
