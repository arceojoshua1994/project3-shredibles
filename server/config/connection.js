const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://root:<Password123>@cluster0.ik8zwvi.mongodb.net/mern-shopping');

module.exports = mongoose.connection;
