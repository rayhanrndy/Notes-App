import React from "react";
import NoteCard from "./NoteCard";

function NoteArchive({ onDelete, notes, onArchive }) {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteCard
          changeButton="Unarchive"
          key={note.id}
          onDelete={onDelete}
          buttonData={onArchive}
          {...note}
        />
      ))}
    </div>
  );
}

export default NoteArchive;
