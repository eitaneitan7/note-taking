import React, { useState } from 'react';
import axios from 'axios'

function CreateNote() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      alert('Please fill in all fields');
      return;
    }
    try {
      const note = { title, content };
      await axios.post('/api/notes', note);
      setTitle('');
      setContent('');
    } catch (error) {
      console.error("There was an error creating the note", error);
    }
  };
  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="px-4 py-2 border rounded-md"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="px-4 py-2 border rounded-md"
          rows="4"
        ></textarea>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Create Note</button>
      </form>
    </div>
  );
}

export default CreateNote;
