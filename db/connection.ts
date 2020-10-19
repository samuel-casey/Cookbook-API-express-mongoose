// IMPORT MONGOOSE
import mongoose = require('mongoose');
// IDENTIFIER FOR DB
const mongoURI: string = 'mongodb://localhost:27017/cookbooks_db'
// CONFIG FOR MONGOOSE
const config = { useUnifiedTopology: true, useNewUrlParser: true };
// connect
mongoose.connect(mongoURI, config);
// define db connection
let db = mongoose.connection;

// messages for connecting/disconnecting
db.on('error', (err) => console.log(err.message + ' IS MONGOD RUNNING?'));
db.on('connected', () => console.log('MONGO CONNECTED: ', mongoURI));
db.on('disconnected', () => console.log('MONGO DISCONNECTED'));

// export mongoose
export default mongoose;