import React from 'react';
import CreateNote from './components/CreateNote';
import NotesList from './components/NotesList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Notes App</h1>
        <CreateNote />
        <NotesList />
      </div>
    </div>
  );
}


export default App;
