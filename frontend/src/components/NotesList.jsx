import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NoteItem from './NoteItem';

function NotesList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, [notes]);

  const fetchNotes = async () => {
    try {
      const response = await axios.get('/api/notes');
      setNotes(response.data);
    } catch (error) {
      console.error("Error fetching notes", error);
    }
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/notes/${id}`);
    fetchNotes(); // Refresh the notes list
  };

  const handleUpdate = async (id, title, content) => {
    await axios.put(`/api/notes/${id}`, { title, content });
    fetchNotes(); // Refresh the notes list
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <ul className="space-y-4">
        {notes.map((note) => (
          <NoteItem
            key={note._id}
            note={note}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        ))}
      </ul>
    </div>
  );
}

export default NotesList;
