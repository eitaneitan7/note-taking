import React, { useState } from 'react';

function NoteItem({ note, handleDelete, handleUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedContent, setEditedContent] = useState(note.content);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const saveEdit = () => {
    handleUpdate(note._id, editedTitle, editedContent);
    setIsEditing(false);
  };

  return (
    <li className="p-4 border rounded-lg flex justify-between items-start space-x-4">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="mb-2 px-2 py-1 border rounded-md w-full"
          />
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className="px-2 py-1 border rounded-md w-full"
            rows="3"
          ></textarea>
        </div>
      ) : (
        <div>
          <h3 className="font-bold">{note.title}</h3>
          <p className="mt-2">{note.content}</p>
        </div>
      )}
      <div className="flex flex-col gap-2">
        {isEditing ? (
          <button
            onClick={saveEdit}
            className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
          >
            Save
          </button>
        ) : (
          <button
            onClick={toggleEdit}
            className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => handleDelete(note._id)}
          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default NoteItem;
