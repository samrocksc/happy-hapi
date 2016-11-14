const low = require('lowdb');

const db = low('data/db.json');

module.exports = db;

