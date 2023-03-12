import React from "react";
import NoteCard from "./NoteCard";

function NoteActive({ onDelete, onActive, notes }) {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteCard
          changeButton="Archive"
          key={note.id}
          buttonData={onActive}
          onDelete={onDelete}
          {...note}
        />
      ))}
    </div>
  );
}

export default NoteActive;
