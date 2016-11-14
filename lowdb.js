const low = require('lowdb');
const fileAsync = require('lowdb/lib/file-async');

const db = low('data/db.json',
  {
    storage: fileAsync,
    writeOnChange: false,
  }
);

module.exports = db;

