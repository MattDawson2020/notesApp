class NoteList {
  constructor() {
    this.notes = []
    this.index = 0
  }

  storeNote(note) {
    this.notes.push(note);
  };

  showNotes(){
    return this.notes;
  }

  createNote(title, body) {
    const note = new Note(title, body , this.index += 1);
    return note
  }

  // createDiv(){
  //   let noteTitle = document.createElement('h3')
  //   let noteBody = document.createElement('p')
  //   let div = document.createElement('div');
  //   let link = document.createElement('a')
  // }

  // setDiv() {
  //   noteTitle.textContent = note.title
  //   noteBody.textContent = note.body
  //   // determine link ref from where you create
  //   link.setAttribute('href', `#${note.title}`)
  //   link.innerText = "Link"
  //   div.appendChild(noteTitle)
  //   div.appendChild(noteBody)
  //   div.appendChild(link)
  //   div.style['backgroundColor'] = 'yellow'
  // }
}


