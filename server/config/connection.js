const mongoose = require('mongoose');

// mongodb+srv://mach_schnell:<password>@cluster0.6jko491.mongodb.net/test

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mern-shopping', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
