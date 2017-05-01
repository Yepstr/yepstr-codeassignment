// dependencies
const mongoose = require('mongoose');

// set the db name
const dbName = 'tasks-api';

// connect to the db
mongoose.connect(`mongodb://localhost/${dbName}`);

// get notified if the connection
// was successful or not
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log(`Connected to the ${dbName} database`);
});