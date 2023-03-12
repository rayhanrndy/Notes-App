import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      limit: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value.slice(0, this.state.limit),
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <h2 className="note-input__title">Buat Catatan</h2>
        <small className="note-input__title__char-limit">
          Remaining characters: <span>{50 - this.state.title.length}</span>
        </small>
        <input
          type="text"
          placeholder="Judul"
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
        />
        <textarea
          type="text"
          placeholder="Catatan"
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
          rows="4"
        />
        <button type="submit">Tambahkan</button>
      </form>
    );
  }
}

export default NoteInput;
