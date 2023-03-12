import React from "react";
import { getInitialData } from "../utils/index";
import Navbar from "./Navbar";
import NoteInput from "./NoteInput";
import NoteSection from "./NoteSection";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      search: "",
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onActiveHandler = this.onActiveHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onSearchHandler(event) {
    const captureValue = event.target.value.toLowerCase();
    this.setState({ search: captureValue });
    event.preventDefault();
  }

  onActiveHandler(id) {
    const notesActive = this.state.notes.filter((note) => note.id === id);
    const activeNotes = (notesActive[0].archived = true);
    this.setState({ activeNotes });
  }

  onArchiveHandler(id) {
    const noteArchive = this.state.notes.filter((note) => note.id === id);
    const undoNote = (noteArchive[0].archived = false);
    this.setState({ undoNote });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toDateString(),
            archived: false,
          },
        ],
      };
    });
  }

  render() {
    const searchNotes = !this.state.search
      ? this.state.notes
      : this.state.notes.filter((note) =>
          note.title.toLowerCase().match(this.state.search)
        );
    const activeNotes = searchNotes.filter((note) => note.archived === false);
    const archiveNotes = searchNotes.filter((note) => note.archived === true);

    return (
      <>
        <Navbar onSearch={this.onSearchHandler} />
        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler} />
        </div>
        <NoteSection
          onDelete={this.onDeleteHandler}
          activeNotes={activeNotes}
          archiveNotes={archiveNotes}
          onActive={this.onActiveHandler}
          onArchive={this.onArchiveHandler}
        />
      </>
    );
  }
}

export default NoteApp;
