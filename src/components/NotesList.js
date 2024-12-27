import React, { useState } from 'react';

const NotesList = ({ notes, deleteNote, editNote, togglePin }) => {
  const [editMode, setEditMode] = useState(null);
  const [editedContent, setEditedContent] = useState('');

  const handleEdit = (note) => {
    setEditMode(note.id);
    setEditedContent(note.content);
  };

  const handleSaveEdit = (id) => {
    editNote(id, editedContent);
    setEditMode(null);
  };

  const handleCancelEdit = () => {
    setEditMode(null);
  };

  return (
    <ul id="notesList">
      {notes
        .sort((a, b) => b.pinned - a.pinned) // Pin notes at the top
        .map((note) => (
          <li key={note.id} className={note.pinned ? 'pinned' : ''}>
            {editMode === note.id ? (
              <div>
                <textarea
                  value={editedContent}
                  onChange={(e) => setEditedContent(e.target.value)}
                ></textarea>
                <button onClick={() => handleSaveEdit(note.id)}>Save</button>
                <button onClick={handleCancelEdit}>Cancel</button>
              </div>
            ) : (
              <div>
                <span dangerouslySetInnerHTML={{ __html: note.content }}></span>
                <button onClick={() => handleEdit(note)}>Edit</button>
                <button onClick={() => deleteNote(note.id)}>Delete</button>
                <button onClick={() => togglePin(note.id)}>
                  {note.pinned ? 'Unpin' : 'Pin'}
                </button>
              </div>
            )}
          </li>
        ))}
    </ul>
  );
};

export default NotesList;