import React from "react";
import NoteActive from "./NoteActive";
import NoteArchive from "./NoteArchive";

function NoteSection({
  onDelete,
  onArchive,
  onActive,
  activeNotes,
  archiveNotes,
}) {
  return (
    <>
      <div>
        <h1 className="heading-list">Daftar Catatan</h1>
        {activeNotes.length !== 0 ? (
          <NoteActive
            onDelete={onDelete}
            notes={activeNotes}
            onActive={onActive}
          />
        ) : (
          <p className="note-list__empty-message">Tidak Ada Catatan</p>
        )}
      </div>
      <div>
        <h1 className="heading-list">Arsip Catatan</h1>
        {archiveNotes.length !== 0 ? (
          <NoteArchive
            onDelete={onDelete}
            notes={archiveNotes}
            onArchive={onArchive}
          />
        ) : (
          <p className="note-list__empty-message">Tidak ada Catatan</p>
        )}
      </div>
    </>
  );
}

export default NoteSection;
