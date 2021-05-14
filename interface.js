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
    // const note = new Note(title, body);
    let note = noteList.createNote(title, body);
    noteList.storeNote(note);
    document.getElementById("titleBox").value = '';
    document.getElementById("bodyBox").value = '';
  });

  document.getElementById("submitButton").addEventListener("click", function() {
    let noteTitle = document.createElement('h3')
    let noteBody = document.createElement('p')
    let div = document.createElement('div');
    let link = document.createElement('a')
    

    function createDiv(note) {
      noteTitle.textContent = note.title
      noteBody.textContent = note.body
      link.setAttribute('href', `#${note.id}`)
      link.innerText = "Link"
      div.appendChild(noteTitle)
      div.appendChild(noteBody)
      div.appendChild(link)
      div.style['backgroundColor'] = 'yellow'
      
      showNotesContainer.appendChild(div)
    }
    showNotesContainer.classList.add("not-visible")
    notesAvailable.forEach(createDiv)
  });

  document.getElementById("showNotes").addEventListener('click', function() {
    showNotesContainer.classList.remove("not-visible")
  })


  expandSelectedNote();

  function expandSelectedNote(){
    window.addEventListener("hashchange", showCurrentNote);
  }

  function showCurrentNote() {
    showSingleNote(getNoteByTitle(window.location));
  }

  function getNoteByTitle(location) {
    return location.hash.split('#')[1];
  }
  
  function showSingleNote(note) {
    let noteTitle = document.createElement('h3')
    let noteBody = document.createElement('p')
    let div = document.createElement('div');
    let link = document.createElement('a')
  
    let currentNote;

    function findFunction(fred){
      if(fred.id == location.hash.split('#')[1]) {
        currentNote = fred
      }
    }

    notesAvailable.forEach(findFunction)

    noteTitle.textContent = currentNote.title
    noteBody.textContent = currentNote.body
    link.innerText = "Link"
    div.appendChild(noteTitle)
    div.appendChild(noteBody)
    div.appendChild(link)
    console.log(div)
    div.style['backgroundColor'] = 'yellow'
    document.getElementById('singleNote')
            .appendChild(div)
    showNotesContainer.classList.add("not-visible")
          
  }
  let emojiText = ":fire:";

  function getEmojiData(emojiText) {
    fetch ("https://makers-emojify.herokuapp.com/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({"text": emojiText}),
    })
    .then((response) => response.json())
    .then(data => {
      console.log(data.emojified_text)
    })
    };

  getEmojiData(emojiText);
  let emojiReturn = data.emojified_text
  return emojiReturn


    

});




