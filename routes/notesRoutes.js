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

module.exports = notes;