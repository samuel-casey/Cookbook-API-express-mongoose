//Import connection
const mongoose = require('../db/connection');

/* Create Author as new schema
    properties:
    firstName (string),
    lastName (string),
    cookbooks[] (reference to Cookbook model by id)
*/


//export model named "Author"
Author = mongoose.model('Authors', AuthorSchema);
module.exports = Author;
