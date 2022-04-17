const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });
const PORT = process.env.PORT || 5000
const notes = require('./data/notes');

console.log(process.env.PORT)

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Good');
})

app.get('/api/notes', (req, res) => {
    res.send(notes);
})

app.get('/api/notes/:id', (req, res) => {
    const note = notes.find((n) => n._id === req.params.id);
    res.send(note)
})