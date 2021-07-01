const winston = require('winston');
const mongoose = require('mongoose');

module.exports = function() {
  const db = `mongodb://localhost:27017/MERNCRUDDB`;
  mongoose.connect(db)
    .then(() => winston.info(`Connected to ${db}...`));
}