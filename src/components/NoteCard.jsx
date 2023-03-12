import React from "react";
import { showFormattedDate } from "../utils";

function NoteCard({
  id,
  title,
  body,
  createdAt,
  onDelete,
  buttonData,
  changeButton,
}) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <small className="note-item__date">
          {showFormattedDate(createdAt)}
        </small>
        <p className="note-item__body">{body}</p>
      </div>
      <div className="note-item__action">
        <button
          onClick={() => onDelete(id)}
          className="note-item__delete-button"
        >
          Delete
        </button>
        <button
          onClick={() => buttonData(id)}
          className="note-item__archive-button"
        >
          {changeButton}
        </button>
      </div>
    </div>
  );
}

export default NoteCard;
