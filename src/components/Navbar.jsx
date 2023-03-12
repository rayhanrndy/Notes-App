import React from "react";

function Navbar({ onSearch }) {
  return (
    <div className="note-app__header">
      <h1>Aplikasi Catatan</h1>
      <input
        onChange={(event) => onSearch(event)}
        type="text"
        className="note-search"
        placeholder="Cari..."
      />
    </div>
  );
}

export default Navbar;
