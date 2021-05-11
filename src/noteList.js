class NoteList {
  constructor() {
    this.notes = []
  }

  storeNote(note) {
    this.notes.push(note);
  };

  showNotes(){
    return this.notes;
  }
}
