const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.user = require('./utilisateur')
db.galerie = require('./galerie')
db.prestation = require('./prestation')

module.exports = db;