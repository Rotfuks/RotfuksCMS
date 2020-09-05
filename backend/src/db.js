import mongoose from 'mongoose';

mongoose.connect(process.env.CMS_DB_URI,
    {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('DB is connected');
});

export default db;
