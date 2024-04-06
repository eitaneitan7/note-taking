const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const cors = require("cors");

const Note = require("./models/Note");

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

// POST: Create a new note
app.post("/api/notes", async (req, res) => {
  const note = new Note({
    title: req.body.title,
    content: req.body.content,
  });
  try {
    const savedNote = await note.save();
    res.status(201).send(savedNote);
  } catch (err) {
    res.status(400).send(err);
  }
});

// GET: Retrieve all notes
app.get("/api/notes", async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).send(notes);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// Update an existing note
app.put("/api/notes/:id", async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Note not found.");
    }

    if (req.body.title) note.title = req.body.title;
    if (req.body.content) note.content = req.body.content;

    const updatedNote = await note.save();
    res.status(200).json(updatedNote);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a Note
app.delete('/api/notes/:id', async (req, res) => {
    try {
      const note = await Note.findByIdAndDelete(req.params.id);
      if (!note) {
        return res.status(404).send('Note not found.');
      }
      res.status(200).send(`Successfully deleted note with id ${req.params.id}`);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  

// Define the port
const port = process.env.PORT || 4000;

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
