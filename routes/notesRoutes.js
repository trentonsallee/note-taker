const express = require('express');
const store = require('../Develop/db/notesConnections');

router.get('/notes', (req, res) => {
    //temp
      .getNotes()
      .then((notes) => {
        return res.json(notes);
      })
      .catch((err) => res.status(500).json(err));
  });

  router.post('/notes', (req, res) => {
    //temp
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
  });

  router.delete('/notes', (req, res) => {
    //temp
    .removeNote(req.params.id)
    //.then(() => res.json({     }))
    .catch((err) => res.status(500).json(err));
  });
  
module.exports = notes;