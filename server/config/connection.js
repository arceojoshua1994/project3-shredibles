const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://arceojoshua:<#Bootycheeks69>@cluster0.ik8zwvi.mongodb.net/mern-shopping');

module.exports = mongoose.connection;
